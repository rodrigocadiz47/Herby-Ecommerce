import axios from "axios";
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";

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
  return axios
    .post("http://localhost:3001/api/users/login", loginData)
    .then((res) => {
      if (res.data !== undefined) {
        localStorage.setItem("USER-STORAGE", JSON.stringify(res.data));
      }
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
});

export const DELETE_USER = createAsyncThunk("DELETE_USER", (userId) => {
  console.log("userId", userId);
  return axios
    .delete(`http://localhost:3001/api/users/admin/${userId}`)
    .then((res) => res.data);
});

export const GET_USERS = createAsyncThunk("GET_USERS", (adminId) => {
  return axios
    .get(`http://localhost:3001/api/users/admin/${adminId}`)
    .then((res) => res.data);
});

export const GET_HISTORY = createAsyncThunk("GET_HISTORY", (userId) => {
  return axios
    .get(`http://localhost:3001/api/purchaseOrders/${userId}`)
    .then(({ data }) => data);
});

export const TOGGLE_ADMIN = createAsyncThunk("TOGGLE_ADMIN", (userId) => {
  return axios
    .put(`http://localhost:3001/api/users/admin/${userId}`)
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
    const refreshUser = state.users.filter(
      (user) => user.id !== action.payload.id
    );
    state.users = refreshUser;
  },
  [GET_USERS.fulfilled]: (state, action) => {
    state.users = action.payload;
  },
  [GET_USERS.rejected]: (state, action) => {
    state.error = true;
  },
  [SET_USER_LOCAL]: (state, action) => {
    localStorage.removeItem("USER-STORAGE");
    state.currentUser = {};
  },
  [GET_HISTORY.fulfilled]: (state, action) => {
    state.ordersHistory = [...action.payload];
  },
  [TOGGLE_ADMIN.fulfilled]: (state, action) => {
    console.log("STATE USERS", state.users);
    const toggleAdmin = state.users.map((user) => {
      if (user.id === action.payload.id) {
        user.isAdmin = action.payload.isAdmin;
      }
      return user;
    });
    state.users = toggleAdmin;
  },
});

export default usersReducer;
