import { Link } from "react-router-dom";
import type { Recipe } from "../../types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
  isFavorite: boolean;
  onToggleFavorite: (recipe: Recipe) => void;
}

function RecipeCard({ recipe, isFavorite, onToggleFavorite }: RecipeCardProps) {
  return (
    <>
      <Link to={`/recipe/${recipe.id}`}>
        <article className="overflow-hidden  rounded-2xl  bg-white  shadow-md">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              onToggleFavorite(recipe);
            }}
          >
            {isFavorite ? "❤️" : "🤍"}
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

            <p className="mt-2 text-sm  font-medium  text-orange-600">
              Difficoltà: {recipe.difficulty}
            </p>
          </div>
        </article>
      </Link>
    </>
  );
}

export default RecipeCard;
