import axios from "axios";
import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("USER-STORAGE")) || {},
  carrito: {},
  ordersHistory: [],
  users: [],
  error: false,
};

export const registerUser = createAsyncThunk("REGISTER", (user) => {
  axios
    .post("/api/users/register", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phone: user.phone,
      address: user.address,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
});

export const SET_USER = createAsyncThunk("SET_USER", (loginData) => {
  return axios.post("http://localhost:3001/api/users/login", loginData).then((res) => {
    if (res.data !== undefined) {
      localStorage.setItem("USER-STORAGE", JSON.stringify(res.data));
    }
    return res.data;
  });
});

export const DELETE_USER = createAsyncThunk("DELETE_USER", (userId) => {
  console.log("userId", userId);
  return axios
    .post(`http://localhost:3001/api/users/admin/${userId}`)
    .then((res) => res.data);
});

export const GET_USERS = createAsyncThunk("GET_USERS", () => {
  return axios.get("http://localhost:3001/api/users").then((res) => res.data);
});

export const GET_HISTORY = createAsyncThunk("GET_HISTORY", (userId) => {
  return axios
    .get(`http://localhost:3001/api/purchaseOrders/${userId}`)
    .then(({ data }) => data);
});

export const SET_USER_LOCAL = createAction("SET_USER_LOCAL");

export const logUser = createAsyncThunk();

const usersReducer = createReducer(initialState, {
  [SET_USER.fulfilled]: (state, action) => {
    state.error = false;
    state.currentUser = action.payload;
  },
  [SET_USER.rejected]: (state, action) => {
    state.error = true;
  },
  [DELETE_USER.fulfilled]: (state, action) => {
    state.users.filter((user) => user.id !== action.payload.id);
  },
  [GET_USERS.fulfilled]: (state, action) => {
    state.users = action.payload;
  },
  [GET_USERS.rejected]: (state, action) => {
    state.error = true;
  },
  [SET_USER_LOCAL]: (state, action) => {
    console.log(action.payload);
    localStorage.removeItem("USER-STORAGE");
    state.currentUser = {};
  },
  [GET_HISTORY.fulfilled]: (state, action) => {
    console.log("ACTION HISTORY", action.payload);
    state.ordersHistory = [...action.payload];
  },
});

export default usersReducer;
