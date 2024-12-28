import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/icon_redux.png";
import react_query from "../assets/reactquery-color.svg";
import github from "../assets/github.png";
import node from "../assets/node.png";
import expressJS from "../assets/express-js.png";
import postgresql from "../assets/postgresql-color.svg";
import mongodb from "../assets/mongodb-color.svg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-gray-500 hover:shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-gray-500 hover:shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-gray-500 hover:shadow-yellow-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-gray-500 hover:shadow-sky-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-gray-500 hover:shadow-sky-400",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-gray-500 hover:shadow-purple-600",
    },
    {
      id: 7,
      src: react_query,
      title: "React Query",
      style: "shadow-gray-500 hover:shadow-red-600",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500 hover:shadow-gray-400",
    },
    {
      id: 9,
      src: node,
      title: "Node",
      style: "shadow-gray-500 hover:shadow-lime-500",
    },
    {
      id: 10,
      src: expressJS,
      title: "Express JS",
      style: "shadow-gray-500 hover:shadow-white",
    },
    {
      id: 11,
      src: postgresql,
      title: "PostgreSQL",
      style: "shadow-gray-500 hover:shadow-blue-500",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-gray-500 hover:shadow-green-600",
    },
  ];

  const { ref, controls } = useScrollAnimation();

  const experienceVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      name="experience"
      className="w-full min-h-screen mt-8 text-center cursor-pointer"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={experienceVariant}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Technologies I have experience with.</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 experience-container">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                },
              }}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} transition-shadow`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
