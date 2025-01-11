import React from "react";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <div>
      <div style={{ marginBottom: 128 }}>
        <NavBar />
      </div>
      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
