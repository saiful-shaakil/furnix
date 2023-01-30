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
import chair from "../src/assets/chair.webp";
import table from "../src/assets/table.jpg";
import tvstand from "../src/assets/tv stand.webp";
import shelf from "../src/assets/self.webp";
import dresser from "../src/assets/dresser.webp";
import sofa from "../src/assets/sofa.webp";
import mattress from "../src/assets/mattres.webp";
import ottomanchairbanner from "../src/assets/banner2.webp";
import BannerCard from "../src/components/BannerCard";
import Products from "../src/sections/OurProducts/products";

function Home() {
  return (
    <>
      <Head>
        <title>Home | Furnix</title>
        <meta property="description" content="Homepage" />
      </Head>
      <main>
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
        {/* third section */}
        <section className="w-[80%] relative m-auto flex flex-col lg:flex-row gap-5 my-10">
          <div className="flex-[0.5] gap-12 flex flex-col">
            <div className="h-[570px] ">
              <div className="mt-5 w-80 ml-20">
                <h1 className="text-5xl text-primary mb-10">
                  Furnishing <br /> Your Dreams
                </h1>
                <p>
                  We’re here to decorate your dream furnitures. And We’ve got
                  everything to help you create a living room that’s ready for
                  entertaining.
                </p>
              </div>
              <Image
                className="lg:ml-32 w-auto"
                src={ottomanchairbanner}
                height={400}
                width={400}
                alt="otoman chair"
              />
            </div>
            <BannerCard
              title="Bathroom"
              image="https://i.ibb.co/92Fjrk3/bathroomfittings.webp"
              type="a"
            />
          </div>
          <div className="flex-[0.5] gap-12 flex flex-col">
            <BannerCard
              title="Home Decor"
              image="https://i.ibb.co/PCHHxQf/homedecor.webp"
              type="a"
            />

            <BannerCard
              title="Dining Chairs"
              image="https://i.ibb.co/fxmf4k1/dinningchair.webp"
              type="b"
            />
          </div>
        </section>
        {/* fourth section: products */}
        <section className="common-width my-20">
          <h1 className="text-center text-5xl">Our Products</h1>
          <Products />
        </section>
      </main>
    </>
  );
}

export default Home;
