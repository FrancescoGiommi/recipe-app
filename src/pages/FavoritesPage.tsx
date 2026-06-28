import type { Recipe } from "../types/recipe";
import RecipeGrid from "../components/recipe/recipeGrid";
import { FaHeart } from "react-icons/fa";

interface FavoritesPageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

export default function FavoritesPage({
  favoriteRecipes,
  onToggleFavorite,
}: FavoritesPageProps) {
  if (favoriteRecipes.length === 0) {
    return (
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">
          <div className="text-center">
            <FaHeart className="mx-auto mb-4 text-6xl text-red-500" />

            <h1 className="text-3xl font-bold text-slate-900">
              Nessuna ricetta preferita
            </h1>

            <p className="mt-3 text-lg text-slate-600">
              Torna alla Home e clicca sul cuore di una ricetta per salvarla
            </p>
          </div>
        </div>
      </main>
    );
  }
  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="mb-8 text-3xl font-bold text-slate-900">
            Ricette preferite
          </h1>

          <RecipeGrid
            recipes={favoriteRecipes}
            favoriteRecipes={favoriteRecipes}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      </main>
    </>
  );
}
