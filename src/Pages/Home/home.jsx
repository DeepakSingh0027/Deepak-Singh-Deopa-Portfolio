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
          {/*Hey text */}
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
          {/*Heading */}
          <div className="relative mt-16 font-bold">
            {/* First Line (Text Moves Left) */}
            <div className="relative mb-4">
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className={`relative mx-16 z-10 text-7xl mix-blend-difference w-fit ${
                  theme === "light" ? "text-[#b1b1b1]" : "text-[#FFFFF0]"
                }`}
              >
                Turning <span className="text-red-500">Ideas</span>
              </motion.p>
              <div
                className={`absolute inset-0 -z-10 top-1/2 h-0.5 w-full ${
                  theme === "light" ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></div>
            </div>

            {/* Second Line (Text Stays in Place) */}
            <div className="relative mb-4 pt-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className={`relative mx-16 z-10 text-7xl text-center mix-blend-difference ${
                  theme === "light" ? "text-[#b1b1b1]" : "text-[#FFFFF0]"
                }`}
              >
                Into
              </motion.p>
              <div
                className={`absolute inset-0 mt-4 top-1/2 h-0.5 w-full ${
                  theme === "light" ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></div>
            </div>

            {/* Third Line (Text Moves Right) */}
            <div className="relative pt-6 flex justify-end">
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className={`relative z-10 text-7xl mx-5 mix-blend-difference w-fit ${
                  theme === "light" ? "text-[#b1b1b1]" : "text-[#FFFFF0]"
                }`}
              >
                <span className="text-red-500">Scalable</span> Solutions.
              </motion.p>
              <div
                className={`absolute inset-0 mt-4 top-1/2 h-0.5 w-full ${
                  theme === "light" ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/*About Me*/}
        <div></div>
      </div>
    </div>
  );
};
export default Home;
