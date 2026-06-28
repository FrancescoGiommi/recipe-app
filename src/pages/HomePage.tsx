import RecipeGrid from "../components/recipe/recipeGrid";
import type { Recipe } from "../types/recipe";
import { useState } from "react";
import { mockRecipes } from "../data/mockRecipes";
import SearchBar from "../components/ui/SearchBar";

interface HomePageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

export default function HomePage({
  favoriteRecipes,
  onToggleFavorite,
}: HomePageProps) {
  const [search, setSearch] = useState("");

  const filteredRecipes = mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SearchBar value={search} onChange={setSearch} />

          {filteredRecipes.length > 0 ? (
            <RecipeGrid
              recipes={filteredRecipes}
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={onToggleFavorite}
            />
          ) : (
            <p className="mt-16 text-center text-lg text-slate-600">
              Nessuna ricetta trovata, prova con un altro nome
            </p>
          )}
        </div>
      </main>
    </>
  );
}
