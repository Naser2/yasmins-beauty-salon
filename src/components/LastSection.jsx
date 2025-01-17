"use client";

import { useEffect } from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import Link from "next/link";
import clsx from "clsx";

const LastSection = () => {
  const handleClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      className="group bg-theme-2 lg:bg-black relative lg:mt-12 lg:mt-24 slideshow__slide slick-slide slick-current slick-active border-t border-[#03302c]"
      data-slick-index="0"
      aria-hidden="false"
      style={{
        width: "100%",
        position: "relative",
        left: "0px",
        top: "0px",
        opacity: 1,
      }}
    >
      <div className="slideshow__link flex">
        <img
          src={"yasmin_img_desktop.png"}
          className="h-full w-full max-[700px]:hidden"
          alt="Desktop Banner"
        />
        <img
          src={"/yasmin_img_mobile.png"}
          className="h-full w-full min-[700px]:hidden"
          alt="Mobile Banner"
        />
        <FadeInStagger key={"INTRO"}>
          <FadeIn>
            <div
              className="absolute inset-x-0 lg:inset-x-20 top-[48%] md:top-[45%] lg:top-40%] mx-6 rounded-md py-4 md:py-12 md:px-12 scontent-center !bg-[#ff149305] transition duration-150 transform home text-center wow fadeIn text-white max-w-7xl justify-center mx-auto rs-parallax-wrap min-[600px]:mt-[10%]"
              style={{
                visibility: "visible",
                animationName: "fadeIn",
              }}
            >
              <div
                className="rs-parallax-wrap mb-4 inset-x-0 xl:!pb-24"
                style={{
                  position: "absolute",
                  display: "block",
                  pointerEvents: "auto",
                  zIndex: 9,
                  visibility: "visible",
                  perspective: "601px",
                }}
              >
                <h2
                  className={clsx(
                    "animation !font-bold inline-flex text-[wheat] !text-[2.3em] lg:text-[wheat] md:!text-[5em] lg:!text-[4em] xl:!text-[6em] signature-font animated-logo pb-5"
                  )}
                >
                  YASMINS BEAUTY
                </h2>
              </div>

              <div className="justify-center lg:text-3xl lg:text-[wheat] max-[700px]:pt-[10%] pt-[12%] xl:pt-[11%]">
                <p
                  className={clsx(
                    "justify-center text-xl sm:text-[1.8em] transition duration-250 transform text-sm text-white !text-[#f8e8cd] !max-lg:hidden "
                  )}
                >
                  Our specialists at your service.
                </p>
              </div>
              <div>
                <div className="justify-center flex align-center pt-2 lg:pt-10 ease-in duration-300">
                  <button
                    className={clsx(
                      "hover:!text-[#f8e8cd] min-w-[264px] hover:rounded-xl !border-[wheat] ClassicButton_button__ETGhE transition group-hover:!text-[wheat] duration-150 transform btn text-white justify-center bg-[#03302c] !border-[wheat]] group-hover:!bg-black flex align-center border-2 max-w-2xl m-4 transition ease-in-out delay-250 group-hover:-translate-y-1 group-hover:scale-110 duration-360 max-h-[5rem]"
                    )}
                    onClick={() => handleClick("8622526325")}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </FadeInStagger>
      </div>

      <div className="px-6 pt-0 md:pt-0 sm:mx-0 sm:pt-5 md:px-12 border-b hover:border-teal-800 bg-[#272423]">
        <div
          className="mx-auto max-w-7xl p-0 md:px-4 lg:px-8 grid w-full grid-cols-2 md:grid-cols-3"
        >
          <ul className="max-w-4xl lg:max-w-none flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li>
              <span className="inline-block w-full py-2 px-3">
                <Link
                  href="/about"
                  className="-mb-1 product-details__product-title text-xl font-semibold !text-white"
                  itemProp="name"
                  style={{ textTransform: "none !important" }}
                >
                  Learn More
                </Link>
              </span>
            </li>
          </ul>
          <div className="hidden md:flex items-center justify-center gap-4 mb-4 pt-4">
            <a
              href="tel:8622526325"
              className="text-lg font-bold text-gray-100 transition-colors"
            >
              862-252-6325
            </a>
            <span className="text-gray-500">|</span>
            <a
              href="tel:9733953900"
              className="text-lg font-bold text-gray-100 transition-colors"
            >
              973-395-3900
            </a>
          </div>
          <div className="flex justify-end">
            <Link
              href="/about"
              data-tooltip-target="card-nav-tabs-example-copy-clipboard-tooltip"
              data-tooltip-placement="bottom"
              type="button"
              className="flex items-center px-3 py-2 text-xs font-medium text-gray-600 hover:text-blue-700"
            >
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 44 44"
                width="24"
                aria-hidden="true"
                style={{ color: "white" }}
                className="Navbar_chevronDown__BsZjb rotate-[-85deg]"
              >
                <path d="M11 9l11 11 11-11"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
