import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

type FavouritesState = {
  image_id: string;
  sub_id: string;
  status: string;
  error: null | string;
};

const initialState: FavouritesState = {
  image_id: "",
  sub_id: "",
  status: "idle",
  error: null,
};

export const setFavourite = createAsyncThunk(
  "favourites/setFavourites",
  async ({ image_id, sub_id }: { image_id: string; sub_id: string }) => {
    try {
      const res = await instance.post("/favourites", {
        image_id,
        sub_id,
      });

      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setFavourite.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setFavourite.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.image_id = action.payload;
      })
      .addCase(setFavourite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default favouritesSlice.reducer;
