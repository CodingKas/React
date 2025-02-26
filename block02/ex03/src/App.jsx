import React from "./App";
import List from "./List";

function App() {
  const categories = ["shirts", "hats", "shoes"];

  return (
    <div>
      <h1>Categories</h1>
      <List categories={categories} />
    </div>
  );
}

export default App;
