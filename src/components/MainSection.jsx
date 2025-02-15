import { Box, Stack } from "@mui/material";
import React from "react";
import DiagnosisHistory from "./DiagnosisGraph";
import VitalSignCard from "./VitalSignCard";
import LungIcon from "../assets/svgs/respiratory rate.svg";
import TempIcon from "../assets/svgs/temperature.svg";
import HeartIcon from "../assets/svgs/HeartBPM.svg";

const vitalSignsData = [
  {
    id: "respiratory",
    title: "Respiratory Rate",
    value: "20 bpm",
    status: "Normal",
    bgColor: "#E0F3FA",
    icon: <img src={LungIcon} alt="calendar" />,
    statusDirection: null, // null for no arrow
  },
  {
    id: "temperature",
    title: "Temperature",
    value: "98.6°F",
    status: "Normal",
    bgColor: "#FFE6E9",
    icon: <img src={TempIcon} alt="calendar" />,
    statusDirection: null, // null for no arrow
  },
  {
    id: "heart-rate",
    title: "Heart Rate",
    value: "78 bpm",
    status: "Lower than Average",
    bgColor: "#FFE6F1",
    icon: <img src={HeartIcon} alt="calendar" />,
    statusDirection: "down", // "up" or "down"
  },
];

const MainSection = () => {
  return (
    <Stack
      sx={{
        flexGrow: 2,
        p: "30px",
      }}
    >
      <DiagnosisHistory>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "20px",
            width: "100%",
          }}
        >
          {vitalSignsData.map((item) => (
            <VitalSignCard
              key={item.id}
              title={item.title}
              value={item.value}
              status={item.status}
              bgColor={item.bgColor}
              icon={item.icon}
              statusDirection={item.statusDirection}
            />
          ))}
        </Box>
      </DiagnosisHistory>
    </Stack>
  );
};

export default MainSection;
