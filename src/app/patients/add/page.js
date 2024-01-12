"use client"
import {
  Box,
  Button,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import RegistrationForm from "@/app/components/Form/RegistrationForm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Add() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row" marginBottom="10px">
        <Typography variant="h6" color="primary.light">
          IPD Patient Details
        </Typography>
        <Button startIcon={<NotificationsIcon />} sx={{ marginLeft: "auto" }} />
        <Stack direction="column">
          <Typography variant="subtitle2">Jonitha Cathrine</Typography>
          <Typography variant="body2" color="primary">
            Admin
          </Typography>
        </Stack>
      </Stack>
      <Link href="/patients">
        <Typography sx={{marginBottom:"20px"}}>Go Back to Patients</Typography>
      </Link>
      <Box
        sx={{ backgroundColor: "#fff", borderRadius: "20px", padding: "20px" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ marginBottom: "20px" }}
        >
          <Typography> PATIENT NO. 10214234534</Typography>
          <Button variant="contained" sx={{ marginLeft: "auto" }}>
            Save
          </Button>
        </Stack>
        <Divider />
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop:"10px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Registration Form" {...a11yProps(0)} />
            <Tab label="Risk Coverage Declaration" {...a11yProps(1)} />
            <Tab label="Documents" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <RegistrationForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
