import type { Difficulty } from "../../types/recipe";

interface DifficultyBadgeProps {
  difficulty: Difficulty;
}

export default function DifficultyIndicator({
  difficulty,
}: DifficultyBadgeProps) {
  const difficultyLevel = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  const difficultyLabel = {
    easy: "Facile",
    medium: "Media",
    hard: "Difficile",
  };

  const activeBars = difficultyLevel[difficulty];

  return (
    <>
      {/* Difficoltà */}
      <div className="flex items-end gap-1">
        {/* Facile */}
        <div
          className={`h-2 w-1 rounded ${
            activeBars >= 1 ? "bg-green-500" : "bg-gray-300"
          }`}
        />

        {/* Media */}
        <div
          className={`h-3 w-1 rounded ${
            activeBars >= 2 ? "bg-yellow-500" : "bg-gray-300"
          }`}
        />
        {/* Difficile */}
        <div
          className={`h-4 w-1 rounded ${
            activeBars >= 3 ? "bg-red-500" : "bg-gray-300"
          }`}
        />
      </div>
      <span className="text-sm text-slate-700">
        {difficultyLabel[difficulty]}
      </span>
    </>
  );
}
