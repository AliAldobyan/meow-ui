"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAuth } from "@clerk/nextjs";
import { useAppSelector } from "@/redux/store";
import { fetchUserFavourites } from "@/redux/features/userFavouiteSlice";
import { Container, Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Loader from "@/components/Loader/loader";

const Favorites = () => {
  const { userId } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserFavourites(userId));
    }
  }, [dispatch, userId]);

  const loading = useAppSelector((state) => state.userFavourites.status);
  const userFavourites = useAppSelector(
    (state) => state.userFavourites.userFavourites
  );

  if (loading === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ flexGrow: 1, marginTop: "30px" }}>
        <h1>Your Favorite Pictures </h1>
        <Box sx={{ minWidth: 120 }}></Box>
      </Container>
      <Container maxWidth="md" sx={{ flexGrow: 1, marginTop: "30px" }}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {userFavourites.map((item) => (
            <ImageListItem key={item.image_id}>
              <img
                srcSet={`${item.image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image.url}?w=164&h=164&fit=crop&auto=format`}
                alt="cat"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Favorites;
