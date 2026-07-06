import { useNavigate, useParams } from "react-router-dom";
import type { Recipe } from "../types/recipe";
import { useState, useEffect } from "react";
import DifficultyIndicator from "../components/ui/DifficultyIndicator";
import { getMealById } from "../services/mealDbService";

// Icone
import { FaHeart, FaRegHeart, FaClock, FaUsers } from "react-icons/fa";

interface RecipeDetailsPageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

export default function RecipeDetailsPage({
  favoriteRecipes,
  onToggleFavorite,
}: RecipeDetailsPageProps) {
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipe() {
      if (!id) return;

      try {
        setIsLoading(true);
        setError("");

        const data = await getMealById(id);
        setRecipe(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Errore sconosciuto");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  const navigate = useNavigate();
  if (isLoading) {
    return (
      <main>
        <p className="min-h-screen bg-orange-50 p-6 text-slate-700 dark:bg-slate-950 dark:text-slate-300">
          Caricamento...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-orange-50 p-6 text-red-600 dark:bg-slate-950 dark:text-red-400">
        <p>{error}</p>
      </main>
    );
  }

  if (!recipe) {
    return (
      <main className="min-h-screen bg-orange-50 p-6 dark:bg-slate-950">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Ricetta non trovata
        </h1>
      </main>
    );
  }

  const isFavorite = favoriteRecipes.some(
    (favorite) => favorite.id === recipe.id,
  );

  return (
    <>
      <main className="min-h-screen bg-orange-50 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <button
            onClick={() => navigate(-1)}
            className="text-slate-700 transition hover:text-orange-600 dark:text-slate-300 dark:hover:text-orange-400"
          >
            ← Torna indietro
          </button>
          <div className="relative mt-6">
            {/* Bottone preferiti */}
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                onToggleFavorite(recipe);
              }}
              className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:scale-105 dark:bg-slate-800"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-slate-700" />
              )}
            </button>

            {/* Immagine */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="mt-6 h-80 w-full rounded-2xl object-cover"
            />
          </div>

          {/* Titolo */}
          <h1 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            {recipe.title}
          </h1>

          {/* Durata, porzioni e difficoltà */}
          <div className="mt-4 flex flex-wrap items-center gap-6 text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <FaClock className="text-orange-500" />
              <span>{recipe.readyInMinutes} min</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers className="text-orange-500" />
              <span>{recipe.servings} porzioni</span>
            </div>

            <div className="flex items-center gap-2">
              <DifficultyIndicator difficulty={recipe.difficulty} />
            </div>
          </div>

          {/* Descrizione */}
          <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
            {recipe.description}
          </p>

          <div className="mt-8">
            {/* Ingredienti */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Ingredienti
            </h2>

            <ul className="mt-4 space-y-2">
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={ingredient.id}
                  className="text-slate-700 dark:text-slate-300"
                >
                  {ingredient.amount} {ingredient.unit} - {ingredient.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            {/* Istruzioni e step */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Procedimento
            </h2>

            <div className="mt-4 space-y-3">
              {recipe.instructions.map((instruction) => (
                <p
                  key={instruction.step}
                  className="leading-relaxed text-slate-700 dark:text-slate-300"
                >
                  <span className="font-bold text-orange-600 dark:text-orange-400">
                    Step {instruction.step}:
                  </span>{" "}
                  {instruction.text}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-500/10 dark:text-orange-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
