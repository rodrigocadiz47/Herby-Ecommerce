import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

const ProductsCart = function ({ product, handleCart, onChange }) {
  return (
    <div class={s.card}>
      <Link to={`/products/${product.id}`}>
        <div class={s["card-img"]}>
          <img alt="" src={product.image} />
        </div>
      </Link>
      <div class={s["card-content"]}>
        <h2 class={s["card-title"]}>{product.name}</h2>
        <p class={s["card-text"]}>{product.description}</p>
        <div class={s["card-bottom"]}>
          <small>${product.price}</small>
          <input
            onChange={onChange}
            defaultValue="1kg"
            type="number"
            style={{ width: "50px" }}
            min="0"
            max="10"
            pattern="^[0-9]+"
          />
          kg
          <button onClick={() => handleCart(product)}>+ ADD</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
