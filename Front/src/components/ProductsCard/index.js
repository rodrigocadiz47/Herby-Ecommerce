import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = function ({
  product,
  handleCart,
  onChange,
  quantity,
  handleCard,
}) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 rounded-lg p-2">
        <Link to={`/products/${product.id}`}>
          <img
            className="h-80 rounded w-full object-cover object-center mb-6"
            alt=""
            src={product.image}
          />
        </Link>
        <div className="p-2">
          <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
            CATEGORIA
          </h3>
          <div className="flex flex-row justify-between text-lg text-gray-700">
            <h2 className="font-lora text-2xl text-gray-600 font-medium title-font mb-4">
              {product.name}
            </h2>
            <p className="pr-2">${product.price}/ kg</p>
          </div>
          <div className="flex items-center mt-1 space-x-5">
            {/* <label className="text-gray-700">Kg: </label>
            <input
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out"
              // className="outline-none "
              onChange={onChange}
              defaultValue="1kg"
              type="number"
              style={{ width: "50px" }}
              min="0"
              max="10"
              pattern="^[0-9]+"
            /> */}
            <select
              onChange={onChange}
              placeholder="Kg"
              className="p-3 rounded"
            >
              {quantity.map((value) => (
                <option>{`${value} kg`}</option>
              ))}
            </select>
            <button
              id={product.id}
              onClick={() => {
                handleCart(product);
                handleCard(product.id);
              }}
              className="inline-flex text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded text-lg"
              disable="false"
            >
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
