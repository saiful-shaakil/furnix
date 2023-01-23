import "../styles/globals.css";
import { Pacifico, Rubik } from "@next/font/google";

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
    <main className={`${pacifico.variable} ${rubik.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
