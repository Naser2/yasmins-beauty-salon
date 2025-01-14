"use client";

import clsx from "clsx";
import { useEffect, useState } from "react"

const { FadeInStagger, FadeIn } = require("./FadeIn")
export default function Intro() {
  const [logoColorChange, setLogoColorChange] = useState("text-[wheat]");
  const [bookNowColorChange, setBookNowColorChange] = useState("bg-[transparent] text-[wheat]");
  const [tagColorChange, setTagNowColorChange] = useState("bg-[transparent]");
  const [logoPositionChange, setLogoPositionChange] = useState("mt-[30%]");

  useEffect(() => {
    setTimeout(() => {
      setLogoColorChange(
        "transition duration-150 transform text-[wheat] text-5xl md:text-[6em] lg:text-[7em] xl:text-[9em] font-bold signature-font"
      );
    }, 2030);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLogoPositionChange("md:top-[30%] left-0 px-4 text-center");
    }, 2900);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBookNowColorChange("bg-black text-[#f8e8cd] border-[wheat] rounded-xl");
    }, 3100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTagNowColorChange("text-[wheat] text-lg");
    }, 2400);
  }, []);

  return (
    <div className="absolute inset-x-0 top-[6rem] sm:top-[3%] text-center sm:top-[37%] lg:top-[20%]">
      <FadeInStagger>
        <FadeIn>
          <div className={`${logoPositionChange} max-w-[90vw] section-header mx-auto mt-[30%] lg:mt-[20%]`}>
            <div className="text-white space-y-3  md:space-y-12">
              <h2 className={clsx(logoColorChange, "animated-logo")}>
                YASMIN'S <br className="hidden xl:block" /> BEAUTY
              </h2>
              <h2 className={clsx(logoColorChange, "mt-4")}>SALON</h2>
            </div>
            <p className={clsx(tagColorChange, "mt-3 sm:mt-4  sm:hidden text-sm")}>
              NJ hair salon.
            </p>
            <div className="hidden sm:block lg:text-3xl text-[wheat] mt-10">
              <p>
                New Jersey hair salon for all your beauty needs.{" "}
                <span className="hidden lg:inline">
                  Where mindfulness and wellness meet consciousness. Glow inside
                  and out with us!
                </span>
              </p>
            </div>
            <div className="mt-2 sm:mt-5  flex justify-center">
              <a
                className={clsx(
                  bookNowColorChange,
                  "px-6 py-3 transition transform hover:-translate-y-1 hover:scale-110 hover:!text-[#f8e8cd] rounded-xl !border-[wheat] px-6 py-4  transition group-hover:!text-[wheat]  duration-150 transform btn text-white justify-center bg-black hover:!border-[wheat] group-hover:!bg-black flex align-center border-2  max-w-2xl m-4 transition ease-in-out delay-250 group-hover:-translate-y-1 group-hover:scale-110 duration-360"
                )}
                href="#/services"
              >
                Book Now
              </a>
            </div>
          </div>
        </FadeIn>
      </FadeInStagger>
    </div>
  );
}

  

