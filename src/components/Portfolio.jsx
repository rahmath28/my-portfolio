import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import movie_Finder from "../assets/portfolio/projects/mf.jpg";
import git_Finder from "../assets/portfolio/projects/git.jpg";
import Chucknoris_Jokes from "../assets/portfolio/projects/jokes.jpg";
import money_tracker from "../assets/portfolio/projects/mtracker.jpg";
import book_way from "../assets/portfolio/projects/bookway.jpg";
import review_app from "../assets/portfolio/projects/rview.jpg";
import ecommerce from  "../assets/portfolio/projects/ecom.png";
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
      title: "Movie Finder",
      description:
        "A Movie Finder app utilizing the TMDB API to fetch and display Top Rated, Popular, and Upcoming movies. It features a search functionality for dynamic content filtering and real-time data updates.",
      src: movie_Finder,
      demo: "https://moviefinder01.netlify.app/",
      code: "https://github.com/rahmath28/Movie-Finder.git",
      technologies: [
        "React",
        "Tailwind CSS",
        "Flowbite"
      ],
    },
    {
      id: 2,
      title: "Git Finder ",
      description:
        "A Git Finder app that fetches GitHub user details, including repositories, avatar, and full profile information. It allows users to view detailed stats and navigate directly to the user's GitHub profile for exploration.",
      src: git_Finder ,
      demo: "https://gitfinder01.netlify.app/",
      code: "https://github.com/rahmath28/git-finder.git",
      technologies: ["HTML", "Javascript", "Bootstrap"],
    },
    {
      id: 3,
      title: "Money tracker",
      description:
        "A Money Tracker app that allows users to track expenses, add details, and calculate total spending. Users can edit, update, and remove transactions, with an option to clear all data for easy management.",
      src: money_tracker,
      demo: "",
      code: "https://github.com/rahmath28/money-tracker.git",
      technologies: ["HTML", "Materialize - CSS", "Javascript"],
    },
    {
      id: 4,
      title: "Chucknoris Jokes ",
      description:
        "A Chuck Norris Jokes app using the Chuck Norris API that displays random jokes initially. Users can select a category to generate jokes accordingly, ensuring a fun experience withdynamic content updates.",
      src: Chucknoris_Jokes,
      demo: "https://chucknori-jokes-app.netlify.app/",
      code: "https://github.com/rahmath28/chucknoris-api.git",
      technologies: [
        "HTML", "Bootstrap", "Javascript"
      ],
    },
    {
      id: 5,
      title: "Book Way",
      description:
        "A Book Management Page where users can store book titles, author names, and ISBNs. It allows users to view, delete, and manage books efficiently, with an option to clear all entries easily.",
      src: book_way,
      demo: "https://bookway01.netlify.app/",
      code: "https://github.com/rahmath28/book-way.git",
      technologies: ["HTML", "Bootstrap", "Javascript"],
    },
    {
      id: 6,
      title: "Review App",
      description:
        "A Feedback Review app with full CRUD functionalities, allowing users to add, view, update, and delete feedback. Data is stored in a JSON server, ensuring persistent storage and seamless user interaction.",
      src: review_app,
      demo: "https://review-app01.netlify.app/",
      code: "https://github.com/ashikibrahim07/react-iq-quiz-app",
      technologies: ["React", "CSS"],
    },
    {
      id: 7,
      title: "Ecommerce",
      description:
        "Built an e-commerce project using the MERN stack, creating schemas to seed mock data into MongoDB. Integrated Redux for efficient state management and successfully fetched and displayed individual product details. Implemented product selection with quantity control and generated a dynamic product summary view.",
      src: ecommerce,
      demo: "",
      code: "https://github.com/rahmath28/e-commerce.git",
      technologies: ["React","Redux", "Daisy UI", "Mongo DB"],
    },
    // {
    //   id: 8,
    //   title: "What Todo",
    //   description:
    //     "A task management app designed to help users organize and prioritize their to-do lists. Features include confirmation for check-list, a user-friendly interface, and easy task management.",
    //   src: what_todo,
    //   demo: "https://what-todo-v1.vercel.app/",
    //   code: "https://github.com/ashikibrahim07/what-todo",
    //   technologies: ["React", "CSS", "Sweet Alert2"],
    // },
    // {
    //   id: 9,
    //   title: "Rep Set Go",
    //   description:
    //     "A workout tracker that allows users to log exercises, sets, and reps. The app helps users monitor their fitness progress and track performance over time.",
    //   src: rep_set_go,
    //   demo: "https://rep-set-go-beta.vercel.app/",
    //   code: "https://github.com/ashikibrahim07/RepSetGo",
    //   technologies: ["React", "CSS"],
    // },
    // {
    //   id: 10,
    //   title: "Facebook Lite Clone",
    //   description:
    //     "A lightweight replica of Facebook, featuring core functionalities like newsfeed, friend requests, messenger, and notifications. Designed for fast performance and simplicity.",
    //   src: fb_lite_clone,
    //   demo: "https://fb-lite-clone.netlify.app/",
    //   code: "https://github.com/ashikibrahim07/fb-lite-clone-using-html-css",
    //   technologies: ["HTML", "CSS"],
    // },
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
                    <FaExternalLinkAlt /> Visit
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
