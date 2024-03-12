import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

type BreedDetailsState = {
  breed: [];
  breed_id: string;
  status: string;
  error: null | string;
};

const initialState: BreedDetailsState = {
  breed: [],
  breed_id: "",
  status: "idle",
  error: null,
};

export const getBreedDetails = createAsyncThunk(
  "breeds/getBreedDetails",
  async ({ userId, breed_id }: { userId: string; breed_id: string }) => {
    try {
      const res = await instance.get(
        `/images/search?limit=9&size=med&sub_id=${userId}&breed_id=${breed_id}`
      );

      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const breedDetailsSlice = createSlice({
  name: "breedDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBreedDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBreedDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.breed = action.payload;
        state.breed_id = action.meta.arg.breed_id;
      })
      .addCase(getBreedDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default breedDetailsSlice.reducer;
