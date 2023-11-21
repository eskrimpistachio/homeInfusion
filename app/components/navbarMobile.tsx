import { NavbarProps } from "@/types";
import Image from "next/image";

const NavbarMobile = ({ moveTo, setOpenSideBar, openSideBar }: NavbarProps) => {
  
  const handleClick = (ref: any) => {
    ref.current.scrollIntoView({ 
      behavior: "smooth"
     });
    setOpenSideBar(false)
  };

  const openMenu = () => {
    setOpenSideBar((prev: boolean) => !prev);
  };

  const OpenSideBarStyles = (position : string) => {
    if (openSideBar) {
      switch (position) {
        case "top":
          return 'p-0.5 w-full rounded-sm bg-white transform transition-all duration-300 rotate-45 translate-y-full';
        case "middle":
          return 'hidden';
        case "bottom":
          return 'p-0.5 w-full rounded-sm bg-white transition-all duration-300 -rotate-45 -translate-y-full';
        default:
          return "";
      }
    } else {
      switch (position) {
        case "top":
          return 'p-0.5 w-full rounded-sm bg-white transform translate-y-0 transition-all duration-300';
        case "middle":
          return 'p-0.5 w-full rounded-sm bg-white translate-x-0';
        case "bottom":
          return 'p-0.5 w-full rounded-sm bg-white translate-y-0 transition-all duration-300';
        default:
          return "";
      }
    }
  }

  return (
    <div className="w-full md:hidden flex flex-row justify-between items-center text-white">
      <div
        onClick={() => {
          handleClick(moveTo.toWelcoming);
        }}
        className="flex flex-row items-center gap-3 cursor-pointer"
      >
        <Image
          src={`https://res.cloudinary.com/dr0lbokc5/image/upload/v1695401063/home-infusion-logo_cbynjb.png`}
          width={50}
          height={50}
          alt="Home Infusion Logo"
          style={{ objectFit: "contain" }}
        />
      </div>
      <Image
        src={`https://res.cloudinary.com/dr0lbokc5/image/upload/v1695401546/HomeInfusionText_dmtva4.png`}
        width={160}
        height={40}
        alt="Home Infusion Logo"
        style={{ objectFit: "contain" }}
      />
      <div
        onClick={() => openMenu()}
        className="p-2 bg-cust-pinkMuda rounded-md cursor-pointer"
      >
        <div className="flex flex-col w-6 justify-center items-center gap-y-1">
          <span className={OpenSideBarStyles("top")}></span>
          <span className={OpenSideBarStyles("middle")}></span>
          <span className={OpenSideBarStyles("bottom")}></span>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
