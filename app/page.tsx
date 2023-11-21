
"use client";

import Navbar from "./components/navbar";
import Heroimage from "./components/heroimage";
import About from "./components/about";
import Layanankami from "./components/layanankami";
import Testimoni from "./components/testimoni";
import React, { useEffect, useState, useRef } from "react";
import SideBarMenu from "./components/sideBarMenu";
import UnderConstruction from "./components/underConstruction";
import Footer from "./components/footer";

export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const toWelcoming = useRef(null);
  const toAbout = useRef(null);
  const toService = useRef(null);
  const toTestimony = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className="relative">
        <Navbar
          moveTo={{
            toWelcoming: toWelcoming,
            toAbout: toAbout,
            toService: toService,
            toTestimony: toTestimony,
          }}
          setOpenSideBar={setOpenSideBar}
          openSideBar={openSideBar}
        />
        <main className="overflow-hidden">
          <SideBarMenu
            moveTo={{
              toWelcoming: toWelcoming,
              toAbout: toAbout,
              toService: toService,
              toTestimony: toTestimony,
            }}
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
          />
          <div ref={toWelcoming}>
            <Heroimage
              moveTo={{
                toService: toService,
              }}
            />
          </div>
          <div ref={toAbout}>
            <About />
          </div>
          <div ref={toService}>
            <Layanankami />
          </div>
          <div ref={toTestimony}>
            <Testimoni />
          </div>
        </main>
      </div>
      <Footer />
      {/* <UnderConstruction /> */}
    </>
  );
}
