import React from "react";
import axios from "axios";

const ProductDetail = function ({ productId }) {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:3001/api/products/detail/${productId}`).then((res) => {
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
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
