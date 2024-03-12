import { createSlice } from "@reduxjs/toolkit";

type HeaderState = {
  isOpen: boolean;
};

const initialState: HeaderState = {
  isOpen: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = headerSlice.actions;
export default headerSlice.reducer;
