import React from "react";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <div>
      <div style={{ marginBottom: 128 }}>
        <NavBar />
      </div>
      <Routes>
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
