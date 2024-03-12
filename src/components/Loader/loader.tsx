import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box sx={{ width: "70%" }} justifyContent={"center"} mt={20} mx={"auto"}>
      <LinearProgress />
    </Box>
  );
};

export default Loader;
