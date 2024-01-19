"use client"
import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#7F8F98", //light gray
      light: "#666666", //accent
    },
    secondary: {
      main: "#0F0F0F", //dark
      light: "#F2F9FF", //secondary accent
      dark: "#41557A", //tertiary accent
    },
    info: {
      main: "#666666", //normal text
      light: "#B0B0B0", //light text
    },
    error: {
      main: "#BB0A21", //red
    },
    success: {
      main: "#007D55", //green
    },
  },
  typography: { fontFamily: `Poppins` },
});

export {theme} 