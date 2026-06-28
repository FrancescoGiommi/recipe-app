import type { MealDbSearchResponse } from "../types/mealDb";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(
  query: string,
): Promise<MealDbSearchResponse> {
  const response = await fetch(`${BASE_URL}/search.php?s=${query}`);

  if (!response.ok) {
    throw new Error("Errore durante il recupero delle ricette");
  }

  return response.json();
}
