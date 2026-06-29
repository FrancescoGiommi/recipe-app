import type { MealDbSearchResponse, MealDbMeal } from "../types/mealDb";
import type { Recipe, Ingredient, Instruction } from "../types/recipe";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query: string): Promise<Recipe[]> {
  const response = await fetch(`${BASE_URL}/search.php?s=${query}`);

  if (!response.ok) {
    throw new Error("Errore durante il recupero delle ricette");
  }

  function mapMealToRecipe(meal: MealDbMeal): Recipe {
    const ingredients: Ingredient[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim()) {
        ingredients.push({
          id: i,
          name: ingredient,
          amount: 0,
          unit: measure ?? "",
        });
      }
    }

    const instructionsText = meal.strInstructions;

    console.log(instructionsText);

    const instructions = meal.strInstructions
      .split(/\r?\n/)
      .filter((step) => step.trim() !== "")
      .map((step, index) => ({
        step: index + 1,
        text: step.trim(),
      }));

    return {
      id: Number(meal.idMeal),
      title: meal.strMeal,
      image: meal.strMealThumb,
      description: meal.strInstructions,

      readyInMinutes: 0,
      servings: 0,
      difficulty: "easy",

      tags: [meal.strCategory ?? "", meal.strArea ?? ""].filter(
        Boolean,
      ) as string[],

      ingredients,
      instructions,
      isFavorite: false,
    };
  }

  const data: MealDbSearchResponse = await response.json();

  if (!data.meals) {
    return [];
  }

  return data.meals.map(mapMealToRecipe);
}
