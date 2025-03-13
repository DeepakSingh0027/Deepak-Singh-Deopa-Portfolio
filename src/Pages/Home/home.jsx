import React, { useState, useContext, useEffect } from "react";
import "./home.css";
import { ThemeContext } from "../../Context/themeContext";
import { motion } from "framer-motion";
import { Hand, ThumbsUp } from "lucide-react";
import BlurText from "./../../animations/BlurText";
import TrueFocus from "./../../animations/TrueFocus";
const Home = () => {
  const [isHello, setHello] = useState(false);
  const { theme, toggleTheme, position, setPos } = useContext(ThemeContext);
  const sayHello = () => {
    setHello(!isHello);
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  useEffect(() => {
    setPos("home");
  }, []);
  return (
    <div className="mt-42 px-10">
      <div>
        <div>
          <div className="flex space-x-3 justify-center">
            {isHello ? (
              <ThumbsUp className="cursor-pointer w-7 h-7 text-green-500 animate-thumb" />
            ) : (
              <Hand
                onClick={sayHello}
                className={`cursor-pointer w-7 h-7 ${
                  theme === "light" ? "text-[#05b9e6e8]" : "text-[#d30808e0]"
                } animate-wave`}
              />
            )}
            {isHello ? (
              <BlurText
                text="Welcome."
                delay={60}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className={`${
                  theme === "light" ? "text-[#2e2e2e]" : "text-[#FFFFF0]"
                } text-2xl mb-8 `}
              />
            ) : (
              <BlurText
                text="Hey!"
                delay={60}
                animateBy="letters"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className={`${
                  theme === "light" ? "text-[#2e2e2e]" : "text-[#FFFFF0]"
                } text-2xl mb-8`}
              />
            )}
          </div>
          <div className="flex space-x-3 justify-center"></div>
          <div className="flex justify-center "></div>

          <div className="text-[#f5fffa]"></div>
        </div>
        {/*part-2*/}
        <div></div>
      </div>
    </div>
  );
};
export default Home;
