import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import ScrollToTop from "./components/shared/scrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kivara - Tienda de celulares",
  description: "Asesoramiento y venta de celulares para individuos o empresas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
