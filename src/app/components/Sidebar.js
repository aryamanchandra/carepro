"use client";

import { Box, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack direction="column" sx={{height:"100%", minHeight:"100vh", paddingY:"20px"}}>
      <Button sx={{textAlign:"left"}}>Dashboard</Button>
      <Button>Patients</Button>
      <Button>Doctors</Button>
      <Button>Invoicing</Button>
      <Button>Inventory</Button>
      <Button>Settings</Button>
      <Button sx={{ marginTop: "auto" }}>Logout</Button>
    </Stack>
  );
}
