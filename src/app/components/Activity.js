import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import MedicationIcon from '@mui/icons-material/Medication';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export default function Activity() {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <Box sx={{ paddingX: "20px", paddingY: "10px" }}>
      <Stack direction="row" alignItems="flex-end">
        <Typography
          variant="subtitle1"
          sx={{ margin: "0px", paddingTop: "0px" }}
        >
          Activity Overview
        </Typography>
        <FormControl
          variant="standard"
          sx={{
            width: "100px",
            marginTop: "0px",
            marginLeft: "auto",
            paddingTop: "0px",
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            label="Time"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Grid container sx={{ marginTop: "30px" }}>
        <Grid item xs={6}>
          <Stack
            sx={{
              padding: "20px",
              backgroundColor: "#A4D2FF",
              textAlign: "center",
              marginRight:"10px",
              marginBottom:"20px",
              borderRadius:"10px",
            }}
            direction="column"
            alignItems="center"
          >
            <DescriptionIcon sx={{fontSize:"30px", paddingBottom:"10px"}}/>
            <Typography variant="subtitle"> ₹1.2L </Typography>
            <Typography variant="body2"> Total Earning </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            sx={{
              padding: "20px",
              backgroundColor: "#FFF598",
              textAlign: "center",
              marginLeft:"10px",
              borderRadius:"10px",
            }}
            direction="column"
            alignItems="center"
          >
            <MedicationIcon sx={{fontSize:"30px", paddingBottom:"10px"}}/>
            <Typography variant="subtitle"> 500 </Typography>
            <Typography variant="body2"> Medicine Sold</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            sx={{
              paddingY: "20px",
              backgroundColor: "#A4FFBD",
              textAlign: "center",
              marginRight:"10px",
              borderRadius:"10px",
            }}
            direction="column"
            alignItems="center"
          >
            <SupervisorAccountIcon sx={{fontSize:"40px", paddingBottom:"10px"}} />
            <Typography variant="subtitle"> 20 </Typography>
            <Typography variant="body2">New IPD Patients</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            sx={{
              paddingY: "20px",
              backgroundColor: "#F1F8FF",
              textAlign: "center",
              marginLeft:"10px",
              borderRadius:"10px",
            }}
            direction="column"
            alignItems="center"
          >
            <SupervisorAccountIcon sx={{fontSize:"40px", paddingBottom:"10px"}} />
            <Typography variant="subtitle"> 50 </Typography>
            <Typography variant="body2">New OPD Patients</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
