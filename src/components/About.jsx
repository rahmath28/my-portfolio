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
    <div name="about" className="w-full text-white text-center">
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
          I am a recent Computer Science Master's graduate, specializing in{" "}
          <span className="font-bold">front-end development</span> and the{" "}
          <span className="font-bold">PERN</span> stack. Throughout my academic
          career, I have focused on modern web development and enhanced my
          proficiency in <span className="font-bold">HTML</span>,{" "}
          <span className="font-bold">CSS</span>,{" "}
          <span className="font-bold">JavaScript</span>,{" "}
          <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Redux</span>,{" "}
          <span className="font-bold">Tailwind</span>, and{" "}
          <span className="font-bold">Node.js</span>. I have also gained
          experience working with <span className="font-bold">PostgreSQL</span>{" "}
          databases, where I created complex data models and leveraged{" "}
          <span className="font-bold">Express.js</span> for server-side
          development. With a solid foundation in computer science and a passion
          for creating intuitive user interfaces, I am eager to apply my skills
          to innovative projects that challenge the limits of technology.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
