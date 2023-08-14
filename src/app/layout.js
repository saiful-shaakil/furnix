"use client";
import { usePathname } from "next/navigation";
import "../styles/globals.css";
import { Pacifico, Rubik } from "next/font/google";
import Navbar from "@/components/Shared/Navbar/Navbar";
import AuthProvider from "@/utils/authProvider/AuthProvider";
import StoreProvider from "@/utils/storeProvider/StoreProver";
import Footer from "@/components/Shared/Footer";

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: ["400"],
});
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400"],
});

export const metadata = {
  title: "Furnix",
  description: "An e-commerce site to buy your desired furniture.",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${pacifico.variable} ${rubik.variable}`}>
          {pathname === "/" ? (
            <>
              <StoreProvider>
                <main>{children}</main>
                <Footer />
              </StoreProvider>
            </>
          ) : (
            <>
              <StoreProvider>
                <Navbar />
                <main>{children}</main>
                <Footer />
              </StoreProvider>
            </>
          )}
        </body>
      </html>
    </AuthProvider>
  );
}
