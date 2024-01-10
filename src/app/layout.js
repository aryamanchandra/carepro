import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../style";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarePro",
  description: "An app to take care of you",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
