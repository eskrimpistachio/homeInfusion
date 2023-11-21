'use client'

import { NavbarProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import NavbarMobile from "./navbarMobile";

const Navbar = ({ moveTo, setOpenSideBar, openSideBar }: NavbarProps) => {

  const [isOpen1, setIsOpen1] = useState(true); // About
  const [isOpen2, setIsOpen2] = useState(false); // Services
  const [isOpen3, setIsOpen3] = useState(false); // Testimony

  const handleClick = (ref: any) => {
    ref.current.scrollIntoView({ 
      behavior: "smooth",
     });
    setOpenSideBar(false)
  };

  const handleClickReservasi = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=+6281299160261&text=Halo+Saya+Ingin+Bertanya+terkait+Home+Infusion&type=phone_number&app_absent=0`
      , "_blank");
  }

  return (
    <nav className="md:backdrop-blur-sm text-white md:bg-black/40 md:px-3 py-1 md:py-4 rounded-xl fixed -translate-x-1/2 left-1/2 top-5 z-50 cust-container">
      <div className="hidden md:flex flex-row justify-between items-center">
        <div 
          onClick={() => {
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(false);
            handleClick(moveTo.toWelcoming)
          }}
          className="flex flex-row gap-3 cursor-pointer">
          <Image
            src={`https://res.cloudinary.com/dr0lbokc5/image/upload/v1695401063/home-infusion-logo_cbynjb.png`}
            width={50}
            height={50}
            alt="Home Infusion Logo"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={`https://res.cloudinary.com/dr0lbokc5/image/upload/v1695401546/HomeInfusionText_dmtva4.png`}
            width={160}
            height={40}
            alt="Home Infusion Logo"
            style={{ objectFit: "contain" }}
            className="hidden lg:flex"
          />
        </div>
        <div className="flex flex-row gap-10 text-base font-semibold">
          <div 
            onClick={() => {
              setIsOpen1(true);
              setIsOpen2(false);
              setIsOpen3(false);
              handleClick(moveTo.toAbout);
            }}
            className={`cursor-pointer hover:font-semibold
              ${isOpen1 ? 'font-semibold' : 'font-normal'}
            `}>
            Tentang Kami
          </div>
          <div 
            onClick={() => {
              setIsOpen1(false);
              setIsOpen2(true);
              setIsOpen3(false);
              handleClick(moveTo.toService);
            }}
            className={`cursor-pointer hover:font-semibold
              ${isOpen2 ? 'font-semibold' : 'font-normal'}
            `}>
            Layanan Kami
          </div>
          <div 
            onClick={() => {
              setIsOpen1(false);
              setIsOpen2(false);
              setIsOpen3(true);
              handleClick(moveTo.toTestimony);
            }}
            className={`cursor-pointer hover:font-semibold
              ${isOpen3 ? 'font-semibold' : 'font-normal'}
            `}>
            Testimoni
          </div>
        </div>
        <div 
          onClick={handleClickReservasi}
          className="px-4 py-2 font-semibold bg-cust-pinkButton text-sm rounded-md cursor-pointer hover:bg-cust-pinkButton/80 transition-all duration-200">
          Reservasi
        </div>
      </div>
      <NavbarMobile moveTo={moveTo} setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
    </nav>
  );
};

export default Navbar;
