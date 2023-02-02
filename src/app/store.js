import { configureStore } from "@reduxjs/toolkit";
import rickandmortyReducer from "../features/rickandmorty/rickandmortySlice";

export const store = configureStore({
  reducer: {
    characters: rickandmortyReducer,
  },
});
