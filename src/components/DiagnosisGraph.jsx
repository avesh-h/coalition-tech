import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const bloodPressureData = [
  { month: "Oct, 2023", systolic: 120, diastolic: 110 },
  { month: "Nov, 2023", systolic: 118, diastolic: 65 },
  { month: "Dec, 2023", systolic: 160, diastolic: 110 },
  { month: "Jan, 2024", systolic: 115, diastolic: 90 },
  { month: "Feb, 2024", systolic: 150, diastolic: 70 },
  { month: "Mar, 2024", systolic: 160, diastolic: 78 },
];

const DiagnosisHistory = ({ children }) => {
  return (
    <Box
      sx={{
        p: "20px",
        flex: 1,
        backgroundColor: "#fff",
        boxShadow: "0 1px 2px 1px rgba(0,0,0,0.1)",
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 3, fontWeight: 600, textAlign: "left" }}
      >
        Diagnosis History
      </Typography>

      {/* Blood Pressure Chart Section */}
      <Box
        sx={{
          padding: "16px",
          backgroundColor: "#F4F0FE",
          borderRadius: 3,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "70%", height: 300, position: "relative" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  lineHeight: 1,
                  textAlign: "left",
                }}
              >
                Blood Pressure
              </Typography>
              <Select
                defaultValue="6months"
                size="small"
                sx={{
                  minWidth: 150,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select": {
                    py: 0.5,
                    color: "#666",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <MenuItem value="6months">Last 6 months</MenuItem>
              </Select>
            </Stack>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={bloodPressureData}
                margin={{ top: 28, bottom: 28, left: -20, right: 5 }}
              >
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  stroke="#e0e0e0"
                  strokeWidth={0.5}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666", fontSize: 12 }}
                  dy={10}
                  padding={{ left: 0, right: 0 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#666", fontSize: 12 }}
                  domain={[60, 180]}
                  ticks={[60, 80, 100, 120, 140, 160, 180]}
                  dx={-10}
                />
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="#FF69B4"
                  strokeWidth={2}
                  dot={{ fill: "#FF69B4", strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ fill: "#8884d8", strokeWidth: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          <Box sx={{ width: "30%", pl: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#FF69B4",
                    mr: 1,
                    display: "inline-block",
                  }}
                />
                <Typography sx={{ color: "#666" }}>Systolic</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  mb: 1,
                  textAlign: "left",
                }}
              >
                160
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontSize: "0.875rem",
                }}
              >
                <span style={{ fontSize: "0.75rem" }}>▲</span> Higher than
                Average
              </Typography>
            </Box>

            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box
                  component="span"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#8884d8",
                    mr: 1,
                    display: "inline-block",
                  }}
                />
                <Typography sx={{ color: "#666" }}>Diastolic</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 600,
                  lineHeight: 1.2,
                  mb: 1,
                  textAlign: "left",
                }}
              >
                78
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  fontSize: "0.875rem",
                }}
              >
                <span style={{ fontSize: "0.75rem" }}>▼</span> Lower than
                Average
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pt: "20px", textAlign: "left" }}>{children}</Box>
    </Box>
  );
};

export default DiagnosisHistory;
