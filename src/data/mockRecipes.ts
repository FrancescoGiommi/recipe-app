import type { Recipe } from "../types/recipe";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://picsum.photos/400/300",
    description: "Traditional italian pasta",
    readyInMinutes: 25,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      {
        id: 1,
        name: "Spaghetti",
        amount: 400,
        unit: "g",
      },
    ],
    tags: ["Italian", "Pasta"],
    isFavorite: false,
  },
];
