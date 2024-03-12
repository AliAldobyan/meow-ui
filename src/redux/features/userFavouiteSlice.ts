import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

type FavouritesState = {
  userFavourites: [];
  sub_id: string;
  status: string;
  error: null | string;
};

const initialState: FavouritesState = {
  userFavourites: [],
  sub_id: "",
  status: "idle",
  error: null,
};

export const fetchUserFavourites = createAsyncThunk(
  "favourites/fetchFavourites",
  async (sub_id: string) => {
    try {
      const res = await instance.get("/favourites/", {
        params: {
          sub_id: sub_id,
        },
      });

      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const userFavouritesSlice = createSlice({
  name: "userFavourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserFavourites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserFavourites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userFavourites = action.payload;
      })
      .addCase(fetchUserFavourites.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default userFavouritesSlice.reducer;
