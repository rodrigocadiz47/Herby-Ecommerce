import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";

import ProductsCart from "../../components/ProductsCart";
import { GET_PRODUCTS } from "../../store/productsReducer";
import { SET_CART } from "../../store/cartReducer";

import s from "./style.module.css";

const ProductsContainer = function () {
  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState(Number);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((store) => store.cart);

  const handleCart = (product) => {
    dispatch(SET_CART({ ...product, amount: amount, preTotal: amount * product.price }));
  };

  React.useEffect(() => {
    localStorage.setItem("cart-STORAGE", JSON.stringify(cart));
  }, [cart]);

  const onChange = ({ target }) => {
    const value = parseInt(target.value);
    setAmount(value);
  };

  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, [dispatch]);

  return (
    <div className={s["products-container"]}>
      {products.map((product) => {
        return (
          <ProductsCart
            key={product.id}
            product={product}
            handleCart={handleCart}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
};

export default ProductsContainer;
