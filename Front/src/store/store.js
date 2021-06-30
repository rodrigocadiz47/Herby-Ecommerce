import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;
