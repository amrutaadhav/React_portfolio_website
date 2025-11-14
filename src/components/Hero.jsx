import React from "react";
import { HERO_CONTENT } from "../constants";
import about from "../assets/about1.jpg";
import { motion } from "framer-motion";

const Container = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-2 lg:mb-20"></div>
      <div className="flex flex-col items-center justify-center text-center gap-6">

        <motion.h1
          variants={Container(0)}
          initial="hidden"
          animate="visible"
          className="text-5xl font-thin tracking-tight lg:text-6xl"
        >
          Amruta Adhav
        </motion.h1>

        <motion.span
          variants={Container(0.6)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
          bg-clip-text text-2xl tracking-tight text-transparent"
        >
          Full Stack Developer
        </motion.span>

        <motion.p
          variants={Container(1.2)}
          initial="hidden"
          animate="visible"
          className="max-w-xl py-4 font-light tracking-tight"
        >
          {HERO_CONTENT}
        </motion.p>

        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-52 h-52 rounded lg:w-64 lg:h-64"
          src={about}
          alt="Dp"
        />

      </div>
    </>
  );
};

export default Hero;
