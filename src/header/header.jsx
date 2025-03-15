import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Star } from "lucide-react";
import ShinyText from "../animations/ShinyText";
import { ThemeContext } from "../Context/themeContext";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme, position } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    console.log(position);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ amount: 0.5 }}
      className={` fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-lg ${
        theme === "light" ? "bg-[#f5fffaea]/80" : "bg-[#050301ea]/80"
      } rounded-3xl flex items-center p-2 transition-all duration-300 ${
        isScrolled
          ? `w-[600px] px-4  ${
              theme === "light" ? " border-[#050301ea]" : "border-[#f5fffaea]"
            }`
          : "w-[calc(100vw-260px)] px-4"
      }`}
    >
      {/* "DD" on the left */}
      <Link
        className={`cursor-pointer ${
          theme === "light"
            ? "text-[#060403]  hover:text-[#ff74e1]"
            : "text-[#f5fffa] hover:font-extrabold hover:text-[#a7ff74]"
        } font-bold text-lg transition-all duration-300 ${
          isScrolled ? "ml-4" : "ml-auto"
        } `}
      >
        DD
      </Link>

      {/* Center Links */}
      <div className="flex-grow flex justify-center space-x-8 transition-all duration-300">
        <Link className="flex items-center space-x-2">
          {position === "home" && (
            <Star
              className={`w-3 h-3 fill-current ${
                theme === "dark" ? "text-[#f00202dc]" : "text-[#05b9e6e8]"
              }`}
            />
          )}
          <ShinyText
            text="Home"
            disabled={false}
            speed={3}
            className={`
              
              ${
                theme === "dark"
                  ? `${
                      position === "home" ? "text-[#f5fffa]" : "text-[#717171]"
                    }  hover:text-teal-300 bg-[linear-gradient(120deg,rgba(255,255,255,0)40%,rgba(255,255,255,0.8)50%,rgba(255,255,255,0)60%)]`
                  : `${
                      position === "home" ? "text-[#060403]" : "text-[#2e2e2e]"
                    } hover:text-teal-600 bg-gradient-to-r from-yellow-400 via-white to-yellow-600`
              } `}
          />
        </Link>
        <Link className="flex items-center space-x-2">
          {position === "about" && (
            <Star
              className={`w-3 h-3 fill-current ${
                theme === "dark" ? "text-[#1af002]" : "text-[#060403]"
              }`}
            />
          )}
          <ShinyText
            text="About"
            disabled={false}
            speed={3}
            className={`
              
              ${
                theme === "dark"
                  ? `${
                      position === "about" ? "text-[#f5fffa]" : "text-[#717171]"
                    }  hover:text-teal-300 bg-[linear-gradient(120deg,rgba(255,255,255,0)40%,rgba(255,255,255,0.8)50%,rgba(255,255,255,0)60%)]`
                  : `${
                      position === "about" ? "text-[#060403]" : "text-[#2e2e2e]"
                    } hover:text-teal-600 bg-gradient-to-r from-yellow-400 via-white to-yellow-600`
              }`}
          />
        </Link>
        <Link className="flex items-center space-x-2">
          {position === "projects" && (
            <Star
              className={`w-3 h-3 fill-current ${
                theme === "dark" ? "text-[#6902f0]" : "text-[#060403]"
              }`}
            />
          )}
          <ShinyText
            text="Projects"
            disabled={false}
            speed={3}
            className={`
              
              ${
                theme === "dark"
                  ? `${
                      position === "projects"
                        ? "text-[#f5fffa]"
                        : "text-[#717171]"
                    }  hover:text-teal-300 bg-[linear-gradient(120deg,rgba(255,255,255,0)40%,rgba(255,255,255,0.8)50%,rgba(255,255,255,0)60%)]`
                  : `${
                      position === "projects"
                        ? "text-[#060403]"
                        : "text-[#2e2e2e]"
                    } hover:text-teal-600 bg-gradient-to-r from-yellow-400 via-white to-yellow-600`
              }`}
          />
        </Link>
        <Link className="flex items-center space-x-2">
          {position === "contact" && (
            <Star
              className={`w-3 h-3 fill-current ${
                theme === "dark" ? "text-[#f00269]" : "text-[#060403]"
              }`}
            />
          )}
          <ShinyText
            text="Contact"
            disabled={false}
            speed={3}
            className={`
              
              ${
                theme === "dark"
                  ? `${
                      position === "contact"
                        ? "text-[#f5fffa]"
                        : "text-[#717171]"
                    }  hover:text-teal-300 bg-[linear-gradient(120deg,rgba(255,255,255,0)40%,rgba(255,255,255,0.8)50%,rgba(255,255,255,0)60%)]`
                  : `${
                      position === "contact"
                        ? "text-[#060403]"
                        : "text-[#2e2e2e]"
                    }  hover:text-teal-600 bg-gradient-to-r from-yellow-400 via-white to-yellow-600`
              }`}
          />
        </Link>
      </div>

      {/* Sunlight Icon on the Right */}
      <button
        className={`w-7 h-7 p-0 flex items-center justify-center rounded-full transition-all duration-300
    ${
      theme === "light"
        ? "text-[#060403] hover:text-[#ff67cf] hover:shadow-[4px_4px_20px_#000000,inset_-6px_-6px_20px_#fff] active:shadow-[inset_6px_6px_12px_#000000,inset_-6px_-6px_12px_#ffffff] "
        : "text-[#f5fffa] hover:text-[#a7ff74] hover:shadow-[4px_4px_20px_#ffffff1a,inset_-6px_-6px_20px_#fff] active:shadow-[inset_6px_6px_12px_#ffffff1a,inset_-6px_-6px_12px_#000000]]"
    } cursor-pointer`}
        onClick={toggleTheme}
      >
        {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </motion.div>
  );
};

export default Header;
