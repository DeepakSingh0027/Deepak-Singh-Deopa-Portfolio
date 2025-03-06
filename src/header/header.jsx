import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun } from "lucide-react";
import ShinyText from "../animations/ShinyText";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 border-2 bg-[#000000]/70 rounded-3xl flex items-center p-2 transition-all duration-300 ${
        isScrolled ? "w-[300px] px-4" : "w-[calc(100vw-300px)] px-10"
      }`}
    >
      {/* "DD" on the left */}
      <Link
        className={`cursor-pointer text-[#e6e6e6] font-bold text-lg transition-all duration-300 ${
          isScrolled ? "ml-4" : "ml-auto"
        } hover:font-extrabold hover:text-[#a7ff74]`}
      >
        DD
      </Link>

      {/* Center Links */}
      <div className="flex-grow flex justify-center space-x-6 transition-all duration-300">
        <Link className="text-[#717171]">
          <ShinyText
            text="Home"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </Link>
        <Link className="text-[#717171]">
          <ShinyText
            text="About"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </Link>
        <Link className="text-[#717171]">
          <ShinyText
            text="Projects"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </Link>
        <Link className="text-[#717171]">
          <ShinyText
            text="Contact"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </Link>
      </div>

      {/* Sunlight Icon on the Right */}
      <Sun
        size={22}
        className={`cursor-pointer text-[#e6e6e6] transition-all duration-300 ${
          isScrolled ? "mr-4" : "mr-auto"
        } hover:text-[#a7ff74]`}
      />
    </div>
  );
};

export default Header;
