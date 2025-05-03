import React, { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed z-20  backdrop-blur-md">
      <div>
        <h1 className="sm:text-4xl ml-2 font-signature text-2xl cursor-pointer">
          Rahmathullah
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="group relative px-4 cursor-pointer capitalize font-medium text-white-500"
          >
            <Link
              to={link}
              smooth
              duration={500}
              className="inline-block relative"
            >
              {link}
              <span className="absolute bottom-0 left-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-20 text-white-500 md:hidden"
      >
        {nav ? <LiaTimesSolid size={30} /> : <HiBars3 size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
  bg-[url('bg-img.png')] bg-fill bg-center bg-black z-10"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="group relative px-4 cursor-pointer capitalize py-6 text-xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                className="inline-block relative text-white"
              >
                {link}
                <span className="absolute bottom-0 left-0 h-0.5 bg-gray-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
