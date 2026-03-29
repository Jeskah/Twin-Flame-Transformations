import "./globals.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
// import { Dawning_of_a_New_Day } from "@next/font/google";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        < Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
