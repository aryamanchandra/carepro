"use client";

import { Box, Button, Stack, styled } from "@mui/material";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SpeedIcon from "@mui/icons-material/Speed";
import DoctorIcon from "./DoctorIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SidebarButton = styled(Button)({
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#efefef !important",
  },
});

export default function Home() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (targetRoute) => {
    router.push(targetRoute);
    setActiveButton(targetRoute);
  };

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
      <SidebarButton
        startIcon={<SpeedIcon />}
        onClick={() => handleButtonClick("/")}
        sx={{
          color: activeButton === "/" ? "#3497F9" : "efefef",
        }}
      >
        Dashboard
      </SidebarButton>
      <SidebarButton
        startIcon={<SupervisorAccountIcon />}
        onClick={() => handleButtonClick("/patients")}
        sx={{
          color:
            activeButton === "/patients" ? "#3497F9" : "efefef",
        }}
      >
        Patients
      </SidebarButton>
      <SidebarButton
        startIcon={<DoctorIcon />}
        onClick={() => handleButtonClick("/doctors")}
        sx={{
          color:
            activeButton === "/doctors" ? "#3497F9" : "efefef",
        }}
      >
        Doctors
      </SidebarButton>
      <SidebarButton
        startIcon={<ReceiptLongIcon />}
        onClick={() => handleButtonClick("/invoicing")}
        sx={{
          color:
            activeButton === "/invoicing" ? "#3497F9" : "efefef",
        }}
      >
        Invoicing
      </SidebarButton>
      <SidebarButton
        startIcon={<ArchiveIcon />}
        onClick={() => handleButtonClick("/inventory")}
        sx={{
          color:
            activeButton === "/inventory" ? "#3497F9" : "efefef",
        }}
      >
        Inventory
      </SidebarButton>
      <SidebarButton startIcon={<SettingsIcon />}>Settings</SidebarButton>
      <SidebarButton
        startIcon={<LogoutIcon />}
        sx={{
          marginTop: "auto",
        }}
      >
        Logout
      </SidebarButton>
    </Stack>
  );
}
