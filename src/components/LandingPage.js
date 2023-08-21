"use client";
import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import BannerCard from "./BannerCard";
import ottomanchairbanner from "../../public/assets/banner2.webp";
import Image from "next/image";
import AllProducts from "./Products/AllProducts";
import NewArrivals from "./Products/NewArrivals";
import BestSellers from "./Products/BestSellers";

export default function LandingPage() {
  const [productsState, setProductState] = useState("All Products");
  let contents;
  if (productsState === "All Products") {
    contents = <AllProducts />;
  }
  if (productsState === "New Arrivals") {
    contents = <NewArrivals />;
  }
  if (productsState === "Best Sellers") {
    contents = <BestSellers />;
  }
  return (
    <>
      {/* First Section */}
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
          <h1 className="text-primary text-4xl lg:text-6xl pt-4">
            Art with an attitude
          </h1>
          <button className="bg-secondary px-3 py-2 rounded-full hover:bg-primary mt-7 font-bold">
            Discover Now
          </button>
        </div>
      </section>
      {/* second section */}
      <section className="w-[80%] relative m-auto flex flex-col lg:flex-row gap-5 my-10">
        <div className="flex-[0.5] gap-12 flex flex-col">
          <div className="h-[570px] ">
            <div className="mt-5 w-80 md:ml-20">
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
      {/* thired section: products */}
      {/* <section className="common-width my-20">
        <h1 className="text-center text-5xl">Our Products</h1>
        <div>
          <div className="flex justify-center items-center gap-5 my-10 text-sm md:text-2xl">
            <option
              className={`cursor-pointer ${
                productsState === "All Products" && "text-primary"
              }`}
              onClick={(e) => setProductState(e.target.value)}
            >
              All Products
            </option>
            <option
              className={`cursor-pointer ${
                productsState === "Best Sellers" && "text-primary"
              }`}
              onClick={(e) => setProductState(e.target.value)}
            >
              Best Sellers
            </option>
            <option
              className={`cursor-pointer ${
                productsState === "New Arrivals" && "text-primary"
              }`}
              onClick={(e) => setProductState(e.target.value)}
            >
              New Arrivals
            </option>
          </div>
          {contents}
        </div>
      </section> */}
    </>
  );
}
