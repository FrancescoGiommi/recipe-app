import { Link } from "react-router-dom";
import type { Recipe } from "../../types/recipe";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DifficultyIndicator from "../ui/DifficultyIndicator";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipe: Recipe) => void;
}

function RecipeCard({ recipe, isFavorite, onToggleFavorite }: RecipeCardProps) {
  return (
    <>
      <Link to={`/recipe/${recipe.id}`}>
        <article className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-slate-900 dark:shadow-slate-950">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              onToggleFavorite(recipe);
            }}
            className="absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow transition-colors dark:bg-slate-800"
          >
            {isFavorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-slate-700 dark:text-slate-200" />
            )}
          </button>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {recipe.title}
            </h2>

            {recipe.readyInMinutes > 0 && recipe.servings > 0 && (
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {recipe.readyInMinutes} min - {recipe.servings} porzioni
              </p>
            )}

            <div className="flex items-center gap-2">
              <DifficultyIndicator difficulty={recipe.difficulty} />
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}

export default RecipeCard;
