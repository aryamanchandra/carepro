import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <Box>
      <Stack direction="row" sx={{ paddingTop: "30px" }}>
        <Typography variant="h3" sx={{ paddingRight: "10px" }}>
          Invoice
        </Typography>
        <TextField
          variant="outlined"
          disabled="true"
          placeholder="eg: 2039001"
          className="input"
        />
      </Stack>
      <Stack direction="row" gap={4}>
        <Stack direction="column">
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Issued On
          </Typography>
          <TextField
            label=""
            variant="outlined"
            placeholder="Krishnan Murthy"
            className="input"
          ></TextField>
        </Stack>
        <Stack direction="column">
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Due On
          </Typography>
          <TextField
            variant="outlined"
            placeholder="+91-7004911197"
            className="input"
          ></TextField>
        </Stack>
      </Stack>
      <Stack direction="row" gap={4}>
        <Stack direction="column">
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Patient Id
          </Typography>
          <TextField
            variant="outlined"
            placeholder="+91-7004911197"
            className="input"
          ></TextField>
        </Stack>
        <Stack direction="column">
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Name
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Indian"
            className="input"
          ></TextField>
        </Stack>
      </Stack>
      <Stack direction="column">
        <Typography
          sx={{ paddingBottom: "10px", paddingTop: "20px" }}
          className="input-label"
        >
          Address
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Indian"
          className="input"
        ></TextField>
      </Stack>
    </Box>
  );
}
