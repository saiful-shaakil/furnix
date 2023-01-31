import "../styles/globals.css";
import { Pacifico, Rubik } from "@next/font/google";
import Footer from "../src/components/Footer";
// import Navbarr from "../src/components/Navbarr";

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

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${pacifico.variable} ${rubik.variable} font-rubik`}>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
