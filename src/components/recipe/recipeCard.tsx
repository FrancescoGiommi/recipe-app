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
        <article className="relative overflow-hidden  rounded-2xl  bg-white  shadow-md">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              onToggleFavorite(recipe);
            }}
            className="absolute right-3 top-3 rounded-full bg-white p-2 shadow"
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
            className="h-48  w-full  object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-bold  text-slate-900">
              {recipe.title}
            </h2>

            <p className="mt-2  text-sm  text-slate-600">
              {recipe.readyInMinutes} min - {recipe.servings} porzioni
            </p>

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
