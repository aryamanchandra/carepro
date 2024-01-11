"use client";
import * as React from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import IPDTable from "../components/Table/IPDTable";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PatientTable from "../components/Table/PatientTable";

export default function Patients() {
  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row" marginBottom="30px">
        <Typography variant="h6" color="primary.light">
          Patient Details
        </Typography>
        <Button startIcon={<NotificationsIcon />} sx={{ marginLeft: "auto" }} />
        <Stack direction="column">
          <Typography variant="subtitle2">Jonitha Cathrine</Typography>
          <Typography variant="body2" color="primary">
            Admin
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          width: "95%",
          backgroundColor: "#fff",
          padding: "20px",
          paddingX: "40px",
          borderRadius: "10px",
        }}
      >
        <Stack
          direction="row"
          sx={{
            paddingTop: "10px",
            paddingBottom: "20px",
            borderBottom: "1px solid #B0B0B0",
          }}
          alignItems="center"
        >
          <Typography>Patient Info</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ marginLeft: "auto" }}
          >
            New Patient
          </Button>
        </Stack>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Stack direction="row" sx={{ marginY: "20px" }}>
            {/* <TextField
              id="filled-basic"
              label="Search"
              variant="filled"
              startIcon={<SearchIcon />}
              sx={{ borderRadius: "20px", marginRight: "20px" }}
            /> */}
            <TextField
              id="input-with-icon-textfield"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              sx={{ borderRadius: "20px !important", marginRight: "20px" }}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Stack>
          <PatientTable />
        </Box>
      </Box>
    </Box>
  );
}
