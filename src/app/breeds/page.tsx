"use client";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { fetchBreeds } from "@/redux/features/breedsSlice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Container, Box } from "@mui/material";
import Loader from "@/components/Loader/loader";
import BreedDetails from "./breedDetails";
import { useAuth } from "@clerk/nextjs";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, [dispatch]);

  const breedId = useAppSelector((state) => state.breedDetails.breed_id);
  const [selectedBreed, setSelectedBreed] = useState<string>(
    breedId ? breedId : ""
  );
  const { userId } = useAuth();

  const breeds = useAppSelector((state) => state.breeds.breeds);
  const loading = useAppSelector((state) => state.breeds.status);

  if (loading === "loading") {
    return <Loader />;
  }

  return (
    <>
      <Container maxWidth="md" sx={{ flexGrow: 1, marginTop: "30px" }}>
        <h1> Select a Breed to see information about it</h1>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="breed-select-label">Breed</InputLabel>
            <Select
              labelId="breed-select-label"
              id="breed-select"
              value={selectedBreed}
              label="Breed"
              onChange={(e: SelectChangeEvent) =>
                setSelectedBreed(e.target.value as string)
              }
            >
              {breeds?.map((breed: { id: string; name: string }) => (
                <MenuItem key={breed.id} value={breed.id}>
                  {breed.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ flexGrow: 1, marginTop: "30px" }}>
        <BreedDetails
          userId={userId as string}
          breed_id={selectedBreed as string}
        />
      </Container>
    </>
  );
};

export default Page;
