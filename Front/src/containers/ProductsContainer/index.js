import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductsCard from "../../components/ProductsCard";
import { GET_PRODUCTS } from "../../store/productsReducer";
import { useLocation } from "react-router";
import AddQuantityHook from "../../utils/AddQuantityHook";

const ProductsContainer = function () {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((store) => store.cart);

  const user = useSelector((store) => store.users.currentUser);

  // const handleCart = (product) => {
  //   if (user.firstName) {
  //     let changeOrder = cart.filter((order) => order.id === product.id);
  //     if (changeOrder.length) {
  //       let newAmount = changeOrder[0].amount + amount;
  //       console.log("NEW_AMOUNT :", newAmount);
  //       dispatch(
  //         EDIT_AMOUNT({ productId: changeOrder[0].id, newQuantity: newAmount })
  //       );
  //     } else {
  //       dispatch(
  //         POST_CART({
  //           ...product,
  //           amount: amount,
  //           preTotal: amount * product.price,
  //           userId: user.id,
  //         })
  //       );
  //     }
  //   } else {
  //     dispatch(
  //       SET_CART({
  //         ...product,
  //         amount: amount,
  //         preTotal: amount * product.price,
  //       })
  //     );
  //   }
  // };
  // const handleCard = (data) => {
  //   let cardId = document.getElementById(data);
  //   cardId.style.backgroundColor = "#0284C7";
  //   cardId.textContent === "Añadir"
  //     ? (cardId.textContent = "Añadido")
  //     : (cardId.textContent = "Añadir");
  //   setTimeout(() => {
  //     cardId.style.backgroundColor = "#10B981";
  //     cardId.textContent === "Añadir"
  //       ? (cardId.textContent = "Añadido")
  //       : (cardId.textContent = "Añadir");
  //   }, 1000);
  // };

  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.setItem("CART-STORAGE", JSON.stringify(cart));
  }, [cart]);

  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(GET_PRODUCTS(pathname));
  }, [pathname]);

  return (
    <div className="container px-20 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {products.map((product) => {
          return <ProductsCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
