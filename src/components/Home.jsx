import React from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SiReaddotcv } from "react-icons/si";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Home = () => {
  const { ref, controls } = useScrollAnimation();

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      name="home"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      className="h-screen w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-[80px]">
        <div className="flex flex-col justify-center h-full">
          <motion.p
            variants={animationVariants}
            className="text-sm sm:text-sm font-bold text-gray-300 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h2
            variants={animationVariants}
            className="text-4xl sm:text-7xl font-bold text-white py-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Rahmathullah
          </motion.h2>
          <motion.h3
            variants={animationVariants}
            className="text-xl sm:text-4xl font-bold text-white py-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            FrontEnd Developer
          </motion.h3>
          <motion.p
            variants={animationVariants}
            className="text-white py-4 max-w-screen-md md:text-lg text-sm text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
           Passionate about building dynamic, user-friendly web applications with a foundational understanding ofcloud computing and AWS. Always eager to learn and adapt to new technologiesto create innovative solutions.
          </motion.p>

          <motion.div
            variants={animationVariants}
            className="flex justify-center space-x-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
             <a
              href="/Rahmathullah_S_CV.pdf"
              target="_blank"
              className="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group 
    border-2 border-[#2D2A6A] bg-gradient-to-br from-[#2D2A6A] to-[#4B0082] 
    focus:outline-none"
              aria-label="Download Rahmath's Resume"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0 flex items-center">
                Resume
                <span>
                  <SiReaddotcv size={20} className="ml-3" />
                </span>
              </span>
            </a>

            <Link
              to="portfolio"
              smooth
              duration={500}
              className="relative inline-flex items-center justify-center p-1 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group 
      border-2 border-[#2D2A6A] bg-transparent 
      hover:bg-gradient-to-br hover:from-[#2D2A6A] hover:to-[#4B0082] hover:text-white focus:outline-none cursor-pointer transition-all duration-300 ease-in-out"
              aria-label="Go to portfolio section"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0 flex items-center">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={animationVariants}
            className="flex justify-center space-x-4 lg:hidden"
          >
            <a
              // href="https://www.linkedin.com/in/ashik-ibrahim-s/"
              href="http://linkedin.com/in/rahmath-689385326"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
              aria-label="Visit Rahmathullah's LinkedIn profile"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/rahmath28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="Visit Rahmathullah's GitHub profile"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="mailto:rahmath8525@gmail.com"
              className="text-white hover:text-yellow-500"
              aria-label="Send an email to Rahmathullah"
            >
              <CiMail size={30} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
