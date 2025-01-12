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

      <div style={{ position: "absolute" }}>
        <Box
          sx={{
            position: "fixed",
            backgroundColor: "transparent",
            pointerEvents: "none",
            bottom: {
              xs: 0,
              lg: -48,
              xl: -128,
            },
          }}
        >
          <img
            style={{
              backgroundColor: "transparent",
            }}
            alt="forest"
            src={require("../images/forest.png")}
          />
        </Box>

        <a
          className="text-teal-600"
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            backgroundColor: "transparent",
          }}
          href="https://www.vecteezy.com/members/tati-dsgn"
        >
          Art by Tatyana Pavliuk
        </a>
      </div>
    </Box>
  );
}

export default HomePage;
