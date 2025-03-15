import React from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrapping for infinite scrolling effect
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="absolute left-0 overflow-hidden w-screen mx-0 tracking-tighter leading-none mt-5 whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="font-semibold uppercase text-[64px] flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        <span className="flex mr-[30px] space-x-5">{children} </span>
        <span className="flex mr-[30px] space-x-5">{children} </span>
        <span className="flex mr-[30px] space-x-5">{children} </span>
        <span className="flex mr-[30px] space-x-5">{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
