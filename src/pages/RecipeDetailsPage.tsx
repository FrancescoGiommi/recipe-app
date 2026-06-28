import type { Recipe } from "../types/recipe";
import { Link, useParams } from "react-router-dom";
import { mockRecipes } from "../data/mockRecipes";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface RecipeDetailsPageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

export default function RecipeDetailsPage({
  favoriteRecipes,
  onToggleFavorite,
}: RecipeDetailsPageProps) {
  const { id } = useParams();

  const recipe = mockRecipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) {
    return <h1>Ricetta non trovata</h1>;
  }

  const isFavorite = favoriteRecipes.some(
    (favorite) => favorite.id === recipe.id,
  );

  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="relative mt-6">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                onToggleFavorite(recipe);
              }}
              className="absolute right-4 top-4 rounded-full bg-white p-2 shadow"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-slate-700" />
              )}
            </button>

            <img
              src={recipe.image}
              alt={recipe.title}
              className="mt-6 h-80 w-full rounded-2xl object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">{recipe.title}</h1>

          <p className="mt-4 text-slate-700">
            {recipe.readyInMinutes} min - {recipe.servings} porzioni
          </p>
        </div>
      </main>
    </>
  );
}
