import type { Recipe } from "../../types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article>
      <h1>{recipe.title}</h1>
    </article>
  );
}

export default RecipeCard;
