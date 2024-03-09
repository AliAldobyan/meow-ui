import { SignUp } from "@clerk/nextjs";
import { Grid } from "@mui/material";

const page = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <SignUp />
      </Grid>
    </Grid>
  );
};

export default page;
