import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  error: false,
};

export const GET_ALL_PRODUCTS = createAsyncThunk("GET_ALL_PRODUCTS", ()=>{
  return axios.get("http://localhost:3001/api/products").then((res) => res.data);
})

export const GET_PRODUCTS = createAsyncThunk("GET_PRODUCTS", (pathname) => {
  return axios.get(`http://localhost:3001/api${pathname}`).then((res) => res.data);
});

export const ADD_PRODUCT = createAsyncThunk("ADD_PRODUCT", (product) => {
  console.log("PRODUCT PARAM", product)
  return axios.post("http://localhost:3001/api/products/admin", product);
});

export const EDIT_PRODUCT = createAsyncThunk("EDIT_PRODUCT", ({product, productId})=>{
  console.log("PRODUCT IDDD",product)
  return axios.put(`http://localhost:3001/api/products/admin/${productId}`, product).then(({data})=> data)
})

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
  [GET_ALL_PRODUCTS.fulfilled]: (state, action)=>{
    state.products= action.payload
  } 
});

export default productsReducer;
