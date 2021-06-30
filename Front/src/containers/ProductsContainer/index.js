import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductCard from "../../components/ProductCard";
import GET_PRODUCTS from "../../store/productsReducer";
import s from "./style.module.css";

const ProductsContainer = function () {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    console.log("entre a use effect");
    // console.log(GET_PRODUCTS());
    dispatch(GET_PRODUCTS());
  }, [dispatch]);

  return (
    <div className={s["products-container"]}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsContainer;
