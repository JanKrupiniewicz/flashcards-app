import type { Metadata } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import Box from "@mui/material/Box";
import SideNavbar from "@/components/ui/side-navbar";

export const metadata: Metadata = {
  title: "next-flashcards",
  description: "Your new favorite flashcard app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: "flex" }}>
          <SideNavbar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
