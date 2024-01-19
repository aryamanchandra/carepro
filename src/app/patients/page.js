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
  NativeSelect,
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
        <Stack direction="row" marginBottom="30px">
          <Typography variant="h6" color="primary.light">
            Patient Details
          </Typography>
          <Button
            startIcon={<NotificationsIcon />}
            sx={{ marginLeft: "auto" }}
          />
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
              <Typography variant="h5">Add New Patient</Typography>
              <Button sx={{ marginLeft: "auto" }} onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Stack>
            <Divider />
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Patient&apos;s Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Krishnan Murthy"
              sx={{ backgroundColor: "#F4F6F6" }}
            ></TextField>
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Contact Number
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="+91-7004911197"
              sx={{ backgroundColor: "#F4F6F6" }}
            ></TextField>
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Patient Type
            </Typography>
            <FormControl
              variant="outlined"
              fullWidth
              placeholder="Choose Option"
              sx={{
                marginTop: "0px",
                marginLeft: "auto",
                paddingTop: "0px",
                backgroundColor:"#F4F6F6"
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
                defaultValue={10}
                sx={{color:"#1c1c1c"}}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginY: "20px",
                marginTop: "40px",
                paddingY: "10px",
                marginLeft: "auto",
                backgroundColor: "#3497F9",
                boxShadow: "none",
                py: 2,
                borderRadius: "5px",
              }}
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
            <Typography variant="h6">Patient Info</Typography>
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
              New Patient
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
              <DatePicker label="Filter by Date" />
            </Stack>
            <PatientTable />
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
