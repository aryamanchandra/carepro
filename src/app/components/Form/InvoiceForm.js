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
      <Stack direction="row" sx={{ paddingTop: "30px" }} alignItems="center">
        <Typography variant="h3" sx={{ paddingRight: "10px" }}>
          Invoice
        </Typography>
        <TextField
          variant="outlined"
          disabled="true"
          placeholder="eg: 2039001"
          className="input"
          size="small"
          InputProps={{
            style: {
              borderRadius: "30px",
              backgroundColor: "#F4F6F6",
              paddingLeft: "10px",
            },
          }}
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
            placeholder="Choose Date"
            className="input"
            size="small"
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
            Due On
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Choose Date"
            className="input"
            size="small"
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
            placeholder="Patient ID"
            className="input"
            size="small"
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
            Name
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Krishna Murthy"
            className="input"
            size="small"
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
          size="small"
          InputProps={{
            style: {
              borderRadius: "30px",
              backgroundColor: "#F4F6F6",
              paddingLeft: "10px",
            },
          }}
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
            <TableCell sx={{paddingX:1}}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Ultra Sound"
                className="input"
                size="small"
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    backgroundColor: "#F4F6F6",
                    paddingLeft: "5px",
                  },
                }}
              ></TextField>
            </TableCell>
            <TableCell sx={{paddingX:1}}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Rs. 2,000"
                className="input"
                size="small"
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    backgroundColor: "#F4F6F6",
                    paddingLeft: "10px",
                  },
                }}
              >
              </TextField>{" "}
            </TableCell>
            <TableCell sx={{paddingX:1}}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="1"
                className="input"
                size="small"
                InputProps={{
                  style: {
                    borderRadius: "30px",
                    backgroundColor: "#F4F6F6",
                    paddingLeft: "10px",
                  },
                }}
              >
              </TextField>{" "}
            </TableCell>
            <TableCell alignItems="center" sx={{paddingX:1}}>
              <Stack direction="row">
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Rs. 2000"
                  className="input"
                  size="small"
                  InputProps={{
                    style: {
                      borderRadius: "30px",
                      backgroundColor: "#F4F6F6",
                      paddingLeft: "10px",
                    },
                  }}
                ></TextField>
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
      <Stack direction="row" sx={{ borderBottom: "1px solid #ddd" }}>
        <Button
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: "15px",
            color: "#3497F9",
          }}
          startIcon={<AddIcon />}
        >
          <Typography>Add Item</Typography>
        </Button>
      </Stack>
    </Box>
  );
}
