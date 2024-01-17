"use client";

import { Box, Button, Stack,styled } from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SpeedIcon from "@mui/icons-material/Speed";
import DoctorIcon from "./DoctorIcon";
import { useRouter } from "next/navigation";

const SidebarButton = styled(Button)({
  textTransform:"capitalize",
  "&:hover": {
    backgroundColor: "#efefef !important",
  },
});

export default function Home() {
  const router = useRouter();

  const handlePatient = () => (router.push("/patients"))
  const handleDashboard = () => (router.push("/"))
  const handleDoctor = () => (router.push("/doctors"))
  const handleInvoice = () => (router.push("/invoicing"))
  
  return (
    <Stack
      direction="column"
      gap={1}
      sx={{
        minHeight: "90vh",
        paddingY: "20px",
        alignItems: "flex-start",
        paddingX: "40px",
      }}
    >
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "30px",
          marginTop: "10px",
        }}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={125}
          height={37}
          marginLeft="auto"
          marginRight="auto"
        />
      </Box>
      <SidebarButton startIcon={<SpeedIcon />} onClick={handleDashboard}>Dashboard</SidebarButton>
      <SidebarButton
        startIcon={<SupervisorAccountIcon />}
        onClick={handlePatient}
      >
        Patients
      </SidebarButton>
      <SidebarButton startIcon={<DoctorIcon />} onClick={handleDoctor}>Doctors</SidebarButton>
      <SidebarButton startIcon={<ReceiptLongIcon />} onClick={handleInvoice}>Invoicing</SidebarButton>
      <SidebarButton startIcon={<ArchiveIcon />}>Inventory</SidebarButton>
      <SidebarButton startIcon={<SettingsIcon />}>Settings</SidebarButton>
      <SidebarButton startIcon={<LogoutIcon />} sx={{ marginTop: "auto" }}>
        Logout
      </SidebarButton>
    </Stack>
  );
}
