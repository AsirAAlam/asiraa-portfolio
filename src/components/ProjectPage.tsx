import React from "react";
import { Box, Grid } from "@mui/material";
import colorPalette from "../data/ColorPalette";

export default function ProjectPage() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", flexDirection: "row-reverse" }}
        ></Grid>

        <Grid item xs={6}>
          <Box m={5} />
          <Box sx={{ height: 500, width: 500 }}>
            <Box
              sx={{
                fontFamily: "Oxygen",
                fontSize: 20,
                fontWeight: 700,
                color: colorPalette.color4,
              }}
            >
              Floaty Jett
            </Box>
            <Box
              sx={{
                fontFamily: "Oxygen",
                fontSize: 20,
                fontWeight: 400,
                color: colorPalette.color2,
              }}
            >
              Valorant Inspired 2D Platformer Game
            </Box>

            <Box m={1} />

            <div
              style={{
                fontFamily: "Belleza",
                color: colorPalette.color3,
                fontSize: 20,
              }}
            >
              Built using HTML, CSS, and JavaScript.
              <br />
              <a
                style={{ color: colorPalette.color3 }}
                href="https://asiraalam.github.io/floaty-jett/"
              >
                Go to game
              </a>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
