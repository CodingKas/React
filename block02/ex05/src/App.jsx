import React from "react";
import ProductsList from "./ProductsList";
import "./index.css";

function App() {
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

  return (
    <div>
      <header>
        <h1>My Shop</h1>
        <p>Welcome to the best store!</p>
      </header>

      <ProductsList products={products} />

      <footer>
        <p>All rights reserved © 2025</p>
      </footer>
    </div>
  );
}

export default App;
