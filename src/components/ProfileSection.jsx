import * as React from "react";
import { Box, Typography, Avatar, Stack, Button } from "@mui/material";
import GenderIcon from "../assets/svgs/FemaleIcon.svg";
import SecurityIcon from "../assets/svgs/InsuranceIcon.svg";
import PhoneIcon from "../assets/svgs/PhoneIcon.svg";
import CalenderIcon from "../assets/svgs/BirthIcon.svg";

function ProfileSection() {
  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: "#fff",
        borderLeft: "1px solid #eee",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "18px",
        boxShadow: "0 1px 2px 1px rgba(0,0,0,0.1)",
        borderRadius: "16px",
      }}
    >
      {/* Profile Image */}
      <Avatar
        src="/jessica-taylor.jpg"
        alt="Jessica Taylor"
        sx={{
          width: 180,
          height: 180,
          mb: 2,
        }}
      />

      {/* Name */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 600, mb: 4, fontFamily: "Manrope" }}
      >
        Jessica Taylor
      </Typography>

      {/* Information Stack */}
      <Stack spacing={3} width="100%" sx={{ mb: 4, textAlign: "left" }}>
        {/* Date of Birth */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={CalenderIcon} alt="calendar" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Date Of Birth
            </Typography>
            <Typography variant="body1">August 23, 1996</Typography>
          </Box>
        </Box>

        {/* Gender */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={GenderIcon} alt="Gender" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Gender
            </Typography>
            <Typography variant="body1">Female</Typography>
          </Box>
        </Box>

        {/* Contact Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={PhoneIcon} alt="Phone" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Contact Info.
            </Typography>
            <Typography variant="body1">(415) 555-1234</Typography>
          </Box>
        </Box>

        {/* Emergency Contact */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={PhoneIcon} alt="Phone" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Emergency Contacts
            </Typography>
            <Typography variant="body1">(415) 555-5678</Typography>
          </Box>
        </Box>

        {/* Insurance Provider */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <img src={SecurityIcon} alt="Insurance" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Insurance Provider
            </Typography>
            <Typography variant="body1">Sunrise Health Assurance</Typography>
          </Box>
        </Box>
      </Stack>

      {/* Show All Information Button */}
      <Button
        variant="contained"
        sx={{
          mt: "auto",
          backgroundColor: "#00ffcc",
          color: "black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#00e6b8",
          },
          borderRadius: "50px",
          py: 1.5,
          px: "40px",
        }}
      >
        Show All Information
      </Button>
    </Box>
  );
}

export default ProfileSection;
