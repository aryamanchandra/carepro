"use client";
import { Poppins } from "next/font/google";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { theme } from "../../style";
import StickyBox from "react-sticky-box";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const SIDEBAR_WIDTH = "30vh";
  return (
    <html lang="en">
      {/* <body > */}
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <Grid container sx={{ height: "100%" }}>
            <Grid
              item
              sx={{
                width: "30vh",
                minHeight: "100vh",
              }}
            >
              <StickyBox>
                <Sidebar />
              </StickyBox>
            </Grid>
            <Grid
              item
              sx={{
                width: `calc(100% - ${SIDEBAR_WIDTH})`,
                backgroundColor: "#F1F8FF",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#F1F8FF",
                  height: "100%",
                  minHeight: "90vh",
                  padding: "30px",
                }}
              >
                {children}
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </body>
    </html>
  );
}
