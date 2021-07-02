import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

const ProductsCard = function ({ product, handleCart, onChange }) {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link to={`/products/${product.id}`}>
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="" src={product.image} />
        </div>
      </Link>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
        <div className="flex items-center mt-1 space-x-5">
          <span>${product.price}/ kg</span>
          <input
            className="border focus:outline-none"
            onChange={onChange}
            defaultValue="1kg"
            type="number"
            style={{ width: "50px" }}
            min="0"
            max="10"
            pattern="^[0-9]+"
          />
          <button onClick={() => handleCart(product)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
