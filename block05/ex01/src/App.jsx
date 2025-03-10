import React, { useState } from "react";
import "./index.css";

const App = () => {
  const products = [
    {
      product: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
    },
    {
      product: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
    },
    {
      product: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
    },
  ];

  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    e.preventDefault();

    if (category.toLowerCase() === "all" || category.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) =>
        p.category.toLowerCase().includes(category.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <h1>Product Filter</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p, index) => (
            <div key={index} className="product-card">
              <h3>{p.product}</h3>
              <p>Category: {p.category}</p>
              <p>Price: €{p.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <h2 className="not-found">No products found</h2>
        )}
      </div>
    </div>
  );
};

export default App;
