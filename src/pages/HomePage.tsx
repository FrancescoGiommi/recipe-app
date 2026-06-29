import RecipeGrid from "../components/recipe/recipeGrid";
import type { Recipe } from "../types/recipe";
import { useState, useEffect } from "react";
import { searchMeals } from "../services/mealDbService";
import { mockRecipes } from "../data/mockRecipes";
import SearchBar from "../components/ui/SearchBar";

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

  const filteredRecipes = mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

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

          {isLoading && <p className="text-center">Caricamento...</p>}

          {error && <p className="text-center text-red-600">{error}</p>}

          {!isLoading && !error && (
            <RecipeGrid
              recipes={recipes}
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={onToggleFavorite}
            />
          )}
        </div>
      </main>
    </>
  );
}
