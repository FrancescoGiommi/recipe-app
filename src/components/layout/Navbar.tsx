export default function Navbar() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <span className="text-2xl font-bold text-orange-600">
            RecipeHub 🍽️
          </span>

          <button className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            ❤️ Preferiti
          </button>
        </nav>
      </header>
    </>
  );
}
