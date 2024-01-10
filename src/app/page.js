"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Activity from "./components/Activity";
import TopList from "./components/TopList";
import Appointment from "./components/Appointment";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row">
        <Typography variant="h6" color="primary.light">
          Dashboard
        </Typography>
        <Button startIcon={<NotificationsIcon />} sx={{ marginLeft: "auto" }} />
        <Stack direction="column">
          <Typography variant="subtitle2">Jonitha Cathrine</Typography>
          <Typography variant="body2" color="primary">
            Admin
          </Typography>
        </Stack>
      </Stack>
      <Grid>
        <Grid item sx={{ width: "50%" }}>
          <Activity />
          <TopList />
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
            backgroundColor: "#fff",
            paddingY: "10px",
            paddingX: "20px",
            borderRadius:"10px",
          }}
        >
          <Appointment />
        </Grid>
      </Grid>
    </Box>
  );
}
