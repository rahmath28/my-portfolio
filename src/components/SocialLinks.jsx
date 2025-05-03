import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rahmath-689385326/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/rahmath28",
    },
    {
      id: 3,
      child: (
        <>
          Mail <CiMail size={30} />
        </>
      ),
      href: "mailto:rahmath8525@gmail.com",
    },
  ];

  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed hidden">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-inherit" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
