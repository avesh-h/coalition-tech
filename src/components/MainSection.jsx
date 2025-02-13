import { Stack } from "@mui/material";
import React from "react";
import DiagnosisHistory from "./DiagnosisGraph";

const MainSection = () => {
  return (
    <Stack
      sx={{
        flexGrow: 2,
        p: "30px",
      }}
    >
      <DiagnosisHistory />
    </Stack>
  );
};

export default MainSection;
