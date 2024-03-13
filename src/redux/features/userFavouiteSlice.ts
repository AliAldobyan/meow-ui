import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

type FavouritesState = {
  userFavourites: [] | any[];
  status: string;
  error: null | string;
};

const initialState: FavouritesState = {
  userFavourites: [] as any[],
  status: "idle",
  error: null,
};

export const fetchUserFavourites = createAsyncThunk(
  "favourites/fetchFavourites",
  async ({ user_id }: { user_id: string }) => {
    try {
      const res = await instance.get(`/favourites`);

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
