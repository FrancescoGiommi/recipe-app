import type { Recipe } from "../types/recipe";
import RecipeGrid from "../components/recipe/recipeGrid";

interface FavoritesPageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

export default function FavoritesPage({
  favoriteRecipes,
  onToggleFavorite,
}: FavoritesPageProps) {
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
