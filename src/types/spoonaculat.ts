export interface SpoonacularSearchResponse {
  results: SpoonacularRecipe[];
}

export interface SpoonacularRecipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  readyInMinutes: number;
  servings: number;
  dishTypes: string[];
}
