import type { Recipe } from "../../types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <>
      <article className="overflow-hidden  rounded-2xl  bg-white  shadow-md">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-48  w-full  object-cover"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold  text-slate-900">{recipe.title}</h2>

          <p className="mt-2  text-sm  text-slate-600">
            {recipe.readyInMinutes} min - {recipe.servings} porzioni
          </p>

          <p className="mt-2 text-sm  font-medium  text-orange-600">
            Difficoltà: {recipe.difficulty}
          </p>
        </div>
      </article>
    </>
  );
}

export default RecipeCard;
