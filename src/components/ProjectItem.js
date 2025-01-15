import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProjectItem({ title, children, href }) {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Box className="mb-8 border-2 border-gray-300 flex">
      <Box
        className="h-48 w-48 bg-sky-800"
        style={{ flexShrink: 0, cursor: "pointer" }}
        onClick={handleClick}
      ></Box>
      <Box className="p-4 bg-gray-100">
        <Box className="bg-transparent">
          <Typography variant="h5" className="bg-transparent">
            <a href={href} className="underline bg-transparent">
              {title}
            </a>
          </Typography>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
