import { configureStore } from "@reduxjs/toolkit";
import rickandmortyReducer from "../../features/rickandmorty/rickandmortySlice";
import { apiRTK } from "./api-rtk";

export const store = configureStore({
  reducer: {
    characters: rickandmortyReducer,

    [apiRTK.reducerPath]: apiRTK.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiRTK.middleware),
});
