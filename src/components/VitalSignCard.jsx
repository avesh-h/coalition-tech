import React from "react";
import { Box, Typography } from "@mui/material";

const VitalSignCard = ({
  title,
  value,
  status,
  bgColor,
  icon: IconComponent,
  statusDirection,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        borderRadius: 2,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        // gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mb: 1,
        }}
      >
        {IconComponent}
      </Box>

      <Typography sx={{ fontSize: 14, color: "#333" }}>{title}</Typography>

      <Typography
        sx={{ fontSize: 24, fontWeight: 600, color: "#001a33", mb: 0.5 }}
      >
        {value}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          pt: 2,
        }}
      >
        {statusDirection === "up" && (
          <Typography component="span" sx={{ fontSize: 12 }}>
            ▲
          </Typography>
        )}
        {statusDirection === "down" && (
          <Typography component="span" sx={{ fontSize: 12 }}>
            ▼
          </Typography>
        )}
        <Typography sx={{ fontSize: 14, color: "#555" }}>{status}</Typography>
      </Box>
    </Box>
  );
};

export default VitalSignCard;
