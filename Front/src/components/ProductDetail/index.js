import React from "react";
import axios from "axios";

import AddQuantity from "../AddQuantity";

const ProductDetail = function ({ productId }) {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {

    axios
      .get(`http://localhost:3001/api/products/detail/${productId}`)
      .then((res) => {
        setProduct(res.data);
      });

  }, []);
  console.log(product);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
            alt="product-img"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex">
              <span className="mr-4 title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <AddQuantity />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
