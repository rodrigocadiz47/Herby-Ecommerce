import { createReducer, createAction } from "@reduxjs/toolkit";

export const SET_CARD = createAction("SET_CARD")

const cardReducer = createReducer([], {
    [SET_CARD]: (state, action)=> [...state, action.payload]
})

export default cardReducer

