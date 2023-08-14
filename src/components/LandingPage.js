"use client";
import React from "react";
import Navbar from "./Shared/Navbar/Navbar";

export default function LandingPage() {
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
    </>
  );
}
