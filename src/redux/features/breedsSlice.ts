import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

type BreedsState = {
  breeds: [];
  status: string;
  error: null | string;
};

const initialState: BreedsState = {
  breeds: [],
  status: "idle",
  error: null,
};

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  try {
    const res = await instance.get("/breeds");

    return res.data;
  } catch (error) {
    return error;
  }
});

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default breedsSlice.reducer;
