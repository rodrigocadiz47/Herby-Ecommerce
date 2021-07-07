/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default ({ product, handleCart, onChange, handleCard }) => {
  const quantity = [0, 0.5, 1, 1.5, 2, 2.5, 3];
  return (
    <div>
      <select onChange={onChange} placeholder="Kg" className="p-3 mr-2 rounded">
        {quantity.map((value, index) => (
          <option key={index}>{`${value} kg`}</option>
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
  );
};
