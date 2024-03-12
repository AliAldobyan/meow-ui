import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

type RandomImgState = {
  randomImg: [];
  status: string;
  error: null | string;
};

const initialState: RandomImgState = {
  randomImg: [],
  status: "idle",
  error: null,
};

export const fetchRandomImg = createAsyncThunk(
  "randomImg/fetchRandomImg",
  async () => {
    try {
      const res = await instance.get("/images/search?size=thumb?limit=1");

      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const randomImgSlice = createSlice({
  name: "randomImg",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomImg.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomImg.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.randomImg = action.payload;
      })
      .addCase(fetchRandomImg.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default randomImgSlice.reducer;
