import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = JSON.parse(localStorage.getItem("CART-STORAGE")) || [];

export const SET_CART = createAction("SET_CART");

export const POST_CART = createAsyncThunk("POST_CART", (orderData) => {
  return axios
    .post(`http://localhost:3001/api/orders/${orderData.userId}`, orderData)
    .then((res) => {
      return res.data;
    });
});

/*export const REMOVE_ITEM = createAsyncThunk(
  "REMOVE_ITEM",
  (product, thunkAPI) => {
    console.log("PRODUCTO", product);
    const { currentUser } = thunkAPI.getState().users;
    console.log("CURRENT USER", currentUser);
    if (currentUser.email) {
      return axios
        .delete(`http://localhost:3001/api/orders/${product.id}`)
        .then(({ data }) => data);
    } else {
      return { productId: product.id };
    }*/

export const REMOVE_ITEM = createAsyncThunk(
  "REMOVE_ITEM",
  (product, thunkAPI) => {
    const { currentUser } = thunkAPI.getState().users;
    if (currentUser.email) {
      return axios
        .delete(`http://localhost:3001/api/orders/${product.id}`)
        .then(({ data }) => data);
    } else {
      return { productId: product.id };
    }
  }
);

export const SET_CART_LOCAL = createAction("SET_CART_LOCAL");

export const CHECKOUT = createAsyncThunk("CHECKOUT", (id, thunkAPI) => {
  //aca el id no se usa
  const { currentUser } = thunkAPI.getState().users;
  const cart = thunkAPI.getState().cart;
  if (currentUser.id && cart.length) {
    return axios
      .post(`http://localhost:3001/api/purchaseOrders/${currentUser.id}`)
      .then(({ data }) => data);
  } else {
    console.log("NOOOOOOO");
  }
});

export const GET_LOG_CART = createAsyncThunk("GET_LOG_CART", (userId) => {
  return axios
    .get(`http://localhost:3001/api/orders/pending/${userId}`)
    .then((res) => res.data)
    .then((orderArr) => orderArr);
});

export const EDIT_AMOUNT = createAsyncThunk(
  "EDIT_AMOUNT",
  ({ productId, newQuantity, price }, thunkAPI) => {
    const { currentUser } = thunkAPI.getState().users;
    if (currentUser.email) {
      return axios
        .put(`http://localhost:3001/api/orders/${productId}`, {
          quantityChange: newQuantity,
        })
        .then(({ data }) => data);
    } else {
      return {
        productId: productId,
        productQuantity: newQuantity,
        totalOrder: newQuantity * price,
      };
    }
  }
);

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
  [POST_CART.fulfilled]: (state, action) => {
    let found = false;
    // si el carrito ya tiene un el producto, sumar cantidades y precio
    if (state.length) {
      for (let product of state) {
        if (product.id === action.payload.product.id) {
          found = true;
          product.amount += action.payload.order.productQuantity;
          product.preTotal += action.payload.order.totalOrder;
        }
      }
    }
    if (!found) {
      const newItem = action.payload.product;
      newItem.amount = action.payload.order.productQuantity;
      newItem.preTotal = action.payload.order.totalOrder;
      return [...state, newItem];
    }
  },
  [SET_CART_LOCAL]: (state, action) => {
    localStorage.removeItem("CART-STORAGE");
    return (state = []);
  },
  [REMOVE_ITEM.fulfilled]: (state, action) => {
    const actuallyCart = state.filter(
      (order) => order.id !== action.payload.productId
    );
    localStorage.setItem("CART-STORAGE", JSON.stringify(actuallyCart));
    return actuallyCart;
  },

  [CHECKOUT.fulfilled]: (state, action) => {
    localStorage.removeItem("CART-STORAGE");
    return [];
  },
  [EDIT_AMOUNT.fulfilled]: (state, action) => {
    const { productId, productQuantity, totalOrder } = action.payload;
    const editCart = state.map((order) => {
      if (order.id === productId) {
        order.amount = productQuantity;
        order.preTotal = totalOrder;
      }
      return order;
    });
    localStorage.setItem("CART-STORAGE", JSON.stringify(editCart));
    state = editCart;
  },
  [GET_LOG_CART.fulfilled]: (state, action) => {
    const getCart = action.payload.map((order) => {
      return {
        ...order,
        name: order.product.name,
        price: order.product.price,
        preTotal: order.totalOrder,
        amount: order.productQuantity,
        id: order.productId,
      };
    });
    localStorage.setItem("CART-STORAGE", JSON.stringify(getCart));
    return getCart;
  },
});

export default cartReducer;
