import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProjectItem({ title, children }) {
  return (
    <Box className="mb-8 border-2 border-gray-300 flex">
      <Box className="h-48 w-48 bg-sky-800" style={{ flexShrink: 0 }}></Box>
      <Box className="p-4 bg-gray-100">
        <Box className="bg-transparent">
          <Typography variant="h5" className="bg-transparent">
            {title}
          </Typography>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
