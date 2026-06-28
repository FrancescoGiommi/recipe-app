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
    instructions: [
      {
        step: 1,
        text: "Porta a ebollizione abbondante acqua salata.",
      },
      {
        step: 2,
        text: "Cuoci gli spaghetti fino a cottura al dente.",
      },
      {
        step: 3,
        text: "Mescola uova e pecorino in una ciotola.",
      },
      {
        step: 4,
        text: "Unisci il guanciale croccante e manteca la pasta.",
      },
    ],
    isFavorite: false,
  },
  {
    id: 2,
    title: "Pasta al forno",
    image: "https://picsum.photos/400/300",
    description: "Traditional italian pasta",
    readyInMinutes: 30,
    servings: 4,
    difficulty: "hard",
    ingredients: [
      {
        id: 1,
        name: "Pasta sfoglia",
        amount: 400,
        unit: "g",
      },
    ],
    tags: ["Italian", "Pasta"],
    instructions: [
      {
        step: 1,
        text: "Porta a ebollizione abbondante acqua salata.",
      },
      {
        step: 2,
        text: "Cuoci la pasta fino a cottura al dente.",
      },
      {
        step: 3,
        text: "Mescola uova e pecorino in una ciotola.",
      },
      {
        step: 4,
        text: "Unisci il guanciale croccante e manteca la pasta.",
      },
    ],
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
    instructions: [
      {
        step: 1,
        text: "Porta a ebollizione abbondante acqua salata.",
      },
      {
        step: 2,
        text: "Cuoci gli spaghetti fino a cottura al dente.",
      },
      {
        step: 3,
        text: "Mescola uova e pecorino in una ciotola.",
      },
      {
        step: 4,
        text: "Unisci il guanciale croccante e manteca la pasta.",
      },
    ],
    isFavorite: false,
  },
  {
    id: 4,
    title: "Spaghetti al tartufo",
    image: "https://picsum.photos/400/300",
    description: "Traditional italian pasta",
    readyInMinutes: 25,
    servings: 4,
    difficulty: "medium",
    ingredients: [
      {
        id: 1,
        name: "Spaghetti",
        amount: 400,
        unit: "g",
      },
    ],
    tags: ["Italian", "Pasta"],
    instructions: [
      {
        step: 1,
        text: "Porta a ebollizione abbondante acqua salata.",
      },
      {
        step: 2,
        text: "Cuoci gli spaghetti fino a cottura al dente.",
      },
      {
        step: 3,
        text: "Mescola uova e pecorino in una ciotola.",
      },
      {
        step: 4,
        text: "Unisci il guanciale croccante e manteca la pasta.",
      },
    ],
    isFavorite: false,
  },
];
