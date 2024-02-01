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
import InventoryTable from "../components/Table/InventoryTable";
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
          Inventory
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
              p: 5,
              my:10,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{ marginBottom: "20px" }}
            >
              <Typography variant="h5">Add Inventory Item</Typography>
              <Button sx={{ marginLeft: "auto" }} onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Stack>
            <Divider />
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Item Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Calpol"
              InputProps={{
                style: {
                  borderRadius: "30px",
                  backgroundColor: "#F4F6F6",
                  paddingLeft: "10px",
                },
              }}
            ></TextField>
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Category
            </Typography>
            <FormControl
              variant="outlined"
              fullWidth
              placeholder="Choose category"
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
                defaultValue={10}
                sx={{ borderRadius: "30px",color: "#1c1c1c", backgroundColor: "#F4F6F6" }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Brand
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Cipla"
              InputProps={{
                style: {
                  borderRadius: "30px",
                  backgroundColor: "#F4F6F6",
                  paddingLeft: "10px",
                },
              }}
            ></TextField>
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Price(per unit)
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="450"
              InputProps={{
                style: {
                  borderRadius: "30px",
                  backgroundColor: "#F4F6F6",
                  paddingLeft: "10px",
                },
              }}
            ></TextField>
            <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
              Qty
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter Qty"
              InputProps={{
                style: {
                  borderRadius: "30px",
                  backgroundColor: "#F4F6F6",
                  paddingLeft: "10px",
                },
              }}
            ></TextField>
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
              Add Item
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
          <Typography variant="h6">Inventory Items</Typography>
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
            New Item
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
          <InventoryTable />
        </Box>
      </Box>
    </Box>
  );
}
