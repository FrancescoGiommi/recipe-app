import { NavLink, Link } from "react-router-dom";

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, onToggleDarkMode }: NavbarProps) {
  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to={"/"} className="text-2xl font-bold text-orange-600">
            RecipeHub 🍽️
          </Link>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-700"
            }
          >
            ❤️ Preferiti
          </NavLink>

          <button
            type="button"
            onClick={onToggleDarkMode}
            className="relative flex h-8 w-16 items-center rounded-full bg-orange-100 p-1 transition dark:bg-slate-700"
          >
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm shadow transition-transform ${
                isDarkMode ? "translate-x-8" : "translate-x-0"
              }`}
            >
              {isDarkMode ? "🌙" : "☀️"}
            </span>
          </button>
        </nav>
      </header>
    </>
  );
}
