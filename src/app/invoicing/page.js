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
import PatientTable from "../components/Table/PatientTable";
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
    router.push("/patients/add")
  }

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
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            borderRadius: "10px",
            bgcolor: "background.paper",
            p: 5,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{ marginBottom: "20px" }}
          >
            <Typography variant="h5">Modal Title</Typography>
            <Button sx={{ marginLeft: "auto" }} onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Stack>
          <Divider />
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Patient&apos;s Name
          </Typography>
          <TextField
            variant="filled"
            fullWidth
            placeholder="Krishnan Murthy"
          ></TextField>
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Contact Number
          </Typography>
          <TextField
            variant="filled"
            fullWidth
            placeholder="+91-7004911197"
          ></TextField>
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Patient Type
          </Typography>
          <FormControl
            variant="filled"
            fullWidth
            placeholder="Choose Option"
            sx={{
              marginTop: "0px",
              marginLeft: "auto",
              paddingTop: "0px",
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose Option"
              value={time}
              onChange={handleChange}
              placeholder="Choose Option"
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            fullWidth
            sx={{ marginY: "20px", marginTop: "40px", paddingY: "10px" }}
            onClick={handleSubmit}
          >
            Add New Patient
          </Button>
        </Box>
      </Modal>
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
          <Typography>Patient&apos;s Invoices</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ marginLeft: "auto" }}
            onClick={handleOpen}
          >
            New Invoice
          </Button>
        </Stack>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Stack direction="row" sx={{ marginY: "20px" }}>
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
          </Stack>
          <PatientTable />
        </Box>
      </Box>
    </Box>
  );
}
