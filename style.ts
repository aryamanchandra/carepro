"use client"
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E8E8E8", //light gray
      light: "#183153", //accent
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
});

export {theme} 