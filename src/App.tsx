import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Recipe } from "./types/recipe";
import { Toaster, toast } from "react-hot-toast";

// Componenti
import Navbar from "./components/layout/Navbar";

// Pagine
import HomePage from "./pages/HomePage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
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
        toast.success("Ricetta rimossa dai preferiti");
        return currentFavorites.filter((favorite) => favorite.id !== recipe.id);
      }

      toast.success("Ricetta aggiunta ai preferiti");
      return [...currentFavorites, recipe];
    });
  }

  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", String(isDarkMode));
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />
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
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetailsPage
              favoriteRecipes={favoriteRecipes}
              onToggleFavorite={toggleFavorite}
            />
          }
        />

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
