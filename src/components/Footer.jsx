import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Footer = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
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
      {isFooterVisible && (
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 text-white p-2 sm:p-3 md:p-4 rounded-full shadow-md group bg-gradient-to-br from-[#2D2A6A] to-[#4B0082] group-hover:from-[#3A3A8D] group-hover:to-[#5B3A99] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          aria-label="Back to Top"
          data-tooltip-id="scroll-to-top"
          data-tooltip-content="Scroll to Top"
        >
          <FaArrowUp size={20} className="sm:size-[18px] md:size-[23px]" />
        </motion.button>
      )}
      <Tooltip id="scroll-to-top" place="top" effect="solid" />{" "}
      <footer
        ref={footerRef}
        className="text-white text-center py-4 sm:text-lg text-sm"
      >
        <p>
          Coded in <span className="font-bold">Visual Studio Code</span>. Built
          with <span className="font-bold">React.js</span>,{" "}
          <span className="font-bold">Tailwind CSS</span>, and{" "}
          <span className="font-bold">Framer Motion</span>. Deployed with{" "}
          <span className="font-bold">Vercel</span>.
        </p>
        <p className="mt-2">
          Crafted with care by{" "}
          <Link to="home" smooth duration={500}>
            <span className="font-bold cursor-pointer">Ashik Ibrahim</span>
          </Link>
          .
        </p>
      </footer>
    </div>
  );
};

export default Footer;
