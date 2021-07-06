import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsCard from "../../components/ProductsCard";
import { GET_PRODUCTS } from "../../store/productsReducer";
import { useLocation } from "react-router";

const ProductsContainer = function () {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.setItem("CART-STORAGE", JSON.stringify(cart));
  }, [cart]);

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(GET_PRODUCTS(pathname));
  }, [pathname]);

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {products.map((product) => {
          return <ProductsCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
