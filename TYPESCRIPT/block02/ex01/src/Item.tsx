import React from "react";
import { Product } from "./types";

interface ItemProps {
  product: Product;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  return (
    <li>
      <h2>{product.product}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Category: {product.category}</p>
      <p>{product.bestSeller ? "🔥 Best Seller" : ""}</p>
      <p>{product.onSale ? "💰 On Sale!" : ""}</p>
      <img src={product.image} alt={product.product} width="100" />
    </li>
  );
};

export default Item;
