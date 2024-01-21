"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
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
import InvoiceTable from "../components/Table/InvoiceTable";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

export default function Patients() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = () => {
    router.push("/patients/add");
  };

  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row" marginBottom="30px">
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
          <Typography variant="h6">Patient&apos;s Invoices</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              marginLeft: "auto",
              backgroundColor: "#3497F9",
              boxShadow: "none",
              py: 1,
              borderRadius: "5px",
            }}
            onClick={handleOpen}
          >
            New Invoice
          </Button>
        </Stack>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Stack direction="row" sx={{ marginY: "20px" }}>
            <TextField
              id="input-with-icon-textfield"
              type="search"
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: {
                  paddingX: "15",
                  border: "none",
                  paddingY: "10",
                },
              }}
              sx={{
                marginRight: "20px",
              }}
            />
          </Stack>
          <InvoiceTable />
        </Box>
      </Box>
    </Box>
  );
}
