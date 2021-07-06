import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  error: false,
};

export const GET_PRODUCTS = createAsyncThunk("GET_PRODUCTS", (pathname) => {
  return axios.get(`http://localhost:3001/api${pathname}`).then((res) => res.data);
});

export const ADD_PRODUCT = createAsyncThunk("ADD_PRODUCT", (product) => {
  return axios.post("http://localhost:3001/api/products/admin", product);
});

const productsReducer = createReducer(initialState, {
  [GET_PRODUCTS.fulfilled]: (state, action) => {
    state.products = action.payload;
    state.error = false;
  },
  [GET_PRODUCTS.rejected]: (state, action) => {
    state.error = true;
  },
  [ADD_PRODUCT.fulfilled]: (state, action) => {
    state.products = [...state.products, action.payload];
  },
  [ADD_PRODUCT.rejected]: (state, action) => {
    state.error = true;
  },
});

export default productsReducer;
