import RecipeGrid from "../components/recipe/recipeGrid";
import type { Recipe } from "../types/recipe";
import { useState, useEffect } from "react";
import { searchMeals } from "../services/mealDbService";
import SearchBar from "../components/ui/SearchBar";
import EmptyState from "../components/ui/EmpyState";
import RecipeCardSkeleton from "../components/ui/RecipeCardSkeleton";

interface HomePageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

export default function HomePage({
  favoriteRecipes,
  onToggleFavorite,
}: HomePageProps) {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        setError("");

        const data = await searchMeals(search);
        setRecipes(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Errore sconosciuto");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchRecipes();
  }, [search]);

  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SearchBar value={search} onChange={setSearch} />

          {isLoading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <RecipeCardSkeleton key={index} />
              ))}
            </div>
          )}

          {error && <p className="text-center text-red-600">{error}</p>}

          {!isLoading && !error && recipes.length === 0 ? (
            <EmptyState
              title="Nessuna ricetta trovata"
              description="Prova a cercare un altro piatto."
            />
          ) : (
            !isLoading &&
            !error && (
              <RecipeGrid
                recipes={recipes}
                favoriteRecipes={favoriteRecipes}
                onToggleFavorite={onToggleFavorite}
              />
            )
          )}
        </div>
      </main>
    </>
  );
}
