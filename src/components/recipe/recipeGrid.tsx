import type { Recipe } from "../../types/recipe";
import RecipeCard from "./recipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

function RecipeGrid({
  recipes,
  favoriteRecipes,
  onToggleFavorite,
}: RecipeGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favoriteRecipes.some(
            (favorite) => favorite.id === recipe.id,
          )}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;
