"use client";

import { Box, Button, Stack } from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SpeedIcon from "@mui/icons-material/Speed";
import DoctorIcon from "./DoctorIcon";
import { useRouter } from "next/navigation";

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
      <Button startIcon={<SpeedIcon />} onClick={handleDashboard}>Dashboard</Button>
      <Button
        startIcon={<SupervisorAccountIcon />}
        onClick={handlePatient}
      >
        Patients
      </Button>
      <Button startIcon={<DoctorIcon />} onClick={handleDoctor}>Doctors</Button>
      <Button startIcon={<ReceiptLongIcon />} onClick={handleInvoice}>Invoicing</Button>
      <Button startIcon={<ArchiveIcon />}>Inventory</Button>
      <Button startIcon={<SettingsIcon />}>Settings</Button>
      <Button startIcon={<LogoutIcon />} sx={{ marginTop: "auto" }}>
        Logout
      </Button>
    </Stack>
  );
}
