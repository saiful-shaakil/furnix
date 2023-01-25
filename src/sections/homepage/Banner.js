function Banner() {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <h1 className="text-primary/50 text-2xl">WELCOME TO FURNIX</h1>
      <h1 className="text-primary text-6xl pt-4">Art with an attitude</h1>
      <button className="bg-secondary px-3 py-2 rounded-full hover:bg-primary mt-7 font-bold">
        Discover Now
      </button>
    </div>
  );
}

export default Banner;
