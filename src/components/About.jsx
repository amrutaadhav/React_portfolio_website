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

      <div className="flex flex-wrap">
        
        {/* Current College */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl py-2">
              <strong>B.E. in Computer Engineering</strong> <br />
              Bhivarabai Sawant Institute of Technology and Research, Wagholi <br />
              <strong>SGPA:</strong> 9.27 (Till 4th Semester)
            </p>
          </div>
        </motion.div>

        {/* 12th & 10th */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="my-2 py-2 max-w-xl tracking-tight space-y-6">

              <p>
                <strong>HSC (Science)</strong> <br />
                Rasiklal M. Dharival English Medium School & Junior College, Karmala <br />
                <strong>Percentage:</strong> 74.33%
              </p>

              <p>
                <strong>SSC</strong> <br />
                Shri Kamladevi Kanya Vidyalay, Karmala <br />
                <strong>Percentage:</strong> 92.40%
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
