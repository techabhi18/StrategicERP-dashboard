import { configureStore } from "@reduxjs/toolkit";
import { formapi } from "./formSlice";

const store = configureStore({
  reducer: {
    [formapi.reducerPath]: formapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formapi.middleware),
});

export default store;
