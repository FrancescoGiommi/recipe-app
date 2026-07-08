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
  const [selectedTag, setSelectedTag] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  type SortOption = "name-asc" | "name-desc" | "time-asc" | "time-desc";

  const [sortBy, setSortBy] = useState<SortOption>("name-asc");

  const availableTags = Array.from(
    new Set(recipes.flatMap((recipes) => recipes.tags)),
  );

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

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedDifficulty, selectedTag, sortBy]);

  // Funzione per filtrare per difficoltà
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesDifficulty =
      selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty;

    const matchesTag =
      selectedTag === "all" || recipe.tags.includes(selectedTag);

    return matchesDifficulty && matchesTag;
  });

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.title.localeCompare(b.title);

      case "name-desc":
        return b.title.localeCompare(a.title);

      case "time-asc":
        return a.readyInMinutes - b.readyInMinutes;

      case "time-desc":
        return b.readyInMinutes - a.readyInMinutes;

      default:
        return 0;
    }
  });

  const recipesPerPage = 9;

  const totalPages = Math.ceil(sortedRecipes.length / recipesPerPage);

  const paginatedRecipes = sortedRecipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage,
  );

  return (
    <>
      <main className="min-h-screen bg-orange-50 transition-colors dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SearchBar value={search} onChange={setSearch} />

          {isLoading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <RecipeCardSkeleton key={index} />
              ))}
            </div>
          )}

          {error && (
            <p className="text-center text-red-600 dark:text-red-400">
              {error}
            </p>
          )}

          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <select
              value={selectedDifficulty}
              onChange={(event) => setSelectedDifficulty(event.target.value)}
              className="mb-8 rounded-xl border border-orange-200 bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="all">Tutte le difficoltà</option>
              <option value="easy">Facile</option>
              <option value="medium">Media</option>
              <option value="hard">Difficile</option>
            </select>

            <select
              value={selectedTag}
              onChange={(event) => setSelectedTag(event.target.value)}
              className="mb-8 rounded-xl border border-orange-200 bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="all">Tutte le categorie</option>
              {availableTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>

            {/* Ordinamento per nome e tempo */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="mb-8 rounded-xl border border-orange-200 bg-white px-4 py-3 text-slate-700 outline-none transition-colors focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="name-asc">Nome A-Z</option>
              <option value="name-desc">Nome Z-A</option>
              {/* <option value="time-asc">Tempo crescente</option>
              <option value="time-desc">Tempo decrescente</option> */}
            </select>
          </div>

          {!isLoading && !error && filteredRecipes.length === 0 ? (
            <EmptyState
              title="Nessuna ricetta trovata"
              description="Prova a cercare un altro piatto."
            />
          ) : (
            !isLoading &&
            !error && (
              <RecipeGrid
                recipes={paginatedRecipes}
                favoriteRecipes={favoriteRecipes}
                onToggleFavorite={onToggleFavorite}
              />
            )
          )}
          {/* Paginazione */}
          {!isLoading && !error && totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-3">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}
                className="rounded-xl bg-orange-100 px-4 py-2 text-orange-700 disabled:opacity-50 dark:bg-slate-800 dark:text-slate-200"
              >
                Precedente
              </button>

              <span className="px-4 py-2 text-slate-700 dark:text-slate-300">
                Pagina {currentPage} di {totalPages}
              </span>

              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() =>
                  setCurrentPage((page) => Math.min(page + 1, totalPages))
                }
                className="rounded-xl bg-orange-100 px-4 py-2 text-orange-700 disabled:opacity-50 dark:bg-slate-800 dark:text-slate-200"
              >
                Successiva
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
