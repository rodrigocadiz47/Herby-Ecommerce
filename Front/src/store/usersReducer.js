import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  carrito: {},
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
export const logUser = createAsyncThunk();

const usersReducer = createReducer(initialState, {});

export default usersReducer;
