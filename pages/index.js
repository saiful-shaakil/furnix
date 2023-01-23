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
      <Navbar />
    </div>
  );
}

export default Home;
