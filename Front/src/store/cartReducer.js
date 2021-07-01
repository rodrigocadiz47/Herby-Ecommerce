import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("CART-STORAGE")) || [];

export const SET_CART = createAction("SET_CART");

const cartReducer = createReducer(initialState, {
  [SET_CART]: (state, action) => {
    let found = false;
    // si el carrito ya tiene un el producto, sumar cantidades y precio
    for (let product of state) {
      if (product.id === action.payload.id) {
        found = true;
        product.amount += action.payload.amount;
        product.preTotal += action.payload.preTotal;
      }
    }
    // si todavia no tiene un producto igual al recien agregado, agregarlo
    if (!found) return [...state, action.payload];
  },
});

export default cartReducer;
