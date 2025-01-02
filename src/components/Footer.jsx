import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <motion.button
        onClick={handleScrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-md bg-gradient-to-br from-[#2D2A6A] to-[#4B0082] group-hover:from-[#3A3A8D] group-hover:to-[#5B3A99] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        aria-label="Back to Top"
        data-tooltip-id="back-to-top"
        data-tooltip-content="Back to Top"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <FaArrowUp size={20} />
      </motion.button>

      <Tooltip id="back-to-top" place="top" effect="solid" />
      <footer className="text-white text-center py-4 sm:text-lg text-sm">
        <p>
          Coded in <span className="font-bold">Visual Studio Code</span>. Built
          with <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Tailwind CSS</span>, and{" "}
          <span className="font-bold">Framer Motion</span>. Deployed with{" "}
          <span className="font-bold">Vercel</span>.
        </p>
        <p className="mt-2">
          Crafted with care by{" "}
          <span className="font-bold cursor-pointer">Ashik Ibrahim</span>.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
