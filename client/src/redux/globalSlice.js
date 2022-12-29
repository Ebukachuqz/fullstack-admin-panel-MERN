import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;
export const getMode = (state) => state.global.mode;
export const getUserId = (state) => state.global.userId;
export default globalSlice.reducer;
