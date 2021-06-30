import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./usersReducer";
import productsReducer from "./productsReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
});

export default store;
