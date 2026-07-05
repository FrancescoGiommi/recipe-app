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
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  // Chiamata API per ottenere le ricette
  useEffect(() => {
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        setError("");

        const data = await searchMeals(debouncedSearch);
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
  }, [debouncedSearch]);

  // Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Funzione per filtrare per difficoltà
  const filteredRecipes = recipes.filter((recipe) => {
    if (selectedDifficulty === "all") {
      return true;
    }

    return recipe.difficulty === selectedDifficulty;
  });

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

          <select
            value={selectedDifficulty}
            onChange={(event) => setSelectedDifficulty(event.target.value)}
            className="mb-8 rounded-xl border border-orange-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-orange-500"
          >
            <option value="all">Tutte le difficoltà</option>
            <option value="easy">Facile</option>
            <option value="medium">Media</option>
            <option value="hard">Difficile</option>
          </select>

          {!isLoading && !error && recipes.length === 0 ? (
            <EmptyState
              title="Nessuna ricetta trovata"
              description="Prova a cercare un altro piatto."
            />
          ) : (
            !isLoading &&
            !error && (
              <RecipeGrid
                recipes={filteredRecipes}
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
