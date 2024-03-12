"use client";
import React, { use, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAuth } from "@clerk/nextjs";
import { useAppSelector } from "@/redux/store";
import { fetchRandomImg } from "@/redux/features/randomImgSlice";
import { vote } from "@/redux/features/voteSlice";
import { setFavourite } from "@/redux/features/favouritesSlice";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Loader from "@/components/Loader/loader";

const voting = () => {
  useEffect(() => {
    dispatch(fetchRandomImg());
  }, []);

  const { userId } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const loadingVote = useAppSelector((state) => state.vote.status);

  const randomImg = useAppSelector((state) => state.randomImg.randomImg);
  const loading = useAppSelector((state) => state.randomImg.status);

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
          <CardActions>
            <IconButton aria-label="favorite" size="large" onClick={handleFav}>
              <FavoriteBorderIcon />
            </IconButton>
          </CardActions>
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

export default voting;
