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
      <Stack direction="row" gap={4}>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Patient&apos;s Name
          </Typography>
          <TextField
            label=""
            variant="outlined"
            placeholder="Krishnan Murthy"
            className="input"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
        </Stack>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Date
          </Typography>
          <TextField
            variant="outlined"
            placeholder="+91-7004911197"
            className="input"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
        </Stack>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Sex
          </Typography>
          <FormControl
            variant="outlined"
            placeholder="Choose Option"
            sx={{
              marginTop: "0px",
              marginLeft: "auto",
              paddingTop: "0px",
              width: "100%",
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Choose Option"
              value={time}
              onChange={handleChange}
              placeholder="Choose Option"
              className="input"
              sx={{
                borderRadius: "30px",
                color: "#1c1c1c",
                backgroundColor: "#F4F6F6",
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
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
          InputProps={{
            style: {
              borderRadius: "30px",
              backgroundColor: "#F4F6F6",
              paddingLeft: "10px",
            },
          }}
        ></TextField>
      </Stack>
      <Typography variant="h6" sx={{ marginTop: "40px" }}>
        Consultation Doctor Detail
      </Typography>
      <Stack direction="row" gap={4}>
        <Stack direction="column">
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Doctor&apos;s Name
          </Typography>
          <TextField
            label=""
            variant="outlined"
            placeholder="Krishnan Murthy"
            className="input"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
        </Stack>
        <Stack direction="column">
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Speciality
          </Typography>
          <TextField
            variant="outlined"
            placeholder="+91-7004911197"
            className="input"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
        </Stack>
      </Stack>
      <Typography
        variant="h6"
        sx={{ marginTop: "20px" }}
        className="input-label"
      >
        Reference Detail (Optional)
      </Typography>
      <Stack direction="row" gap={4}>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Referrer Doctor
          </Typography>
          <TextField
            label=""
            variant="outlined"
            placeholder="Krishnan Murthy"
            className="input"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
        </Stack>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Typography
            sx={{ paddingBottom: "10px", paddingTop: "20px" }}
            className="input-label"
          >
            Referrer Address
          </Typography>
          <TextField
            variant="outlined"
            placeholder="+91-7004911197"
            fullWidth
            className="input"
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "#F4F6F6",
                paddingLeft: "10px",
              },
            }}
          ></TextField>
        </Stack>
      </Stack>
    </Box>
  );
}
