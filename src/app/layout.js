import "../styles/globals.css";
import { Pacifico, Rubik } from "next/font/google";

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
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${rubik.variable}`}>
        {children}
      </body>
    </html>
  );
}
