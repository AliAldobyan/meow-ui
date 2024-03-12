"use client";
import React, { useEffect } from "react";
import {
  Container,
  Button,
  CardActionArea,
  CardActions,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { getBreedDetails } from "@/redux/features/breedDetailsSlice";
import Loader from "@/components/Loader/loader";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const BreedDetails = ({
  userId,
  breed_id,
}: {
  userId: string;
  breed_id: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  let breedDescription = "";
  let breedName = "";
  let breedId = "";
  let breedCountry = "";
  let breedWiki = "";

  useEffect(() => {
    if (breed_id.length !== 0) {
      dispatch(getBreedDetails({ breed_id, userId }));
    }
  }, [breed_id]);
  const breed = useAppSelector((state) => state.breedDetails.breed);

  if (breed.length) {
    const firstBreed = Object?.values(breed)[0] as any[];
    const breedinfo = Object.values(firstBreed)[0];
    breedDescription = breedinfo[0].description;
    breedName = breedinfo[0].name;
    breedId = breedinfo[0].id;
    breedCountry = breedinfo[0].origin;
    breedWiki = breedinfo[0].wikipedia_url;
  }

  const loading = useAppSelector((state) => state.breedDetails.status);

  if (loading === "loading") {
    return <Loader />;
  }

  return (
    <Container
      maxWidth="sm"
      sx={{ flexGrow: 1, marginTop: "30px", marginBottom: "70px" }}
    >
      {breed.length ? (
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
              variant="quilted"
            >
              {breed.map(
                (image: { url: string; alt_names: any; id: string }) => (
                  <ImageListItem key={image.id}>
                    <img
                      srcSet={`${image.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${image.url}?w=164&h=164&fit=crop&auto=format`}
                      alt={image?.alt_names}
                      loading="lazy"
                    />
                  </ImageListItem>
                )
              )}
            </ImageList>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {breedName} - {breedCountry}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {breedDescription}
              </Typography>
              <Typography variant="body2" color="text.secondary" mt={3}>
                {breedId}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href={breedWiki} target="_blank">
                Learn More
              </a>
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Image src={"/assets/cat.jpg"} alt="cat" width="500" height="500" />
      )}
    </Container>
  );
};

export default BreedDetails;
