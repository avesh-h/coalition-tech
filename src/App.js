import { Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import Sidebar from "./components/Sidebar";
// import DiagnosisHistory from "./components/DiagnosisGraph";
import MainSection from "./components/MainSection";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div style={{ padding: "18px", background: "#F6F7F8 " }}>
        <Header />
        <Stack direction="row">
          <Sidebar />
          <MainSection />
          <ProfileSection />
        </Stack>
      </div>
    </div>
  );
}

export default App;
