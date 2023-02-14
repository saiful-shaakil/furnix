import "../styles/globals.css";
import { Pacifico, Rubik } from "@next/font/google";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { wrapper } from "../src/redux/app/store";
import { SessionProvider } from "next-auth/react";

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
// Component, pageProps: { session, ...pageProps }
function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const router = useRouter();
  const { pathname } = router;
  if (pathname == "/") {
    return (
      <Provider store={store}>
        <SessionProvider session={rest.session}>
          <main className={`${pacifico.variable} ${rubik.variable} font-rubik`}>
            <Component {...pageProps} />
            <Footer />
          </main>
        </SessionProvider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <SessionProvider session={rest.session}>
          <main className={`${pacifico.variable} ${rubik.variable} font-rubik`}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </main>
        </SessionProvider>
      </Provider>
    );
  }
}

export default MyApp;
