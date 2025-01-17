"use client"

import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";


const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 z-40 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out"
        >
          <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
