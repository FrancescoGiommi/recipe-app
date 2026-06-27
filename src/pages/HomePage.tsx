import RecipeGrid from "../components/recipe/recipeGrid";
import { mockRecipes } from "../data/mockRecipes";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <RecipeGrid recipes={mockRecipes} />
        </div>
      </main>
    </>
  );
}
