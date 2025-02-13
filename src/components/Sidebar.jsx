import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { usePatientsData } from "../context/PatientsDataContext";

const patients = [
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: "/avatar1.jpg",
    selected: false,
  },
  {
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: "/avatar2.jpg",
    selected: false,
  },
  {
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: "/avatar3.jpg",
    selected: false,
  },
  {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "/avatar4.jpg",
    selected: true,
  },
  {
    name: "Samantha Johnson",
    gender: "Female",
    age: 56,
    image: "/avatar5.jpg",
    selected: false,
  },
  {
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: "/avatar6.jpg",
    selected: false,
  },
  {
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "/avatar7.jpg",
    selected: false,
  },
  {
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: "/avatar8.jpg",
    selected: false,
  },
];

function Sidebar() {
  const patientsData = usePatientsData();
  console.log("ppppppppppppppp", patientsData);
  return (
    <Box
      sx={{
        width: 360,
        height: "100vh",
        backgroundColor: "#fff",
        borderRight: "1px solid #eee",
        display: "flex",
        flexDirection: "column",
        mt: "32px",
        borderRadius: "16px",
        boxShadow: "0 1px 3px 1px rgba(0,0,0,0.1)",
      }}
    >
      {/* Fixed Header Section */}
      <Box
        sx={{
          p: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Patients
        </Typography>

        {/* Search Bar */}
        <Paper
          elevation={0}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchIcon sx={{ p: 1, color: "text.secondary" }} />
          {/* <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" /> */}
        </Paper>
      </Box>

      {/* Scrollable Patients List */}
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          //   px: 3,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#E0E0E0",
            borderRadius: "3px",
          },
        }}
      >
        <List
          sx={{
            "& .MuiListItem-root": {
              borderRadius: 1,
              mb: 0.5,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            },
          }}
        >
          {patients.map((patient) => (
            <ListItem
              key={patient.name}
              sx={{
                backgroundColor: patient.selected ? "#E6F7F5" : "transparent",
                "&:hover": {
                  backgroundColor: patient.selected
                    ? "#E6F7F5"
                    : "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={patient.image}
                  alt={patient.name}
                  sx={{ width: 40, height: 40 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={patient.name}
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    {`${patient.gender}, ${patient.age}`}
                  </Typography>
                }
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: "0.85rem",
                  },
                }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" size="small">
                  <MoreHorizIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
