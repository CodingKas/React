import React from "./App";
import SingleProduct from "./SingleProduct.";

function ProductsList({ products }) {
  return (
    <div>
      <section>
        <h1>All Products</h1>
        <div className="products-container">
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h1>Best Sellers</h1>
        <div className="products-container">
          {products
            .filter((product) => product.bestSeller)
            .map((product, index) => (
              <SingleProduct key={index} product={product} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default ProductsList;
