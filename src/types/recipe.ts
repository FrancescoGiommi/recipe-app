export type Difficulty = "easy" | "medium" | "hard";

export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
  readyInMinutes: number;
  servings: number;
  difficulty: Difficulty;
  ingredients: Ingredient[];
  tags: string[];
  isFavorite: boolean;
}
