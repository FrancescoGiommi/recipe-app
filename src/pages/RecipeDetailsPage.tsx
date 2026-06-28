import { useNavigate } from "react-router-dom";
import type { Recipe } from "../types/recipe";
import { Link, useParams } from "react-router-dom";
import { mockRecipes } from "../data/mockRecipes";
import DifficultyIndicator from "../components/ui/DifficultyIndicator";

// Icone
import {
  FaHeart,
  FaRegHeart,
  FaClock,
  FaUsers,
  FaSignal,
} from "react-icons/fa";

interface RecipeDetailsPageProps {
  favoriteRecipes: Recipe[];
  onToggleFavorite: (recipe: Recipe) => void;
}

export default function RecipeDetailsPage({
  favoriteRecipes,
  onToggleFavorite,
}: RecipeDetailsPageProps) {
  const { id } = useParams();

  const navigate = useNavigate();

  const recipe = mockRecipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) {
    return <h1>Ricetta non trovata</h1>;
  }

  const isFavorite = favoriteRecipes.some(
    (favorite) => favorite.id === recipe.id,
  );

  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <button onClick={() => navigate(-1)}>← Torna indietro</button>
          <div className="relative mt-6">
            {/* Bottone preferiti */}
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                onToggleFavorite(recipe);
              }}
              className="absolute right-4 top-4 rounded-full bg-white p-2 shadow"
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
          <h1 className="text-4xl font-bold text-slate-900">{recipe.title}</h1>

          {/* Durata, porzioni e difficoltà */}
          <div className="mt-4 flex items-center gap-6 text-slate-700">
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
          <p className="mt-4 text-slate-700">{recipe.description}</p>

          <div className="mt-8">
            {/* Ingredienti */}
            <h2 className="text-2xl font-bold text-slate-900">Ingredienti</h2>

            <ul className="mt-4 space-y-2">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient.id} className="text-slate-700">
                  {ingredient.amount} {ingredient.unit} - {ingredient.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            {/* Istruzioni e step */}
            <h2 className="text-2xl font-bold text-slate-900">Procedimento</h2>

            <ol className="mt-4 space-y-3">
              {recipe.instructions.map((istruction) => (
                <li key={istruction.step} className="text-slate-700">
                  <span className="font-bold text-orange-600">
                    Step {istruction.step}:
                  </span>{" "}
                  {istruction.text}
                </li>
              ))}
            </ol>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700"
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
