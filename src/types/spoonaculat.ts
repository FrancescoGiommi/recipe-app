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
  extendedIngredients?: SpoonacularIngredient[];
  analyzedInstructions?: SpoonacularAnalyzedInstruction[];
}

export interface SpoonacularIngredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
}

export interface SpoonacularInstructionStep {
  number: number;
  step: string;
}

export interface SpoonacularAnalyzedInstruction {
  steps: SpoonacularInstructionStep[];
}
