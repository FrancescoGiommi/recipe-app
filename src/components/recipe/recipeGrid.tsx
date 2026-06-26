import type { Recipe } from "../../types/recipe";
import RecipeCard from "./recipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
}

function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
}

export default RecipeGrid;
