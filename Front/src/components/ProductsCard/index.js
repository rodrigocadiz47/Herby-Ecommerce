import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

const ProductsCard = function ({ product, handleCart, onChange }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      {/* <Link to={`/products/${product.id}`}> */}
      <div className="block relative h-48 rounded overflow-hidden">
        <img alt="" src={product.image} />
      </div>
      {/* </Link> */}
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
        <div className="mt-1">
          <small>${product.price}</small>
          <input
            onChange={onChange}
            defaultValue="1kg"
            type="number"
            style={{ width: "50px" }}
            min="0"
            max="10"
            pattern="^[0-9]+"
          />
          kg
          <button onClick={() => handleCart(product)}>+ ADD</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
