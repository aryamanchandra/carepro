"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#F1F8FF" }}>
      <Stack direction="row">
        <Typography variant="h6" color="primary.light">Dashboard</Typography>
        <Button startIcon={<NotificationsIcon />} sx={{marginLeft:"auto"}} />
        <Stack direction="column">
        <Typography variant="subtitle2">Jonitha Cathrine</Typography>
        <Typography variant="body2" color="primary">Admin</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
