import React from "react";
import axios from "axios";

import AddQuantity from "../AddQuantity";
import AddQuantityHook from "../../utils/AddQuantityHook";

const ProductDetail = function ({ productId, isAdmin }) {
  const [product, setProduct] = React.useState({});
  const { onChange, handleCard, handleCart } = AddQuantityHook();

  React.useEffect(() => {
    axios.get(`http://localhost:3001/api/products/detail/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }, [productId]);

  console.log("isAdmin en productDetail", isAdmin);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            className="border border-gray-300 lg:w-1/2 w-full h-96 object-cover object-center rounded"
            src={product.image}
            alt="product-img"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="font-lora text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <p className="my-12 leading-relaxed">{product.description}</p>
            <div className="flex flex-col space-y-6">
              <span className="mr-4 font-lora font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <AddQuantity
                product={product}
                handleCart={handleCart}
                onChange={onChange}
                handleCard={handleCard}
              />
              <button className="inline-flex">
                Volver
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
