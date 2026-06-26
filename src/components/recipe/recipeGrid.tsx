import type { Recipe } from "../../types/recipe";
import RecipeCard from "./recipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
}

function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;
