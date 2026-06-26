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
  {
    id: 2,
    title: "Pasta al forno",
    image: "https://picsum.photos/400/300",
    description: "Traditional italian pasta",
    readyInMinutes: 30,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      {
        id: 1,
        name: "Pasta sfoglia",
        amount: 400,
        unit: "g",
      },
    ],
    tags: ["Italian", "Pasta"],
    isFavorite: false,
  },
  {
    id: 3,
    title: "Pizza",
    image: "https://picsum.photos/400/300",
    description: "Traditional italian pizza",
    readyInMinutes: 10,
    servings: 4,
    difficulty: "easy",
    ingredients: [
      {
        id: 1,
        name: "Pizza",
        amount: 400,
        unit: "g",
      },
    ],
    tags: ["Italian", "Pizza"],
    isFavorite: false,
  },
  {
    id: 4,
    title: "Spaghetti al tartufo",
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
