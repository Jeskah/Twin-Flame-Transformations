import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="fixed z-10 flex top-200" >
      <ContactButton />
      </div>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
