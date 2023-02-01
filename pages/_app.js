import "../styles/globals.css";
import { Pacifico, Rubik } from "@next/font/google";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { pathname } = router;
  if (pathname == "/") {
    return (
      <main className={`${pacifico.variable} ${rubik.variable} font-rubik`}>
        <Component {...pageProps} />
        <Footer />
      </main>
    );
  } else {
    return (
      <main className={`${pacifico.variable} ${rubik.variable} font-rubik`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    );
  }
}

export default MyApp;
