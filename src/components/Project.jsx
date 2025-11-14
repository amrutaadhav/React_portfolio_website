import React from "react";
import { motion } from "framer-motion";

// ✅ Your projects list used directly here
const PROJECTS = [
  {
    title: "EngineersHub",
    description:
      "A platform providing engineering resources such as projects and courses for engineering students.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify", "GitHub"],
    link: "https://engineershub2k25.netlify.app/",
  },
  {
    title: "SafeHands",
    description:
      "A social-awareness platform to help users find NGOs, Adoption Centers, and Old Age Homes near them.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify", "GitHub"],
    link: "https://safehands27.netlify.app/",
  },
  {
    title: "CareerCrossroads",
    description:
      "A career guidance website helping students explore Arts, Science & Commerce streams after 10th.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify", "GitHub"],
    link: "https://careercrossroads27.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing skills, achievements, resumes, and projects.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Netlify", "GitHub"],
    link: "https://amrutaportfolio27.netlify.app/",
  }
];

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

            {/* Removed broken image section */}

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h6>

              <p className="mb-4 text-neutral-350">{project.description}</p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
