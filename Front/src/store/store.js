import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";
import cardReducer from "./cardReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    users: usersReducer,
    products: productsReducer,
    card: cardReducer,
  },
});

export default store;
