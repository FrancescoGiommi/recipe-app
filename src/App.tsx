import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Recipe } from "./types/recipe";

// Componenti
import Navbar from "./components/layout/Navbar";

// Pagine
import HomePage from "./pages/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>(() => {
    const savedFavorites = localStorage.getItem("favoriteRecipes");

    if (!savedFavorites) {
      return [];
    }

    return JSON.parse(savedFavorites) as Recipe[];
  });

  function toggleFavorite(recipe: Recipe) {
    setFavoriteRecipes((currentFavorites) => {
      const isAlreadyFavorites = currentFavorites.some(
        (favorite) => favorite.id === recipe.id,
      );

      if (isAlreadyFavorites) {
        return currentFavorites.filter((favorite) => favorite.id !== recipe.id);
      }

      return [...currentFavorites, recipe];
    });
  }

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Pagina Home */}
        <Route
          path="/"
          element={
            <HomePage
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          }
        />

        {/* Pagina di dettaglio */}
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />

        {/* Preferiti */}
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
