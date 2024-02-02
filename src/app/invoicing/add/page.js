"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import "../../components/Form/RegistrationForm.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default function Add() {
  const [value, setValue] = useState(0);

  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const [items, setItems] = useState([
    { item: "", cost: "", qty: "", total: "", disabled: true },
  ]);

  const addItem = () => {
    const lastItem = items[items.length - 1];
    const newItem = { ...lastItem };
    setItems([...items, newItem]);
  };

  const subtotal = items.reduce((acc, curr) => {
    return acc + parseFloat(curr.cost) * parseFloat(curr.qty);
  }, 0);

  const discount = 52;
  const taxfee = 52;
  const total = Math.round(subtotal * (1 - discount / 100) + taxfee).toFixed(2);

  const handleItemChange = (index, key, value) => {
    const newItems = [...items];
    newItems[index][key] = value;
    setItems(newItems);
  };

  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row" marginBottom="10px">
        <Typography variant="h6" color="primary.light">
          Invoicing
        </Typography>
        <Button startIcon={<NotificationsIcon />} sx={{ marginLeft: "auto" }} />
        <Stack direction="column">
          <Typography variant="subtitle2">Jonitha Cathrine</Typography>
          <Typography variant="body2" color="primary">
            Admin
          </Typography>
        </Stack>
      </Stack>
      <Link href="/patients">
        <Button
          sx={{ marginBottom: "20px", color: "#3497F9", textTransform:"capitalize" }}
          startIcon={<ArrowBackIosIcon />}
        >
          Go Back to Invoices
        </Button>
      </Link>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "30px",
          paddingX: "40px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ marginBottom: "20px" }}
        >
          <Typography variant="subtitle1">INVOICE NO: #299533</Typography>
          <Button
            variant="contained"
            sx={{
              paddingY: "10px",
              marginLeft: "auto",
              backgroundColor: "#fff",
              color: "#3497F9",
              boxShadow: "none",
              py: 1,
              px: 3,
              borderRadius: "8px",
              textTransform:"capitalize"
            }}
          >
            Print
          </Button>
          <Button
            variant="contained"
            sx={{
              paddingY: "10px",
              backgroundColor: "#3497F9",
              boxShadow: "none",
              py: 1,
              px: 3,
              borderRadius: "8px",
              textTransform:"capitalize"
            }}
          >
            Save
          </Button>
        </Stack>
        <Divider />
        <Grid container>
          <Grid
            item
            xs={8}
            sx={{
              padding: "10px",
              paddingRight: "30px",
              borderRight: "1px solid #000",
            }}
          >
            <Box>
              <Stack
                direction="row"
                sx={{ paddingTop: "30px" }}
                alignItems="center"
              >
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
                  {items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ paddingX: 1 }}>
                        <TextField
                          disabled={index > 0 && item.disabled}
                          variant="outlined"
                          fullWidth
                          placeholder="Item"
                          value={item.item}
                          size="small"
                          InputProps={{
                            style: {
                              borderRadius: "30px",
                              backgroundColor: "#F4F6F6",
                              paddingLeft: "10px",
                            },
                          }}
                          onChange={(e) =>
                            handleItemChange(index, "item", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell sx={{ paddingX: 1 }}>
                        <TextField
                          disabled={index > 0 && item.disabled}
                          variant="outlined"
                          fullWidth
                          placeholder="Cost"
                          value={item.cost}
                          size="small"
                          InputProps={{
                            style: {
                              borderRadius: "30px",
                              backgroundColor: "#F4F6F6",
                              paddingLeft: "10px",
                            },
                          }}
                          onChange={(e) =>
                            handleItemChange(index, "cost", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell sx={{ paddingX: 1 }}>
                        <TextField
                          disabled={index > 0 && item.disabled}
                          variant="outlined"
                          fullWidth
                          placeholder="Qty"
                          value={item.qty}
                          size="small"
                          InputProps={{
                            style: {
                              borderRadius: "30px",
                              backgroundColor: "#F4F6F6",
                              paddingLeft: "10px",
                            },
                          }}
                          onChange={(e) =>
                            handleItemChange(index, "qty", e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell sx={{ paddingX: 1 }}>
                        <Stack direction="row">
                          <TextField
                            disabled={index > 0 && item.disabled}
                            variant="outlined"
                            fullWidth
                            placeholder="Total"
                            value={item.total}
                            size="small"
                            InputProps={{
                              style: {
                                borderRadius: "30px",
                                backgroundColor: "#F4F6F6",
                                paddingLeft: "10px",
                              },
                            }}
                            onChange={(e) =>
                              handleItemChange(index, "total", e.target.value)
                            }
                          />
                          {index > 0 && ( // Render close icon for all items except the first one
                            <Button
                              onClick={() => {
                                const newItems = [...items];
                                newItems.splice(index, 1);
                                setItems(newItems);
                              }}
                              sx={{
                                color: "#000",
                                minWidth: "20px",
                                marginRight: "10px",
                              }}
                            >
                              <CloseIcon />
                            </Button>
                          )}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Stack direction="row" sx={{ borderBottom: "1px solid #ddd" }}>
                <Button
                  sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "15px",
                    color: "#3497F9",
                    textTransform:"capitalize",
                    borderRadius:"8px",
                  }}
                  startIcon={<AddIcon />}
                  onClick={addItem}
                >
                  <Typography>Add Item</Typography>
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Typography
              sx={{ marginTop: "20px", fontSize: "14px", fontWeight: "600" }}
            >
              Payment Summary
            </Typography>
            <Stack direction="row" sx={{ paddingY: "20px", paddingX: "20px" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "500" }}
              >
                Sub total
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginLeft: "auto", fontSize: "16px", fontWeight: "500" }}
              >
                ${subtotal}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ paddingY: "20px", paddingX: "20px" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "500" }}
              >
                Discount (20%)
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginLeft: "auto", fontSize: "16px", fontWeight: "500" }}
              >
                ${discount}
              </Typography>
            </Stack>
            <Stack direction="row" sx={{ paddingY: "20px", paddingX: "20px" }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "500" }}
              >
                Tax fee
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginLeft: "auto", fontSize: "16px", fontWeight: "500" }}
              >
                ${taxfee}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                paddingY: "20px",
                paddingX: "20px",
                backgroundColor: "#F8FAFC",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "700" }}
              >
                Grand Total
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginLeft: "auto", fontSize: "16px", fontWeight: "700" }}
              >
                ${total}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
