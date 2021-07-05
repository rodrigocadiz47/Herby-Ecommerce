import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsCard from "../../components/ProductsCard";
import { GET_PRODUCTS } from "../../store/productsReducer";
import { POST_CART, SET_CART } from "../../store/cartReducer";
import { useLocation } from "react-router";

const ProductsContainer = function () {
  const dispatch = useDispatch();


  const [amount, setAmount] = React.useState(0);
  const [buttonTitle, setButtonTitle] = React.useState(true);
  const [buttonId, setButtonId] = React.useState(null);

  const products = useSelector((state) => state.products.products);
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.users.currentUser);

  const handleCart = (product) => {
    console.log(amount);
    if (user.firstName) {
      dispatch(
        POST_CART({
          ...product,
          amount: amount,
          preTotal: amount * product.price,
          userId: user.id,
        })
      );
    } else {
      dispatch(
        SET_CART({
          ...product,
          amount: amount,
          preTotal: amount * product.price,
        })
      );
    }
  };
  const handleCard = (data) => {
    setButtonTitle(!buttonTitle);
    setButtonId(data);
  };

  React.useEffect(() => {
    let buttonValue = buttonTitle ? "Añadir" : "Añadido";
    if (buttonId) {
      let cardId = document.getElementById(buttonId);
      cardId.textContent = buttonValue;
    }
  }, [buttonId, buttonTitle]);

  React.useEffect(() => {
    localStorage.setItem("CART-STORAGE", JSON.stringify(cart));
  }, [cart]);

  const onChange = ({ target }) => {
    console.log(target.value);
    const value = parseFloat(target.value);
    console.log(value);
    setAmount(value);
  };

  const {pathname} = useLocation()

  
  useEffect(() => {
    dispatch(GET_PRODUCTS(pathname));
  }, [pathname]);

  const quantity = [0, 0.5, 1, 1.5, 2, 2.5, 3];

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {products.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              product={product}
              handleCart={handleCart}
              onChange={onChange}
              quantity={quantity}
              handleCard={handleCard}
              buttonTitle={buttonTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
