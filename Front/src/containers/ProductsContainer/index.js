import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "../../components/ProductCard";
import GET_PRODUCTS from "../../store/productsReducer";
import s from "./style.module.css";

const ProductsContainer = function () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(GET_PRODUCTS);
  }, [dispatch, products]);

  return (
    <div class={s["products-container"]}>
      {products.map((product) => {
        return <ProductCard key={product.id} />;
      })}
    </div>
  );
};

export default ProductsContainer;
