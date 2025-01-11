import React from "react";
import { Box, Grid } from "@mui/material";
import colorPalette from "../data/ColorPalette";
import meta from '../data/meta.gif'

function ExperienceItem({ title, role, description }) {
  return (
    <Grid container spacing={4}>
      <Grid
        item
        xs={6}
      >

        <Box>
          <img src={meta} style={{ objectFit: 'fill' }} />
        </Box>

      </Grid>
      <Grid item xs={6}>
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
      </Grid>
    </Grid>
  );
}

export default ExperienceItem;
