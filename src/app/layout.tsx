import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../context/ThemeContext";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Light Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ram Kancharla",
  description: "Portfolo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
