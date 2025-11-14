import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-10 py-4 flex flex-col items-center gap-2 
                    lg:flex-row lg:justify-between lg:gap-0">
      
      {/* Line Text */}
      <p className="text-lg text-center mx-2 
                    lg:text-2xl lg:text-left">
        Turning ideas into reality through code
      </p>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-4 text-xl 
                      lg:text-2xl">
        <a
          href="https://www.linkedin.com/in/amruta-adhav-8760a6321/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/amrutaadhav"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-400"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
