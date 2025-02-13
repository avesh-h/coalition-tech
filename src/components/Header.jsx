import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Stack,
  Container,
} from "@mui/material";
import logoImg from "../assets/imgs/TestLogo.png";
import HomeIcon from "../assets/svgs/home_FILL0_wght300_GRAD0_opsz24.svg";
import PeopleIcon from "../assets/svgs/group_FILL0_wght300_GRAD0_opsz24.svg";
import CalendarIcon from "../assets/svgs/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import MessageIcon from "../assets/svgs/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import WalletIcon from "../assets/svgs/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import SettingIcon from "../assets/svgs/settings_FILL0_wght300_GRAD0_opsz24.svg";
import MoreIcon from "../assets/svgs/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

const pages = [
  { name: "Overview", icon: <img src={HomeIcon} alt="Home" /> },
  {
    name: "Patients",
    icon: <img src={PeopleIcon} alt="People" />,
    active: true,
  },
  { name: "Schedule", icon: <img src={CalendarIcon} alt="calendar" /> },
  { name: "Message", icon: <img src={MessageIcon} alt="Home" /> },
  { name: "Transactions", icon: <img src={WalletIcon} alt="Home" /> },
];

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 1px 2px 1px rgba(0,0,0,0.1)",
        borderRadius: "50px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
            {/* Replace with your actual logo */}
            <img src={logoImg} alt="Tech.Care" style={{ height: "32px" }} />
            {/* <Typography
              variant="h6"
              sx={{
                ml: 1,
                fontWeight: 600,
                color: "inherit",
              }}
            >
              Tech.Care
            </Typography> */}
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: 2,
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                startIcon={page.icon}
                sx={{
                  color: "text.primary",
                  backgroundColor: page.active ? "#00ffcc" : "transparent",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: page.active
                      ? "#00ffcc"
                      : "rgba(0,0,0,0.04)",
                  },
                  borderRadius: "24px",
                  px: 3,
                  fontFamily: "Manrope",
                  fontWeight: 700,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* User Profile Section */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Manrope",
              }}
            >
              <Avatar
                src="/profile.jpg"
                alt="Dr. Jose Simmons"
                sx={{ width: 40, height: 40 }}
              />
            </Box>
            <Box
              sx={{
                fontFamily: "Manrope",
                lineHeight: 0,
                textAlign: "left",
              }}
            >
              <Typography variant="subtitle2">Dr. Jose Simmons</Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontFamily: "Manrope",
                  fontWeight: 300,
                }}
              >
                General Practitioner
              </Typography>
            </Box>
            <Box sx={{ paddingLeft: "25px" }}>
              <IconButton size="small">
                <img src={SettingIcon} alt="settings" />
              </IconButton>
              <IconButton size="small">
                <img src={MoreIcon} alt="more" />
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
