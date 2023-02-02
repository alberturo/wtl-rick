import { createSlice } from "@reduxjs/toolkit";

export const rickandmortySlice = createSlice({
  name: "characters",
  initialState: {
    list: [],
  },
  reducers: {
    setCharactersList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCharactersList } = rickandmortySlice.actions;
export default rickandmortySlice.reducer;
