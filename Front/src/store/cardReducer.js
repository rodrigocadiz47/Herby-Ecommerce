import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("CARD-STORAGE")) || []

export const SET_CARD = createAction("SET_CARD")

const cardReducer = createReducer(initialState, {
    [SET_CARD]: (state, action)=> [...state, action.payload]
})

export default cardReducer

