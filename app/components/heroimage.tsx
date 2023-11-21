"use client";

import Image from "next/image";
import { MoveTo } from "@/types";

const Heroimage = ({ moveTo }: MoveTo) => {
  const handleClick = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`relative bg-hero-mobile bg-center bg-cover md:bg-none overflow-hidden h-screen w-screen text-white`}>
      <video
        autoPlay
        muted
        loop
        className="absolute hidden md:flex brightness-75 inset-0 w-full h-full object-cover"
      >
        <source src={`https://res.cloudinary.com/dr0lbokc5/video/upload/v1695402106/video_hdhzxz.mp4`} type="video/mp4" />
        Video tidak didukung oleh peramban Anda.
      </video>
      <div className=" absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex flex-col md:flex-row gap-6 md:gap-2 cust-container">
        <div className="w-full md:w-3/5 flex justify-center items-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl  font-semibold leading-snug">
            When you need a hand, we’re here
          </h1>
        </div>
        <div className="w-full md:w-2/5 flex flex-col justify-center items-start gap-4">
          <p className="text-xl font-semibold text-white text-start whitespace-nowrap">
            Panggil Dokter ke Rumah
          </p>
          <div
            onClick={() => handleClick(moveTo.toService)}
            className="w-full lg:w-[80%] animate-bounce md:animate-none relative font-semibold bg-cust-pinkButton hover:bg-cust-pinkButton/75 p-6 cursor-pointer rounded-lg transition-all duration-300 group overflow-hidden"
          >
            <div className="w-full md:w-[120%] absolute top-1/2 -translate-y-1/2 md:left-4 left-1/2 -translate-x-1/2 md:-translate-x-1/4 md:group-hover:translate-x-0 flex flex-row justify-evenly md:justify-between items-center transition-all duration-300 ease-in-out">
              <Image
                src="/fi-br-arrow-right.svg"
                width={20}
                height={20}
                className="transform rotate-90 md:rotate-0 transition-all duration-300"
                alt="Home Infusion Logo"
              />
              <span className="text-white text-lg md:-translate-x-3 xl:-translate-x-10 xl:group-hover:translate-x-7 md:group-hover:-translate-x-3 transition-all duration-300">
                Selengkapnya
              </span>
              <Image
                src="/fi-br-arrow-right.svg"
                width={20}
                height={20}
                className="transform rotate-90 md:rotate-0 md:-translate-x-3 transition-all duration-300"
                alt="Home Infusion Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
