"use client";
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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DocumentUploadPage from "@/app/components/Form/Document";
import OPDForm from "@/app/components/Form/OPDForm";

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

  const input="OPD";

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
        <Button
          sx={{ marginBottom: "20px", color: "#3497F9" }}
          startIcon={<ArrowBackIosIcon />}
        >
          Go Back to Patients
        </Button>
      </Link>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "30px",
          paddingX: "40px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ marginBottom: "20px" }}
        >
          <Typography variant="subtitle1"> PATIENT NO. 10214234534</Typography>
          <Button
            variant="contained"
            sx={{
              paddingY: "10px",
              marginLeft: "auto",
              backgroundColor: "#3497F9",
              boxShadow: "none",
              py: 1,
              px: 3,
              borderRadius: "5px",
            }}
          >
            Save
          </Button>
        </Stack>
        <Divider />
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", marginTop: "10px" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="#3497F9"
          >
            <Tab label="Registration Form" {...a11yProps(0)} />
            <Tab label="Documents" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {input == "IPD" ? <RegistrationForm /> : <OPDForm />}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <DocumentUploadPage />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
