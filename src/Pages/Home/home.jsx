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
  useEffect(() => {
    setPos("home");
  }, []);
  return (
    <div className="mt-36 px-10">
      <div>
        <div>
          <div className="flex space-x-3 justify-center">
            {isHello ? (
              <ThumbsUp
                onClick={sayHello}
                className="cursor-pointer w-7 h-7 text-green-500"
              />
            ) : (
              <Hand
                onClick={sayHello}
                className={`cursor-pointer w-7 h-7 ${
                  theme === "light" ? "text-[#ff67cf]" : "text-[#c8f000e0]"
                } animate-wave`}
              />
            )}

            <TrueFocus
              sentence="HeyThere! Welcome."
              manualMode={true}
              blurAmount={5}
              borderColor={`${theme === "light" ? "purple" : "cyan"}`}
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <div className="flex justify-center ">
            <BlurText
              text="I'm Deepak Singh Deopa, a passionate software engineer and B.Tech student dedicated to building efficient, scalable, and real-world solutions. From designing full-stack applications to implementing machine learning models, I love turning complex problems into simple, elegant solutions."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={null}
              className={`text-[${
                theme === "light" ? "#060403" : "#f5fffa"
              }] text-lg py-8 px-8`}
            />
          </div>

          <div className="text-[#f5fffa]"></div>
        </div>
        {/*part-2*/}
        <div></div>
      </div>
    </div>
  );
};
export default Home;
