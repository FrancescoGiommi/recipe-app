import { NavLink, Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, onToggleDarkMode }: NavbarProps) {
  return (
    <>
      <header className="bg-white shadow-sm transition-colors dark:bg-slate-900 dark:shadow-slate-950">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link
            to={"/"}
            className="text-2xl font-bold text-orange-600 transition-colors dark:text-orange-400"
          >
            RecipeHub 🍽️
          </Link>
          <div className="flex items-center justify-between gap-6">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-orange-500 px-4 py-2 text-white transition-colors"
                  : "rounded-xl bg-orange-100 px-4 py-2 text-orange-700 transition-colors dark:bg-slate-800 dark:text-slate-200"
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
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm shadow transition-transform dark:bg-slate-900 ${
                  isDarkMode ? "translate-x-8" : "translate-x-0"
                }`}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
