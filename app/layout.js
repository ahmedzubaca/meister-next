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
  title: { 
    default: "Meister d.o.o",
    template: "%s - Meister d.o.o"
  },
  description: "Meister d.o.o. se ističe svojom predanošću, brzom i kvalitetnom izgradnjom, visokim stepenom brige o zaposlenim kao i društvenom odgovornošću."
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

