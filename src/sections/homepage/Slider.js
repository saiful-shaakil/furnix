import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";
import mattress from "../../../public/assets/mattres.webp";
import chair from "../../../public/assets/chair.webp";
import table from "../../../public/assets/table.jpg";
import tvstand from "../../../public/assets/tv stand.webp";
import shelf from "../../../public/assets/self.webp";
import dresser from "../../../public/assets/dresser.webp";
import sofa from "../../../public/assets/sofa.webp";

function Slider() {
  return (
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
  );
}

export default Slider;
