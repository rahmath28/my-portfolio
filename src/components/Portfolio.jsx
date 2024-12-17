import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import wild_oasis from "../assets/portfolio/wild_oasis.png";
import pizza_craft from "../assets/portfolio/pizza_craft.png";
import use_popcorn from "../assets/portfolio/use_popcorn.png";
import worldwise from "../assets/portfolio/worldwise.png";
import book_store from "../assets/portfolio/book_store.png";
import react_iq from "../assets/portfolio/react_iq.png";
import prep_trip from "../assets/portfolio/prep_trip.png";
import what_todo from "../assets/portfolio/what_todo.png";
import rep_set_go from "../assets/portfolio/rep_set_go.png";
import fb_lite_clone from "../assets/portfolio/fb_lite_clone.png";

const Portfolio = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const portfolios = [
    {
      id: 1,
      title: "Wild Oasis",
      src: wild_oasis,
      demo: "https://wild-oasis-by-ashik.vercel.app/",
      code: "https://github.com/ashikibrahim07/wild-oasis-by-ashik",
      technologies: [
        "React",
        "Styled Components",
        "Redux",
        "React Query",
        "Supabase",
      ],
    },
    {
      id: 2,
      title: "Worldwise",
      src: worldwise,
      demo: "https://world-wise-plum-psi.vercel.app/",
      code: "https://github.com/ashikibrahim07/world-wise",
      technologies: ["React", "CSS Modules", "React Leaflet"],
    },
    {
      id: 3,
      title: "UsePopcorn",
      src: use_popcorn,
      demo: "https://use-popcorn-navy.vercel.app/",
      code: "https://github.com/ashikibrahim07/use-popcorn",
      technologies: ["React", "CSS"],
    },
    {
      id: 4,
      title: "Book Store",
      src: book_store,
      demo: "https://online-book-store-frontend-beta.vercel.app/",
      code: "https://github.com/ashikibrahim07/book-app-frontend",
      technologies: [
        "React",
        "Tailwind CSS",
        "MongoDB",
        "Node JS",
        "Express.js",
      ],
    },
    {
      id: 5,
      title: "Pizza Craft",
      src: pizza_craft,
      demo: "https://pizza-craft.vercel.app/",
      code: "https://github.com/ashikibrahim07/pizza-craft",
      technologies: ["React", "Tailwind CSS", "Redux"],
    },
    {
      id: 6,
      title: "React IQ",
      src: react_iq,
      demo: "https://react-iq-quiz.vercel.app/",
      code: "https://github.com/ashikibrahim07/react-iq-quiz-app",
      technologies: ["React", "CSS"],
    },
    {
      id: 7,
      title: "Prep Trip",
      src: prep_trip,
      demo: "https://prep-trip.vercel.app/",
      code: "https://github.com/ashikibrahim07/prep-trip",
      technologies: ["React", "CSS"],
    },
    {
      id: 8,
      title: "What Todo",
      src: what_todo,
      demo: "https://what-todo-v1.vercel.app/",
      code: "https://github.com/ashikibrahim07/what-todo",
      technologies: ["React", "CSS"],
    },
    {
      id: 9,
      title: "Rep Set Go",
      src: rep_set_go,
      demo: "https://rep-set-go-beta.vercel.app/",
      code: "https://github.com/ashikibrahim07/RepSetGo",
      technologies: ["React", "CSS"],
    },
    {
      id: 10,
      title: "Facebook Lite Clone",
      src: fb_lite_clone,
      demo: "https://fb-lite-clone.netlify.app/",
      code: "https://github.com/ashikibrahim07/fb-lite-clone-using-html-css",
      technologies: ["HTML", "CSS"],
    },
  ];

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div name="portfolio" className="w-full text-white text-center">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">See some of my work featured below.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4 sm:px-0"
          initial="hidden"
          whileInView="visible"
          variants={containerVariant}
          viewport={{ once: true, amount: 0.05 }}
        >
          {portfolios.map(({ id, src, title, demo, code, technologies }) => (
            <motion.div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
              variants={itemVariant}
            >
              <img
                src={src}
                alt={title}
                className="rounded-t-md duration-200 hover:scale-105 h-auto"
              />

              <h3 className="text-lg text-center mt-2 font-bold">{title}</h3>
              <p className="text-center mt-2 text-sm">
                {technologies.join(", ")}
              </p>
              <div className="flex flex-row items-center justify-center mt-2 gap-2">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto sm:w-1/2 px-2 py-1 sm:px-6 sm:py-3 m-2 duration-200 hover:scale-105 flex items-center justify-center gap-2 border border-gray-300 sm:border-2 rounded-lg transform transition-transform hover:shadow-lg hover:shadow-gray-600"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto sm:w-1/2 px-2 py-1 sm:px-6 sm:py-3 m-2 duration-200 hover:scale-105 flex items-center justify-center gap-2 border border-gray-300 sm:border-2 rounded-lg transform transition-transform hover:shadow-lg hover:shadow-gray-600"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
