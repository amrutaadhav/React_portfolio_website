import React from "react";
import { motion } from "framer-motion";

const Container1 = (delay) => ({
  hidden: { x: -400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education <span className="text-neutral-500">Details</span>
      </motion.h1>

      <div className="flex flex-col items-center text-center">

        {/* Current College */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-4 max-w-2xl py-2"
        >
          <strong>B.E. in Computer Engineering</strong> <br />
          Bhivarabai Sawant Institute of Technology and Research, Wagholi, Pune <br />
          <strong>SGPA:</strong> 9.27 (Till 4th Semester)
        </motion.p>

        {/* 12th */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="my-4 max-w-2xl py-2"
        >
          <strong>HSC (Science)</strong> <br />
          Rasiklal M. Dharival English Medium School & Junior College, Katraj Kondhawa road, Pune <br />
          <strong>Percentage:</strong> 74.33%
        </motion.p>

        {/* 10th */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="my-4 max-w-2xl py-2"
        >
          <strong>SSC</strong> <br />
          Shri Kamladevi Kanya Vidyalay, Karmala <br />
          <strong>Percentage:</strong> 92.40%
        </motion.p>

      </div>
    </div>
  );
};

export default About;
