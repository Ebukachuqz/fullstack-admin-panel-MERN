import { configureStore } from "@reduxjs/toolkit";
import adminApi from "./api";
import globalReducer from "./globalSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

export default store;
