import "../App.css";
import "../Fonts.css";
import { Box } from "@mui/material";
import NameIntro from "../components/NameIntro";

function HomePage() {
  return (
    <div>
      <div className="pt-24">
        <NameIntro />
      </div>

      <div>
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
            src="/forest.png"
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
    </div>
  );
}

export default HomePage;
