import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { AiOutlineJavaScript } from "react-icons/ai";
import { FaJava, FaPython, FaDatabase, FaCode } from "react-icons/fa"; // ⬅ VS Code icon here
import { motion } from "framer-motion";

const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      {/* Languages */}
      <h2 className="text-center text-xl font-semibold mb-6">Languages</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        <Icon label="Java" icon={<FaJava className="text-6xl text-red-500" />} />
        <Icon label="JavaScript" icon={<AiOutlineJavaScript className="text-6xl text-yellow-400" />} />
        <Icon label="Python" icon={<FaPython className="text-6xl text-blue-300" />} />
        <Icon label="SQL" icon={<FaDatabase className="text-6xl text-purple-400" />} />
      </div>

      {/* Frontend */}
      <h2 className="text-center text-xl font-semibold mb-6">Frontend</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        <Icon label="HTML5" icon={<SiHtml5 className="text-6xl text-orange-500" />} />
        <Icon label="CSS3" icon={<SiCss3 className="text-6xl text-blue-500" />} />
        <Icon label="React.js" icon={<RiReactjsFill className="text-6xl text-blue-400" />} />
        <Icon label="Tailwind CSS" icon={<SiTailwindcss className="text-6xl text-cyan-400" />} />
      </div>

      {/* Backend */}
      <h2 className="text-center text-xl font-semibold mb-6">Backend</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        <Icon label="Node.js" icon={<RiNodejsLine className="text-6xl text-green-400" />} />
        <Icon label="Express.js" icon={<SiExpress className="text-6xl text-gray-300" />} />
      </div>

      {/* Database */}
      <h2 className="text-center text-xl font-semibold mb-6">Database</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        <Icon label="MySQL" icon={<SiMysql className="text-6xl text-blue-800" />} />
        <Icon label="MongoDB" icon={<SiMongodb className="text-6xl text-green-800" />} />
      </div>

      {/* Tools & Platforms */}
      <h2 className="text-center text-xl font-semibold mb-6">Tools & Platforms</h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
        <Icon label="Git" icon={<SiGit className="text-6xl text-red-500" />} />
        <Icon label="GitHub" icon={<SiGithub className="text-6xl text-gray-200" />} />
        <Icon label="VS Code" icon={<FaCode className="text-6xl text-blue-500" />} /> {/* FIXED */}
        <Icon label="Vercel" icon={<SiVercel className="text-6xl text-white" />} />
        <Icon label="Netlify" icon={<SiNetlify className="text-6xl text-blue-400" />} />
      </div>

      {/* Other Skills */}
      <h2 className="text-center text-xl font-semibold mb-6">Other Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <span className="text-lg font-medium">Problem Solving</span>
        <span className="text-lg font-medium">Team Collaboration</span>
      </div>
    </div>
  );
};

const Icon = ({ icon, label }) => (
  <motion.div
    variants={IconVariant(2.5)}
    initial="initial"
    animate="animate"
    className="flex flex-col items-center gap-2 rounded-2xl border-2 border-neutral-800 p-4"
  >
    {icon}
    <p className="text-sm text-neutral-300">{label}</p>
  </motion.div>
);

export default Tech;
