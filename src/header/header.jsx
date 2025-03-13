import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon, Star } from "lucide-react";
import ShinyText from "../animations/ShinyText";
import { ThemeContext } from "../Context/themeContext";

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
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50  ${
        theme === "light" ? "bg-[#f5fffa]/70" : "bg-[#1e1e1e]/70"
      } rounded-3xl flex items-center p-2 transition-all duration-300 ${
        isScrolled ? "w-[300px] px-4" : "w-[calc(100vw-260px)] px-10 shadow-md"
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
                    } hover:text-teal-600 bg-[linear-gradient(120deg,rgb(255,0,0)_40%,rgba(223,206,15,0.8)_50%,rgba(0,255,4,0.953)_60%)]`
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
                    } hover:text-teal-600 bg-[linear-gradient(120deg,rgb(255,0,0)_40%,rgba(223,206,15,0.8)_50%,rgba(0,255,4,0.953)_60%)]`
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
                    } hover:text-teal-600 bg-[linear-gradient(120deg,rgb(255,0,0)_40%,rgba(223,206,15,0.8)_50%,rgba(0,255,4,0.953)_60%)]`
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
                    } hover:text-teal-600 bg-[linear-gradient(120deg,rgb(255,0,0)_40%,rgba(223,206,15,0.8)_50%,rgba(0,255,4,0.953)_60%)]`
              }`}
          />
        </Link>
      </div>

      {/* Sunlight Icon on the Right */}
      <button
        className={`mr-auto ${
          theme === "light"
            ? " text-[#060403] hover:text-[#ff67cf]"
            : " text-[#f5fffa] hover:text-[#a7ff74]"
        } cursor-pointer `}
        onClick={toggleTheme}
      >
        {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
      </button>
    </div>
  );
};

export default Header;
