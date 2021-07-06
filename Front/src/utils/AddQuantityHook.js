import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { POST_CART, SET_CART, EDIT_AMOUNT } from "../store/cartReducer";

export default function AddQuantityHook() {
  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState(0);

  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.users.currentUser);

  const handleCart = (product) => {
    console.log(amount);
    if (user.firstName) {
      console.log("usuariousuario", user);
      let changeOrder = cart.filter((order) => order.id === product.id);
      console.log("CHANGE_ORDER :", changeOrder);
      if (changeOrder.length) {
        let newAmount = changeOrder[0].amount + amount;
        console.log("NEW_AMOUNT :", newAmount);
        dispatch(
          EDIT_AMOUNT({ productId: changeOrder[0].id, newQuantity: newAmount })
        );
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

  const onChange = ({ target }) => {
    console.log(target.value);
    const value = parseFloat(target.value);
    console.log(value);
    setAmount(value);
  };
  
  return { onChange, handleCard, handleCart };
}
