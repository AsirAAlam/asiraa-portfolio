import { Box, Grid } from "@mui/material";
import colorPalette from "../data/ColorPalette";
import { ReactNode } from "react";

interface Props {
  title: string;
  role: string;
  description: string;
  img: ReactNode;
}

function ExperienceItem({ title, role, description, img }: Props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6} className="flex items-center justify-center">
        <Box className="w-10/12	h-10/12 flex items-center justify-center">
          {img}
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
