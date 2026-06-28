import RecipeGrid from "../components/recipe/recipeGrid";
import { useState } from "react";
import { mockRecipes } from "../data/mockRecipes";
import SearchBar from "../components/ui/SearchBar";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredRecipes = mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SearchBar value={search} onChange={setSearch} />
          <RecipeGrid recipes={filteredRecipes} />
        </div>
      </main>
    </>
  );
}
