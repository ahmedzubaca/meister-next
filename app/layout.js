import Navbar from "@/components/navbar/navbarComponents/Navbar";
import Footer from "@/components/footer/Footer";
import { MenuProvider } from "@/lib/context/MenuContext";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Meister d.o.o",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>        
        <MenuProvider >          
          <Navbar />
          {children}
        </MenuProvider>        
        <Footer />
      </body>
    </html>
  );
}
