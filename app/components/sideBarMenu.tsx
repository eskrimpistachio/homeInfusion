import { NavbarProps } from "@/types";
import React, { useState } from "react";

const SideBarMenu = ({ moveTo, setOpenSideBar, openSideBar }: NavbarProps) => {
  const [isOpen1, setIsOpen1] = useState(true); // About
  const [isOpen2, setIsOpen2] = useState(false); // Services
  const [isOpen3, setIsOpen3] = useState(false); // Testimony

  const handleClick = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpenSideBar(false);
  };

  const handleClickReservasi = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=+6281299160261&text=Halo+Saya+Ingin+Bertanya+terkait+Home+Infusion&type=phone_number&app_absent=0`
      , "_blank");
    setOpenSideBar(false);
  }

  const OpenSideBarStyles = () => {
    if (openSideBar) {
      return 'translate-x-0';
    } else {
      return 'translate-x-full';
    }
  }

  return (
    <div
      className={`bg-cust-white md:hidden w-screen h-screen pt-36 px-8 fixed z-20 transition-all duration-300
        ${OpenSideBarStyles()}
      `}
    >
      <div className="flex flex-col gap-10 text-base font-semibold">
        <div
          onClick={() => {
            setIsOpen1(true);
            setIsOpen2(false);
            setIsOpen3(false);
            handleClick(moveTo.toAbout);
          }}
          className={`cursor-pointer hover:font-semibold text-cust-pinkTua
              ${isOpen1 ? "font-semibold" : "font-normal"}
            `}
        >
          Tentang Kami
        </div>
        <div
          onClick={() => {
            setIsOpen1(false);
            setIsOpen2(true);
            setIsOpen3(false);
            handleClick(moveTo.toService);
          }}
          className={`cursor-pointer hover:font-semibold text-cust-pinkTua
              ${isOpen2 ? "font-semibold" : "font-normal"}
            `}
        >
          Layanan Kami
        </div>
        <div
          onClick={() => {
            setIsOpen1(false);
            setIsOpen2(false);
            setIsOpen3(true);
            handleClick(moveTo.toTestimony);
          }}
          className={`cursor-pointer hover:font-semibold text-cust-pinkTua
              ${isOpen3 ? "font-semibold" : "font-normal"}
            `}
        >
          Testimoni
        </div>
      </div>
      <div 
        onClick={handleClickReservasi}
        className="mt-8 px-4 py-2 text-white text-center font-semibold bg-cust-pinkButton text-sm rounded-md cursor-pointer hover:bg-cust-pinkButton/80 transition-all duration-200">
        Reservasi
      </div>
    </div>
  );
};

export default SideBarMenu;
