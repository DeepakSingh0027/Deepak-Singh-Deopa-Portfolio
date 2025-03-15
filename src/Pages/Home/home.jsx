import React, { useState, useContext, useEffect } from "react";
import "./home.css";
import { ThemeContext } from "../../Context/themeContext";
import { motion } from "framer-motion";
import { Hand, ThumbsUp } from "lucide-react";
import BlurText from "./../../animations/BlurText";
import TrueFocus from "./../../animations/TrueFocus";
import GradientText from "../../animations/GradientText";
import { Sparkles } from "lucide-react";
import ParallaxText from "../../animations/ParallaxText";
import { Ribbon } from "lucide-react";
import { TreePalm } from "lucide-react";
import { Flame } from "lucide-react";
import { DraftingCompass } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { Codesandbox } from "lucide-react";
import { Languages } from "lucide-react";
import { LeafyGreen } from "lucide-react";

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
    <div className="mt-42  px-10">
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
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className={`relative mx-16 z-10 text-7xl mix-blend-difference w-fit ${
                  theme === "light" ? "text-[#b1b1b1]" : "text-[#FFFFF0]"
                }`}
              >
                Turning{" "}
                <span className="bg-gradient-to-r from-[#f12711f3] via-[#f70707f4] via-[#911b1bea] to-[#bf5e18] ideas">
                  Ideas
                </span>
              </motion.p>
              <div
                className={`absolute inset-0 mt-1 -z-10 top-1/2 h-0.5 w-full ${
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
                <span className="bg-gradient-to-r from-[#f6f5f5f3] via-[#FFFFF0] via-[#a4a49e] to-[#787877] ideas">
                  Into
                </span>
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
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ amount: 0.5 }}
                className={`relative z-10 text-7xl mx-5 mix-blend-difference w-fit ${
                  theme === "light" ? "text-[#b1b1b1]" : "text-[#FFFFF0]"
                }`}
              >
                <span className="bg-gradient-to-r from-[#f12711f3] via-[#f70707f4] via-[#911b1bea] to-[#bf5e18] ideas">
                  Scalable
                </span>{" "}
                Solutions.
              </motion.p>
              <div
                className={`absolute inset-0 mt-4 top-1/2 h-0.5 w-full ${
                  theme === "light" ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></div>
            </div>
          </div>
        </div>
        {/*Seperator*/}
        <div className="items-center text-3xl font-bold mt-34 parallax-text">
          <div className="absolute left-0 w-screen mx-0 border-t border-gray-400 pb-5"></div>
          <ParallaxText baseVelocity={3}>
            <span
              className={`${
                theme === "light" ? "text-[#0c7ab1ec]" : "text-[#a30c0cec]"
              }`}
            >
              Developer
            </span>{" "}
            <Ribbon
              size={60}
              color={`${theme === "light" ? "#2e2e2e" : "#f5fffa"}`}
            />
            <span
              className={`${
                theme === "light" ? "text-[#0c7ab1ec]" : "text-[#a30c0cec]"
              }`}
            >
              Designer
            </span>{" "}
            <TreePalm
              size={60}
              color={`${theme === "light" ? "#2e2e2e" : "#f5fffa"}`}
            />
            <span
              className={`${
                theme === "light" ? "text-[#0c7ab1ec]" : "text-[#a30c0cec]"
              }`}
            >
              Solutionist
            </span>{" "}
            <Flame
              size={60}
              color={`${theme === "light" ? "#2e2e2e" : "#f5fffa"}`}
            />
            <span
              className={`${
                theme === "light" ? "text-[#0c7ab1ec]" : "text-[#a30c0cec]"
              }`}
            >
              Strategist
            </span>{" "}
            <DraftingCompass
              color={`${theme === "light" ? "#2e2e2e" : "#f5fffa"}`}
              size={60}
            />
          </ParallaxText>
          <div className="absolute left-0 w-screen mx-0 border-t border-gray-400 mt-26"></div>
        </div>
        {/*About Me*/}
        <div className="relative items-center mt-94 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={0.5}
            className={`flex justify-center items-center space-x-1 text-xl   `}
          >
            <Sparkles
              className={`${
                theme === "light" ? "text-[#100ddf]" : "text-[#da0707]"
              } animate-zoom`}
            />
            <p
              className={`${
                theme === "light"
                  ? "bg-gradient-to-r from-[#100ddf] via-[#4827b4] via-[#000000] via-[#5220b6] to-[#0b95bb] ideas "
                  : " bg-gradient-to-r from-[#f3897f] via-[#c62525] via-[#f5fffa] via-[#dd0f0f] to-[#da0707] ideas"
              }`}
            >
              About Me
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.9 }}
            className={`text-2xl mt-3  text-center font-bold ${
              theme === "light" ? "text-[#2e2e2e]" : "text-[#f0f8ffe2]"
            }`}
          >
            Hey there! <span className="animate-wave">👋</span> I'm Deepak Singh
            Deopa, a passionate software engineer and B.Tech student who loves
            transforming innovative ideas into functional, efficient, and
            scalable solutions.
            <br /> Major Fields:
          </motion.p>
        </div>
        {/*Seperator*/}
        <div className="items-center text-3xl font-bold mt-34 parallax-text">
          <div className="absolute left-0 w-screen mx-0 border-t border-gray-400 pb-5"></div>
          <ParallaxText baseVelocity={-2}>
            <span
              className={`${
                theme === "light" ? "text-[#0c7ab1ec]" : "text-[#a30c0cec]"
              }`}
            >
              FullStack Developer
            </span>{" "}
            <LeafyGreen
              size={60}
              color={`${theme === "light" ? "#2e2e2e" : "#f5fffa"}`}
            />
            <span
              className={`${
                theme === "light" ? "text-[#0c7ab1ec]" : "text-[#a30c0cec]"
              }`}
            >
              Machine Learning & AI
            </span>{" "}
            <Fingerprint
              size={60}
              color={`${theme === "light" ? "#2e2e2e" : "#f5fffa"}`}
            />
            <span
              className={`${
                theme === "light" ? "text-[#0c7ab1ec]" : "text-[#a30c0cec]"
              }`}
            >
              System Design & Optimization
            </span>{" "}
            <Codesandbox
              size={60}
              color={`${theme === "light" ? "#2e2e2e" : "#f5fffa"}`}
            />
          </ParallaxText>
          <div className="absolute left-0 w-screen mx-0 border-t border-gray-400 mt-26"></div>
        </div>
        {/*About Me 2*/}
        <div className="relative items-center mt-94 ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ amount: 0.9 }}
            className={`text-2xl mt-3  text-center font-bold ${
              theme === "light" ? "text-[#2e2e2e]" : "text-[#f0f8ffe2]"
            }`}
          >
            Whether it's building a high-performance web application, crafting
            intelligent machine learning models, or optimizing systems, I thrive
            on challenges that push me beyond my limits.
          </motion.p>
        </div>
        <div className="mt-34 flex justify-center items-center space-x-2 text-xl  ">
          <Languages
            className={`${
              theme === "light" ? "text-[#100ddf]" : "text-[#da0707]"
            } animate-xoom `}
          />
          <p
            className={`${
              theme === "light"
                ? "bg-gradient-to-r from-[#100ddf] via-[#4827b4] via-[#000000] via-[#5220b6] to-[#0b95bb] ideas "
                : " bg-gradient-to-r from-[#f3897f] via-[#c62525] via-[#f5fffa] via-[#dd0f0f] to-[#da0707] ideas"
            }`}
          >
            Programming Languages
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
