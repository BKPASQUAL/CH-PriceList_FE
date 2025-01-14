import { configureStore } from "@reduxjs/toolkit";
import api from "./api/api";
import { itemApi } from "./api/itemApi";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      api.middleware,
      itemApi.middleware,
      authApi.middleware
    ),
});
