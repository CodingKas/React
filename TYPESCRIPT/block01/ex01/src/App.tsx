import React from "react";

const App: React.FC = () => {
  const categories: string[] = [
    "t-shirts",
    "hats",
    "shorts",
    "jackets",
    "pants",
    "shoes",
  ];

  return (
    <div>
      <h1>Product Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
