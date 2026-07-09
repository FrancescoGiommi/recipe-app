import type { Recipe } from "../types/recipe";
import type {
  SpoonacularRecipe,
  SpoonacularSearchResponse,
} from "../types/spoonaculat";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes";

function checkApiError(response: Response) {
  if (response.status === 402 || response.status === 429) {
    throw new Error("Limite giornaliero dell'API raggiunto. Riprova domani.");
  }

  if (!response.ok) {
    throw new Error("Errore durante il caricamento delle ricette.");
  }
}

export async function searchSpoonacularRecipes(
  query: string,
): Promise<Recipe[]> {
  const url = `${BASE_URL}/complexSearch?query=${encodeURIComponent(
    query,
  )}&number=12&addRecipeInformation=true&apiKey=${API_KEY}`;

  const response = await fetch(url);

  checkApiError(response);

  const data: SpoonacularSearchResponse = await response.json();

  return data.results.map(mapSpoonacularRecipe);
}

function mapSpoonacularRecipe(recipe: SpoonacularRecipe): Recipe {
  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    description: recipe.summary,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    difficulty: "easy",
    isFavorite: false,

    ingredients:
      recipe.extendedIngredients?.map((ingredient) => ({
        id: ingredient.id,
        name: ingredient.name,
        amount: ingredient.amount,
        unit: ingredient.unit,
      })) ?? [],

    instructions:
      recipe.analyzedInstructions?.[0]?.steps.map((step) => ({
        step: step.number,
        text: step.step,
      })) ?? [],

    tags: recipe.dishTypes ?? [],
  };
}

export async function getSpoonacularRecipeById(
  id: string,
): Promise<Recipe | null> {
  const url = `${BASE_URL}/${id}/information?includeNutrition=false&apiKey=${API_KEY}`;

  const response = await fetch(url);

  checkApiError(response);

  const data: SpoonacularRecipe = await response.json();

  return mapSpoonacularRecipe(data);
}
