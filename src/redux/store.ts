import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";
import breedsSlice from "./features/breedsSlice";
import breedDetailsSlice from "./features/breedDetailsSlice";
import voteSlice from "./features/voteSlice";
import randomImgSlice from "./features/randomImgSlice";
import favouritesSlice from "./features/favouritesSlice";
import userFavouiteSlice from "./features/userFavouiteSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    header: headerReducer,
    breeds: breedsSlice,
    breedDetails: breedDetailsSlice,
    vote: voteSlice,
    randomImg: randomImgSlice,
    favourites: favouritesSlice,
    userFavourites: userFavouiteSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from  the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
