import { createReducer, createAction } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem("CARD-STORAGE")) || []

export const SET_CARD = createAction("SET_CARD");

const cardReducer = createReducer(initialState, {
  [SET_CARD]: (state, action) => {
    if (!state.length) return [...state, action.payload];
    for (let product of state) {
      console.log("product.id === action.payload.id", product.id, action.payload.id);
      if (product.id === action.payload.id) {
        // sumar las cantidades y precio
        product.amount += action.payload.amount;
        product.preTotal += action.payload.preTotal;
        console.log("typeof product.amount", typeof product.amount);
      } else {
        return [...state, action.payload];
      }
    }
  },
});




export default cardReducer;
