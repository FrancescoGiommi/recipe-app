import { useParams } from "react-router-dom";
import { mockRecipes } from "../data/mockRecipes";

export default function RecipeDetailsPage() {
  const { id } = useParams();

  const recipe = mockRecipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) {
    return <h1>Ricetta non trovata</h1>;
  }

  return (
    <>
      <main className="min-h-screen bg-orange-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h1 className="text-4xl font-bold text-slate-900">{recipe.title}</h1>

          <img
            src={recipe.image}
            alt={recipe.title}
            className="mt-6 h-80 w-full rounded-2xl object-cover"
          />

          <p className="mt-4 text-slate-700">
            {recipe.readyInMinutes} min - {recipe.servings} porzioni
          </p>
        </div>
      </main>
    </>
  );
}
