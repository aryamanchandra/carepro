"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Activity from "./components/Activity";
import TopList from "./components/TopList";
import Appointment from "./components/Appointment";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row" marginBottom="30px">
        <Typography color="primary.light" sx={{fontSize:"20px", fontWeight:"500"}}>
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
      <Grid container>
        <Grid item xs={4}>
          <Box
            sx={{
              backgroundColor: "#fff",
              paddingY: "10px",
              paddingX: "20px",
              borderRadius: "10px",
              marginRight: "40px",
            }}
          >
            <Activity />
          </Box>
          <Box
            sx={{
              backgroundColor: "#fff",
              paddingY: "10px",
              paddingX: "20px",
              borderRadius: "10px",
              marginRight: "40px",
              marginTop:"40px",
            }}
          >
            <TopList />
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            backgroundColor: "#fff",
            paddingY: "10px",
            paddingX: "20px",
            borderRadius: "10px",
          }}
        >
          <Appointment />
        </Grid>
      </Grid>
    </Box>
  );
}
