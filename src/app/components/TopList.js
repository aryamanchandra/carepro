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

export default function TopList() {
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
      <PieChart
        series={[
          {
            data: [{ value: 10 }, { value: 15 }, { value: 20 }],
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 150,
          },
        ]}
      />
    </Box>
  );
}
