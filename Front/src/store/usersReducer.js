import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
  carrito: {},
  error: false
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

export const SET_USER = createAsyncThunk("SET_USER", (loginData)=>{
  return axios
  .post("http://localhost:3001/api/users/login", loginData).then(res=> res.data)
})

export const logUser = createAsyncThunk();

const usersReducer = createReducer(initialState, {
  [SET_USER.fulfilled]: (state, action)=> {
    state.error= false
    state.currentUser=action.payload
  },
  [SET_USER.rejected]: (state, action)=>state.error=true
});

export default usersReducer;
