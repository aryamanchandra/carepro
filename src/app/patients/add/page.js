import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";

export default function Add() {
  return (
    <Box sx={{ backgroundColor: "#F1F8FF", padding: "20px" }}>
      <Stack direction="row" marginBottom="30px">
        <Typography variant="h6" color="primary.light">
          IPD Patient Details
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
        <Typography>Go Back to Patients</Typography>
      </Link>
      <Box sx={{backgroundColor:"#fff", borderRadius:"20px", padding:"20px"}}>
        <Stack direction="row" alignItems="center" sx={{marginBottom: "20px"}}>
          <Typography> PATIENT NO. 10214234534</Typography>
          <Button variant="contained" sx={{marginLeft:"auto"}}>Save</Button>
        </Stack>
        <Divider />
        
      </Box>
    </Box>
  );
}
