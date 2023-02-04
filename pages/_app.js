import "../styles/globals.css";
import { Pacifico, Rubik } from "@next/font/google";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { wrapper } from "../src/redux/app/store";

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

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();
  const { pathname } = router;
  if (pathname == "/") {
    return (
      <Provider store={store}>
        <main className={`${pacifico.variable} ${rubik.variable} font-rubik`}>
          <Component {...pageProps} />
          <Footer />
        </main>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <main className={`${pacifico.variable} ${rubik.variable} font-rubik`}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </main>
      </Provider>
    );
  }
}

export default MyApp;
