import React from "react";
import products from "./products";
import "./index.css";

function App() {
  const bestSellers = products.filter((product) => product.bestSeller);
  const allProducts = products;

  return (
    <div>
      <header>
        <h1>My Shop</h1>
        <p>Welcome to the best store!</p>
      </header>

      <section>
        <h1>All Products</h1>
        <div className="products-container">
          {allProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.product} />
              <h3>{product.product}</h3>
              <p>Price: ${product.price}</p>
              {product.onSale && <span className="sale-label">On Sale!</span>}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1>Best Sellers</h1>
        <div className="products-container">
          {bestSellers.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.product} />
              <h3>{product.product}</h3>
              <p>Price: ${product.price}</p>
              {product.onSale && <span className="sale-label">On Sale!</span>}
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>All rights reserved © 2025</p>
      </footer>
    </div>
  );
}

export default App;
