"use client"
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip
);

export default function TopList() {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };
  return (
    <Box sx={{ paddingX: "20px", paddingY: "10px" }}>
      <Stack direction="row" alignItems="flex-end" sx={{marginBottom:"20px"}}>
        <Typography
          variant="subtitle1"
          sx={{ margin: "0px", paddingTop: "0px" }}
        >
          Top Medicines Sold
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

      <div>
        <Doughnut
          data={{
            labels: [
              "2023-01",
              "2023-02",
              "2023-03",
              "2023-04",
              "2023-05",
              "2023-06",
              "2023-07",
            ],
            datasets: [
              {
                data: [100, 120, 115, 134, 168, 132, 200],
                backgroundColor: "purple",
              },
            ],
          }}
        />
      </div>
    </Box>
  );
}
