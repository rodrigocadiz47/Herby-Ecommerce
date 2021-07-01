import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    users: usersReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
