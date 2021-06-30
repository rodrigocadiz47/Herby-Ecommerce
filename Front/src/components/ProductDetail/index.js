import React from "react";

const ProductDetail = function ({ product }) {
  return (
    <div className="w-full border border-palette-lighter rounded shadow-lg">
      <div className="grid grid-cols-2">
        <img
          src="https://frutasyverduras.info/wp-content/uploads/2018/08/zanahoria-1280x720.jpg"
          alt=""
        />
        <div>
          <h2 className="text-3xl">Zanahoria</h2>
          <p>Detalles</p>
          <div className="grid grid-cols-2">
            <p className="text-xl">$20</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded mx-3 hover:bg-green-600">
              + ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
