import React from "react";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const aboutVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <div name="about" className="w-full text-white text-center pt-[80px]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={aboutVariants}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="sm:text-xl text-sm text-justify">
          Front-End Developer & Cloud Enthusiast with expertise in web technologies and AWS Cloud (Basics).
          Skilled in responsive UI development and creating seamless user experiences. Experienced in building dynamic
          web applications with modern technologies. Passionate about exploring cloud computing and
          its integration with web solutions. Always eager to learn, adapt, and innovate in the ever-evolving tech landscape. I am eager to apply my skills
          to innovative projects that challenge the limits of technology.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
