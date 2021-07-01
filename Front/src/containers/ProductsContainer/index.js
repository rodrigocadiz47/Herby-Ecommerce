import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";

import ProductsCart from "../../components/ProductsCart";
import { GET_PRODUCTS } from "../../store/productsReducer";
import { POST_CART, SET_CART } from "../../store/cartReducer";

import s from "./style.module.css";

const ProductsContainer = function () {
  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState(Number);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((store) => store.cart);
  const user = useSelector(store => store.users.currentUser)

  const handleCart = (product) => {
    if(user.firstName){
      dispatch(POST_CART({ ...product, amount: amount, preTotal: amount * product.price , userId: user.id}))
    }
    else{
      dispatch(SET_CART({ ...product, amount: amount, preTotal: amount * product.price }));
    }
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
