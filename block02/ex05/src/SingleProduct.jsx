import React from "./App";

function SingleProduct({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.product} />
      <h3>{product.product}</h3>
      <p>Price: ${product.price}</p>
      {product.onSale && <span className="sale-label">On Sale!</span>}
    </div>
  );
}

export default SingleProduct;
