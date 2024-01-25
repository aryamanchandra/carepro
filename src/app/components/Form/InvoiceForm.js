import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import "./RegistrationForm.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography
                sx={{
                  background: "#F4F6F6",
                  borderRadius: "40px",
                  padding: "10px",
                  paddingX: "20px",
                }}
              >
                Ultra Sound
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  background: "#F4F6F6",
                  borderRadius: "40px",
                  padding: "10px",
                  paddingX: "20px",
                }}
              >
                Rs. 2,000
              </Typography>{" "}
            </TableCell>
            <TableCell>
              <Typography
                sx={{
                  background: "#F4F6F6",
                  borderRadius: "40px",
                  padding: "10px",
                  paddingX: "20px",
                }}
              >
                1
              </Typography>{" "}
            </TableCell>
            <TableCell alignItems="center">
              <Stack direction="row">
                <Typography
                  sx={{
                    background: "#F4F6F6",
                    borderRadius: "40px",
                    padding: "10px",
                    paddingX: "20px",
                  }}
                >
                  Rs. 2,000
                </Typography>
                <Button
                  sx={{ color: "#000", minWidth: "20px", marginRight: "10px" }}
                >
                  <CloseIcon />
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Stack direction="row" sx={{ borderBottom:"1px solid #ddd"}}>
        <Button
          sx={{ marginLeft: "auto", marginRight: "auto", padding:"15px", color:"#3497F9"}}
          startIcon={<AddIcon />}
        >
          <Typography>Add Item</Typography>
        </Button>
      </Stack>
    </Box>
  );
}
