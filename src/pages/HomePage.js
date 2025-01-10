import "../App.css";
import "../Fonts.css";
import { Box } from "@mui/material";
import React from "react";
import NameIntro from "../components/NameIntro";

function HomePage() {
  return (
    <Box>
      <Box className="pt-24">
        <NameIntro />
      </Box>
    </Box>
  );
}

export default HomePage;
