import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([
    {
      product: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
      quantity: 1,
    },
    {
      product: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
      quantity: 1,
    },
    {
      product: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
      quantity: 1,
    },
  ]);

  const updateQuantity = (index, change) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.product} />
          <div>
            <h3>{item.product}</h3>
            <p>Price: €{item.price.toFixed(2)}</p>
            <div className="quantity">
              <button onClick={() => updateQuantity(index, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(index, 1)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <h2>Total: €{totalPrice.toFixed(2)}</h2>
      <h3 className={totalPrice >= 500 ? "free-shipping" : "paid-shipping"}>
        {totalPrice >= 500 ? "Free Shipping" : "Shipping will be charged"}
      </h3>
    </div>
  );
};

export default App;
