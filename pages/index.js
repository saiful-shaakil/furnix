import Head from "next/head";
import Navbar from "../src/components/Navbar";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/R6dhPJh/furnix-banner.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      className="h-[100vh]"
    >
      <Head>
        <title>Home | Furnix</title>
        <meta property="description" content="Homepage" />
      </Head>
      <Navbar />

      <div className="flex flex-col justify-center items-center pt-5">
        <h1 className="text-primary/50 text-2xl">WELCOME TO FURNIX</h1>
        <h1 className="text-primary text-6xl pt-4">Art with an attitude</h1>
        <button className="bg-secondary px-3 py-2 rounded-full hover:bg-primary mt-7 font-bold">
          Discover Now
        </button>
      </div>
    </div>
  );
}

export default Home;
