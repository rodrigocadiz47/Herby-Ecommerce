import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = JSON.parse(localStorage.getItem("CART-STORAGE")) || [];

export const SET_CART = createAction("SET_CART");

export const POST_CART = createAsyncThunk("POST_CART", (orderData)=>{
  console.log(orderData)
    return axios.post(`http://localhost:3001/api/orders/${orderData.userId}`, orderData).then(res=>{
      return res.data
    })
})

export const SET_CART_LOCAL= createAction("SET_CART_LOCAL")

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
  [POST_CART.fulfilled]: (state, action)=> [...state, action.payload],
  [SET_CART_LOCAL]: (state, action)=>{
    console.log("entre por aca")
    localStorage.removeItem("CART-STORAGE")
    return state = []
  }
});

export default cartReducer;