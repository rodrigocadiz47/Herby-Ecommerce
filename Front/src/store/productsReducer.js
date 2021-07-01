import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  error: false,
};

export const GET_PRODUCTS = createAsyncThunk("GET_PRODUCTS", () => {
  return axios.get("http://localhost:3001/api/products").then((res) => res.data);
});

const productsReducer = createReducer(initialState, {
  [GET_PRODUCTS.fulfilled]: (state, action) => {
    state.products = action.payload;
    state.error = false;
  },
  [GET_PRODUCTS.rejected]: (state, action) => {
    state.error = true;
  },
});

export default productsReducer;
