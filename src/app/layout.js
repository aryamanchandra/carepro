"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Grid, ThemeProvider } from "@mui/material";
import { theme } from "../../style";
import StickyBox from "react-sticky-box";
import Sidebar from "./components/Sidebar"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const SIDEBAR_WIDTH = "12vh";
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Grid container sx={{ height: "100%" }}>
            <Grid
              item
              sx={{
                borderRight: "2px solid #E8E8E8",
                width: "12vh",
                borderColor: "primary",
              }}
            >
              <StickyBox>
                <Sidebar />
              </StickyBox>
            </Grid>
            <Grid item sx={{ width: `calc(100% - ${SIDEBAR_WIDTH})` }}>
              {children}
            </Grid>
          </Grid>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
