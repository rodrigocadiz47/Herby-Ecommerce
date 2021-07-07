import { Link, Route } from "react-router-dom";
import NewProductForm from "../NewProductForm";

const ProductsList = function ({ products }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link to={`/admin/products/${product.id}`}>
                <p>{product.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsList;
