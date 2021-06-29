import React from "react";

import ProductCard from "../../components/ProductCard";
import s from "./style.module.css";

const ProductsContainer = function () {
  return (
    <div class={s["products-container"]}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductsContainer;
