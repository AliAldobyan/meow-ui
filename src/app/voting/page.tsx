"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAuth } from "@clerk/nextjs";
import { useAppSelector } from "@/redux/store";
import { fetchRandomImg } from "@/redux/features/randomImgSlice";
import { setFavourite } from "@/redux/features/favouritesSlice";
import {
  Container,
  Card,
  CardActions,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Loader from "@/components/Loader/loader";

const Voting = () => {
  const { userId } = useAuth();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRandomImg());
  }, [dispatch]);

  const loading = useAppSelector((state) => state.randomImg.status);
  const randomImg = useAppSelector((state) => state.randomImg.randomImg);

  if (loading === "loading") {
    return <Loader />;
  }

  const handleFav = () => {
    dispatch(
      setFavourite({
        image_id: randomImg[0]?.id,
        sub_id: userId ?? "",
      })
    );
    dispatch(fetchRandomImg());
  };

  return (
    <Container maxWidth="sm" sx={{ flexGrow: 1, marginTop: "30px" }}>
      <h2>Vote for your favorite cat breed</h2>
      <Card sx={{ maxWidth: 470 }}>
        <CardMedia sx={{ height: 500 }} image={randomImg[0]?.url} title="cat" />

        <CardActions sx={{ justifyContent: "space-between" }}>
          <IconButton aria-label="favorite" size="large" onClick={handleFav}>
            <FavoriteBorderIcon />
          </IconButton>

          <CardActions>
            <IconButton size="large">
              <ThumbUpOffAltIcon />
            </IconButton>
            <IconButton size="large">
              <ThumbDownOffAltIcon />
            </IconButton>
          </CardActions>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Voting;
