import { Link } from "react-router-dom";

const ProductsList = function ({ products, setCurrentProduct, setMessage }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/admin/products/${product.id}`}>
                <p
                  onClick={() => {
                    setCurrentProduct(product.id);
                    setMessage("");
                  }}
                >
                  {product.name}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
