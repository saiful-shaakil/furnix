import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import Banner from "../src/sections/homepage/Banner";
import Slider from "../src/sections/homepage/slider";
import mattress from "../public/assets/mattres.webp";

function Home() {
  return (
    <div>
      <Head>
        <title>Home | Furnix</title>
        <meta property="description" content="Homepage" />
      </Head>
      {/* First section of home page */}
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/R6dhPJh/furnix-banner.webp)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="h-[100vh]"
      >
        <Navbar />
        <Banner />
      </div>
      {/* second section: variable width slick slider */}
      <Slider />
    </div>
  );
}

export default Home;
