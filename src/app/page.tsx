import styles from "./page.module.css";
// import Button from "@mui/material/Button";
import Card from "@/components/Card/card";
import { Container, Box } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          alignContent: "center",
          justifyItems: "center",
          flexGrow: 1,
          marginTop: "30px",
        }}
      >
        <h1> Meow-tastic Moments Await with MEOW UI!</h1>
      </Container>

      <Box sx={{ minWidth: 120, alignContent: "center" }}>
        <Container maxWidth="sm" sx={{ flexGrow: 1, marginTop: "30px" }}>
          <Image src={"/assets/cat.jpg"} alt="cat" width="500" height="500" />
        </Container>
      </Box>
    </>
  );
}
