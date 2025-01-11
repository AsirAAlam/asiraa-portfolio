import React from "react";
import { Box } from "@mui/material";
import Handles from "../components/Handles";
import bio from "../data/Bio";
import colorPalette from "../data/ColorPalette";

export default function NameIntro() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '50%' }}>
        <Box
          sx={{
            fontFamily: "Oxygen",
            fontSize: 40,
            fontWeight: 700,
            color: colorPalette.color4,
            opacity: 1,
          }}
        >
          Hi, I'm {bio.name}
        </Box>

        <Box m={1} />

        <div
          style={{
            fontFamily: "Belleza",
            color: colorPalette.color3,
            fontSize: 20,
            opacity: 1,
            background: "rgba(0, 0, 0, 0)",
          }}
        >
          {bio.description}
        </div>

        <Box className="mt-20">
          <Handles />
        </Box>
      </Box>
    </Box>
  );
}
