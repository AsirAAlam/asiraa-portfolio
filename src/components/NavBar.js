import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavBarButton from "./NavBarButton";

export default function MyNavbar() {
  return (
    <AppBar elevation={0} position="absolute">
      <div className="p-8">
        <Toolbar>
          <div className="flex space-x-8 ml-12">
            <NavBarButton label="about" href="/" />
            <NavBarButton label="experience" href="/experience" />
            <NavBarButton label="projects" href="/projects" />
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}
