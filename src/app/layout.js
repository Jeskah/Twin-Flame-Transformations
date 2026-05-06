import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import BackButton from '../components/BackButton'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
        {children}
        </main>
        <BackButton />
        <Footer/>
        <ContactButton />
      </body>
    </html>
  );
}
