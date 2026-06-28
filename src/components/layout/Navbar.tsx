import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
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
        </nav>
      </header>
    </>
  );
}
