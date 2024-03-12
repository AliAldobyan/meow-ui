import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

type VoteState = {
  image_id: string;
  sub_id: string;
  value: number;
  status: string;
  error: null | string;
};

const initialState: VoteState = {
  image_id: "",
  sub_id: "",
  value: 0,
  status: "idle",
  error: null,
};

export const vote = createAsyncThunk(
  "votes/vote",
  async ({
    image_id,
    sub_id,
    value,
  }: {
    image_id: string;
    sub_id: string;
    value: number;
  }) => {
    try {
      const res = await instance.post("/votes", {
        image_id,
        sub_id,
        value,
      });
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const voteSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(vote.pending, (state) => {
        state.status = "loading";
      })
      .addCase(vote.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(vote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default voteSlice.reducer;
