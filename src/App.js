import { Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import Sidebar from "./components/Sidebar";
// import DiagnosisHistory from "./components/DiagnosisGraph";
import MainSection from "./components/MainSection";
import { useState } from "react";

const USERNAME = process.env.REACT_APP_API_USERNAME;
const PASSWORD = process.env.REACT_APP_API_PASSWORD;
function App() {
  const [response, setResponse] = useState([]);

  console.log("envvvvvvvvvvvvv", { USERNAME, PASSWORD });

  const makeApiCall = () => {
    const credentials = btoa(`${USERNAME}:${PASSWORD}`);
    console.log("Credddddddddddddddddd", credentials);
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    }).then((response) => {
      response.json().then((data) => {
        setResponse(data);
      });
    });
  };
  return (
    <div className="App">
      <div style={{ padding: "18px", background: "#F6F7F8 " }}>
        <Header />
        <Stack direction="row">
          <Sidebar />
          <MainSection />
          <ProfileSection />
        </Stack>
        {/* <DiagnosisHistory /> */}
        <button onClick={makeApiCall}>Call</button>
      </div>
    </div>
  );
}

export default App;
