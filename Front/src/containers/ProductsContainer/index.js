import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsCard from "../../components/ProductsCard";
import { GET_PRODUCTS } from "../../store/productsReducer";
import { POST_CART, SET_CART, EDIT_AMOUNT } from "../../store/cartReducer";
import { useLocation } from "react-router";

const ProductsContainer = function () {
  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState(0);

  const products = useSelector((state) => state.products.products);
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.users.currentUser);

  const handleCart = (product) => {
    console.log(amount);
    if (user.firstName) {
      console.log("usuariousuario", user);
      let changeOrder = cart.filter((order) => order.productId === product.id);
      if (changeOrder.length) {
        let newAmount = changeOrder[0].amount + product.amount;
        dispatch(EDIT_AMOUNT({ id: changeOrder[0].id, amount: newAmount }));
      } else {
        dispatch(
          POST_CART({
            ...product,
            amount: amount,
            preTotal: amount * product.price,
            userId: user.id,
          })
        );
      }
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
    let cardId = document.getElementById(data);
    cardId.style.backgroundColor = "#0284C7";
    cardId.textContent === "Añadir"
      ? (cardId.textContent = "Añadido")
      : (cardId.textContent = "Añadir");
    setTimeout(() => {
      cardId.style.backgroundColor = "#10B981";
      cardId.textContent === "Añadir"
        ? (cardId.textContent = "Añadido")
        : (cardId.textContent = "Añadir");
    }, 1000);
  };

  React.useEffect(() => {
    localStorage.setItem("CART-STORAGE", JSON.stringify(cart));
  }, [cart]);

  const onChange = ({ target }) => {
    console.log(target.value);
    const value = parseFloat(target.value);
    console.log(value);
    setAmount(value);
  };

  const { pathname } = useLocation();

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
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
