import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-orange-50">
        <h1 className="text-5xl font-bold text-orange-600">RecipeHub 🍽️</h1>
      </main>
    </>
  );
}

export default App;
