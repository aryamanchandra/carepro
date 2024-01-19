import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
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
          variant="h6"
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
          defaultValue={10}
        >
          <NativeSelect
            labelId="demo-simple-select-label"
            value={time}
            defaultValue={10}
            label="Time"
            onChange={handleChange}
            inputProps={{
              name: 'time',
              id: 'uncontrolled-native',
            }}
          >
            <MenuItem value={10}>Weekly</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </NativeSelect>
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
            <DescriptionIcon sx={{fontSize:"30px", paddingBottom:"10px", color:"#374858"}}/>
            <Typography variant="subtitle" sx={{color:"#374858"}}> ₹1.2L </Typography>
            <Typography variant="body2" sx={{color:"#374858"}}> Total Earning </Typography>
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
              color:"#4B4403"
            }}
            direction="column"
            alignItems="center"
          >
            <MedicationIcon sx={{fontSize:"30px", paddingBottom:"10px", color:"#4B4403"}}/>
            <Typography variant="subtitle" sx={{color:"#4B4403"}}> 500 </Typography>
            <Typography variant="body2" sx={{color:"#4B4403"}}> Medicine Sold</Typography>
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
            <SupervisorAccountIcon sx={{fontSize:"40px", paddingBottom:"10px", color:"#2D421E"}} />
            <Typography variant="subtitle" sx={{color:"#2D421E"}}> 20 </Typography>
            <Typography variant="body2" sx={{color:"#2D421E"}}>New IPD Patients</Typography>
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
            <SupervisorAccountIcon sx={{fontSize:"40px", paddingBottom:"10px", color:"#2D421E"}} />
            <Typography variant="subtitle" sx={{color:"#2D421E"}}> 50 </Typography>
            <Typography variant="body2" sx={{color:"#2D421E"}}>New OPD Patients</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
