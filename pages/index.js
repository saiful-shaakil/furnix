import Head from "next/head";
import Image from "next/image";
import Navbar from "../src/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import chair from "../public/assets/chair.webp";
import table from "../public/assets/table.jpg";
import tvstand from "../public/assets/tv stand.webp";
import shelf from "../public/assets/self.webp";
import dresser from "../public/assets/dresser.webp";
import sofa from "../public/assets/sofa.webp";
import mattress from "../public/assets/mattres.webp";

function Home() {
  return (
    <div>
      <Head>
        <title>Home | Furnix</title>
        <meta property="description" content="Homepage" />
      </Head>
      {/* First section of home page */}
      <section
        style={{
          backgroundImage: `url(https://i.ibb.co/R6dhPJh/furnix-banner.webp)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        className="h-[100vh]"
      >
        {/* Navbar */}
        <Navbar />
        {/* Banner Text */}
        <div className="flex flex-col justify-center items-center pt-5">
          <h1 className="text-primary/50 text-2xl">WELCOME TO FURNIX</h1>
          <h1 className="text-primary text-6xl pt-4">Art with an attitude</h1>
          <button className="bg-secondary px-3 py-2 rounded-full hover:bg-primary mt-7 font-bold">
            Discover Now
          </button>
        </div>
      </section>
      {/* second section: slider */}
      <section className="bg-white w-[90%] m-auto h-[500px] flex items-center justify-center">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            320: {
              width: 320,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          navigation
          autoHeight={false}
        >
          <SwiperSlide className="w-60 items-center flex flex-col">
            <Image
              className="rounded-full"
              height={200}
              width={200}
              src={mattress}
              alt="mattres"
            />
            <h1 className="mt-5 font-bold text-xl">Mattresses</h1>
          </SwiperSlide>
          <SwiperSlide className="w-60 items-center flex flex-col">
            <Image
              className="rounded-full"
              height={200}
              width={200}
              src={chair}
              alt="chair"
            />
            <h1 className="mt-5 font-bold text-xl">Chair</h1>
          </SwiperSlide>
          <SwiperSlide className="w-60 items-center flex flex-col">
            <Image
              className="rounded-full"
              height={200}
              width={200}
              src={table}
              alt="table"
            />
            <h1 className="mt-5 font-bold text-xl">Table</h1>
          </SwiperSlide>
          <SwiperSlide className="w-60 items-center flex flex-col">
            <Image
              className="rounded-full"
              height={200}
              width={200}
              src={tvstand}
              alt="tvstand"
            />
            <h1 className="mt-5 font-bold text-xl">TV Stand</h1>
          </SwiperSlide>
          <SwiperSlide className="w-60 items-center flex flex-col">
            <Image
              className="rounded-full"
              height={200}
              width={200}
              src={shelf}
              alt="shelf"
            />
            <h1 className="mt-5 font-bold text-xl">Shelf</h1>
          </SwiperSlide>
          <SwiperSlide className="w-60 items-center flex flex-col">
            <Image
              className="rounded-full"
              height={200}
              width={200}
              src={dresser}
              alt="dresser"
            />
            <h1 className="mt-5 font-bold text-xl">Dresser</h1>
          </SwiperSlide>
          <SwiperSlide className="w-60 items-center flex flex-col">
            <Image
              className="rounded-full"
              height={200}
              width={200}
              src={sofa}
              alt="sofa"
            />
            <h1 className="mt-5 font-bold text-xl">Sofa</h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Home;
