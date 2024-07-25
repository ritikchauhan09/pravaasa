import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PRAVAASA BLISS",
  description: "Discover unforgettable travel experiences with PRAVAASA BLISS. Explore top destinations, book tours and activities, and find travel tips to make your journey extraordinary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
