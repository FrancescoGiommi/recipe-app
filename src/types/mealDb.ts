export interface MealDbMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strCategory: string | null;
  strArea: string | null;

  [key: string]: string | null;
}

export interface MealDbSearchResponse {
  meals: MealDbMeal[] | null;
}
