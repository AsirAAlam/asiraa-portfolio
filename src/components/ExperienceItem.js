import React from "react";
import { Box, Grid } from "@mui/material";
import colorPalette from "../data/ColorPalette";

function ExperienceItem({ title, role, description }) {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "row-reverse" }}
        >
        </Grid>
        <Grid item xs={6}>
          <Box m={5} />
          <Box sx={{ height: 500 }}>
            <Box
              sx={{
                fontFamily: "Oxygen",
                fontSize: 20,
                fontWeight: 700,
                color: colorPalette.color4,
              }}
            >
              {title}
            </Box>
            <Box
              sx={{
                fontFamily: "Oxygen",
                fontSize: 20,
                fontWeight: 400,
                color: colorPalette.color2,
              }}
            >
              {role}
            </Box>

            <Box m={1} />

            <div
              style={{
                fontFamily: "Belleza",
                color: colorPalette.color3,
                fontSize: 20,
                background: "rgba(0, 0, 0, 0)",
              }}
            >
              {description}
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExperienceItem;
