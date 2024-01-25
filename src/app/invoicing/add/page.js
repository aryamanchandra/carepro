"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import InvoiceForm from "@/app/components/Form/InvoiceForm";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Add() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row" marginBottom="10px">
        <Typography variant="h6" color="primary.light">
          Invoicing
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
          Go Back to Invoices
        </Button>
      </Link>
      <Box
        sx={{ backgroundColor: "#fff", borderRadius: "20px", padding: "30px", paddingX:"40px" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ marginBottom: "20px" }}
        >
          <Typography variant="subtitle1">INVOICE NO: #299533</Typography>
          <Button
            variant="contained"
            sx={{
              paddingY: "10px",
              marginLeft: "auto",
              backgroundColor: "#fff",
              color:"#3497F9",
              boxShadow: "none",
              py: 1,
              px:3,
              borderRadius: "5px",
            }}
          >
            Print
          </Button>
          <Button
            variant="contained"
            sx={{
              paddingY: "10px",
              backgroundColor: "#3497F9",
              boxShadow: "none",
              py: 1,
              px:3,
              borderRadius: "5px",
            }}
          >
            Save
          </Button>
        </Stack>
        <Divider />
        <Grid container>
          <Grid item xs={8} sx={{padding:"10px", paddingRight:"30px", borderRight:"1px solid #000"}}>
            <InvoiceForm />
          </Grid>
          <Grid item xs={4} sx={{padding:"20px"}}>
            <Typography sx={{marginTop:"20px"}}>Payment Summary</Typography>
            <Stack direction="row" sx={{paddingY:"20px", paddingX:"20px"}}>
              <Typography variant="h6">Sub total</Typography>
              <Typography variant="h6" sx={{marginLeft:"auto"}}>$7000.00</Typography>
            </Stack>
            <Stack direction="row" sx={{paddingY:"20px", paddingX:"20px"}}>
              <Typography variant="h6">Discount (20%)</Typography>
              <Typography variant="h6" sx={{marginLeft:"auto"}}>$52.80</Typography>
            </Stack>
            <Stack direction="row" sx={{paddingY:"20px", paddingX:"20px"}}>
              <Typography variant="h6">Tax fee</Typography>
              <Typography variant="h6" sx={{marginLeft:"auto"}}>$52.80</Typography>
            </Stack>
            <Stack direction="row" sx={{paddingY:"20px", paddingX:"20px", backgroundColor:"#F8FAFC"}}>
              <Typography variant="h6">Grand Total</Typography>
              <Typography variant="h6" sx={{marginLeft:"auto"}}>$316.8</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
