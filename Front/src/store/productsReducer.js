import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: false,
};

export const GET_PRODUCTS = createAsyncThunk("GET_PRODUCTS", () => {
  return axios.get("/api/products").then((res) => {
    console.log("PRODUCTOS");
    return res.data;
  });
});

const usersReducer = createReducer(initialState, {
  [GET_PRODUCTS.fulfilled]: (state, action) => {
    state.error = false;
    state.products = action.payload;
  },
  [GET_PRODUCTS.rejected]: (state, action) => {
    state.error = true;
  },
});

export default usersReducer;
