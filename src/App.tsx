import RecipeGrid from "./components/recipe/recipeGrid";
import { mockRecipes } from "./data/mockRecipes";

function App() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-orange-50">
        <RecipeGrid recipes={mockRecipes} />
      </main>
    </>
  );
}

export default App;
