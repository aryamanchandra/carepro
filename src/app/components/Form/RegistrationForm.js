import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function RegistrationForm() {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <Box>
      <Stack direction="row">
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Patient&apos;s Name
          </Typography>
          <TextField
            label=""
            variant="filled"
            placeholder="Krishnan Murthy"
          ></TextField>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Father&apos;s/Husband/Guardian&apos;s Name
          </Typography>
          <TextField variant="filled" placeholder="+91-7004911197"></TextField>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Admission Date
          </Typography>
          <TextField variant="filled" placeholder="+91-7004911197"></TextField>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Sex
          </Typography>
          <FormControl
            variant="filled"
            placeholder="Choose Option"
            sx={{
              marginTop: "0px",
              marginLeft: "auto",
              paddingTop: "0px",
              width: "200px",
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose Option"
              value={time}
              onChange={handleChange}
              placeholder="Choose Option"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Marital Status
          </Typography>
          <FormControl
            variant="filled"
            placeholder="Choose Option"
            sx={{
              marginTop: "0px",
              marginLeft: "auto",
              paddingTop: "0px",
              width: "200px",
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose Option"
              value={time}
              onChange={handleChange}
              placeholder="Choose Option"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Nationality
          </Typography>
          <TextField variant="filled" placeholder="Indian"></TextField>
        </Stack>
      </Stack>
      <Stack direction="column">
        <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
          Address
        </Typography>
        <TextField variant="filled" fullWidth placeholder="Indian"></TextField>
      </Stack>
      <Typography variant="h6" sx={{ marginTop: "20px" }}>
        Emergency Contact
      </Typography>
      <Stack direction="row">
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Name of the person to be notified{" "}
          </Typography>
          <TextField
            label=""
            variant="filled"
            placeholder="Krishnan Murthy"
          ></TextField>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Relationship with the patient{" "}
          </Typography>
          <TextField variant="filled" placeholder="+91-7004911197"></TextField>
        </Stack>
        <Stack direction="column">
          <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
            Contact No.{" "}
          </Typography>
          <TextField variant="filled" placeholder="+91-7004911197"></TextField>
        </Stack>
      </Stack>
      <Stack direction="column">
        <Typography sx={{ paddingBottom: "10px", paddingTop: "20px" }}>
          Address
        </Typography>
        <TextField variant="filled" fullWidth placeholder="Indian"></TextField>
      </Stack>
    </Box>
  );
}
