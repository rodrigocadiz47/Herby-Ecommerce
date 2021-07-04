import axios from "axios";
import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("USER-STORAGE")) || {},
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
  .post("http://localhost:3001/api/users/login", loginData).then(res=> {
    if(res.data!==undefined){
      localStorage.setItem("USER-STORAGE", JSON.stringify(res.data))
    }
    return res.data
  })
})

export const SET_USER_LOCAL = createAction("SET_USER_LOCAL")

export const logUser = createAsyncThunk();

const usersReducer = createReducer(initialState, {
  [SET_USER.fulfilled]: (state, action)=> {
    state.error= false
    state.currentUser=action.payload
  },
  [SET_USER.rejected]: (state, action)=>{
    state.error=true
  },
  [SET_USER_LOCAL]: (state, action) => {
    console.log(action.payload)
    localStorage.removeItem("USER-STORAGE")
    state.currentUser= {}
  }
});

export default usersReducer;