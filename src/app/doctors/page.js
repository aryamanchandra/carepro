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
import DoctorTable from "../components/Table/DoctorTable";
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
          Doctors
        </Typography>
        <Button startIcon={<NotificationsIcon />} sx={{ marginLeft: "auto" }} />
        <Stack direction="column">
          <Typography variant="subtitle2">Jonitha Cathrine</Typography>
          <Typography variant="body2" color="primary">
            Admin
          </Typography>
        </Stack>
      </Stack>
      <Modal open={open} onClose={handleClose} sx={{overflowY:"scroll"}}>
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
            // height:"100%",
            p: 5,
            my:10
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
            Doctor&apos;s Name
          </Typography>
          <TextField
            variant="outlined"
            // size="small"
            fullWidth
            placeholder="Krishnan Murthy"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Expertise
          </Typography>
          <TextField
            variant="outlined"
            // size="small"
            fullWidth
            placeholder="MBBS, Child Specialist"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Contact Number
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            // size="small"
            placeholder="+91-7004911197"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Email
          </Typography>
          <TextField
            variant="outlined"
            // size="small"
            fullWidth
            placeholder="john.doe@gmail.com"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Gender
          </Typography>
          <FormControl
            variant="outlined"
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
              // size="small"
              sx={{ borderRadius: "30px", backgroundColor: "#F4F6F6" }}
            >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            fullWidth
            sx={{ marginY: "20px", marginTop: "40px", paddingY: "10px", borderRadius:"8px" , textTransform:"capitalize", backgroundColor:"#3497F9" }}
            onClick={handleSubmit}
          >
            Add New Doctor
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
          <Typography variant="h6">Doctor Info</Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              marginLeft: "auto",
              backgroundColor: "#3497F9",
              boxShadow: "none",
              py: 1,
              borderRadius: "8px",
              textTransform:"capitalize"
            }}
            onClick={handleOpen}
          >
            New Doctor
          </Button>
        </Stack>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Stack direction="row" sx={{ marginY: "20px" }}>
            <TextField
              id="input-with-icon-textfield"
              type="search"
              placeholder="Search"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                style: {
                  borderRadius: "30px",
                  backgroundColor: "#EBF5FF",
                },
              }}
            />
          </Stack>
          <DoctorTable />
        </Box>
      </Box>
    </Box>
  );
}
