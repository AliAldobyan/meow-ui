import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const selectBreed = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  return <div>select</div>;
};

export default selectBreed;
