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
      description:
        "A nature-themed app for managing cabin bookings at a wildlife resort. It includes an admin dashboard for adding cabins, handling check-ins, and creating user accounts for employees.",
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
      description:
        "An interactive map that allows users to explore countries and their demographics. Users can click on countries to view detailed data and explore global information in a visually engaging way.",
      src: worldwise,
      demo: "https://world-wise-plum-psi.vercel.app/",
      code: "https://github.com/ashikibrahim07/world-wise",
      technologies: ["React", "CSS Modules", "React Leaflet"],
    },
    {
      id: 3,
      title: "UsePopcorn",
      description:
        "A movie discovery app where users can browse movies, view detailed information, and check ratings. The app focuses on providing a seamless movie exploration experience.",
      src: use_popcorn,
      demo: "https://use-popcorn-by-ashik.vercel.app/",
      code: "https://github.com/ashikibrahim07/use-popcorn",
      technologies: ["React", "CSS", "React Modal"],
    },
    {
      id: 4,
      title: "Book Store",
      description:
        "An online store for purchasing books with a fully functional cart and checkout system. It allows users to browse a wide selection of books and manage their purchases effortlessly.",
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
      description:
        "A pizza ordering website where users can customize and prioritize their pizzas. They can select different ingredients and create their personalized pizza with ease.",
      src: pizza_craft,
      demo: "https://pizza-craft.vercel.app/",
      code: "https://github.com/ashikibrahim07/pizza-craft",
      technologies: ["React", "Tailwind CSS", "Redux"],
    },
    {
      id: 6,
      title: "React IQ",
      description:
        "A fun quiz app that challenges users' IQ with various questions. The app features a timer and score tracker to make the quiz experience more interactive and competitive.",
      src: react_iq,
      demo: "https://react-iq-quiz.vercel.app/",
      code: "https://github.com/ashikibrahim07/react-iq-quiz-app",
      technologies: ["React", "CSS"],
    },
    {
      id: 7,
      title: "Prep Trip",
      description:
        "A trip planning application that helps users organize and track tasks related to their trips. It allows users to add, update, and monitor travel-related activities efficiently.",
      src: prep_trip,
      demo: "https://prep-trip.vercel.app/",
      code: "https://github.com/ashikibrahim07/prep-trip",
      technologies: ["React", "CSS"],
    },
    {
      id: 8,
      title: "What Todo",
      description:
        "A task management app designed to help users organize and prioritize their to-do lists. It includes notifications for reminders and an easy-to-use interface for managing daily tasks.",
      src: what_todo,
      demo: "https://what-todo-v1.vercel.app/",
      code: "https://github.com/ashikibrahim07/what-todo",
      technologies: ["React", "CSS", "Sweet Alert2"],
    },
    {
      id: 9,
      title: "Rep Set Go",
      description:
        "A workout tracker that allows users to log exercises, sets, and reps. It provides a simple way to monitor fitness progress and track performance over time.",
      src: rep_set_go,
      demo: "https://rep-set-go-beta.vercel.app/",
      code: "https://github.com/ashikibrahim07/RepSetGo",
      technologies: ["React", "CSS"],
    },
    {
      id: 10,
      title: "Facebook Lite Clone",
      description:
        "A lightweight replica of Facebook, featuring core functionalities like newsfeed, friend requests, messenger, and notifications. It is designed for fast performance and simplicity",
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
    <div name="portfolio" className="w-full text-white text-center pt-[80px]">
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
          {portfolios.map(
            ({ id, src, title, demo, code, technologies, description }) => (
              <motion.div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg"
                variants={itemVariant}
              >
                <img
                  src={src}
                  alt={title}
                  className="rounded-t-md duration-200 hover:scale-95 h-auto"
                />

                <h3 className="text-lg text-center mt-2 font-bold">{title}</h3>

                <p className="text-center mt-2 text-sm sm:text-base text-gray-400 px-2">
                  {description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-100 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row items-center justify-center mt-2 gap-2">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto sm:w-1/2 px-2 py-1 sm:px-6 sm:py-3 m-2 duration-200 hover:scale-105 flex items-center justify-center gap-2 border border-gray-300 sm:border-2 rounded-lg transform transition-transform hover:shadow-lg hover:shadow-gray-600"
                  >
                    <FaExternalLinkAlt /> Visit Site
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
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
