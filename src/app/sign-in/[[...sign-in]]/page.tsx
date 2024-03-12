"use client";
import { SignIn } from "@clerk/nextjs";
import { Typography, Container, Grid } from "@mui/material";

const page = () => {
  return (
    <>
      <Container sx={{ textAlign: "center", marginTop: "8rem" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "2rem" }}
        >
          Welcome to MEOW UI
        </Typography>
        <Typography variant="subtitle1" mb={10}>
          Please sign in to continue to the app.
        </Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          // sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <SignIn />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default page;
