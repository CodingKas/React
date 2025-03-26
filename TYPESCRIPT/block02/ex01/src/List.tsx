import React from "react";
import Item from "./Item";
import { Product } from "./types";

interface ListProps {
  products: Product[];
}

const List: React.FC<ListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <Item key={index} product={product} />
      ))}
    </ul>
  );
};

export default List;
