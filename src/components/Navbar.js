import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import useScroll from "../utils/useScroll";

const Navbar = () => {
  const { isMoved } = useScroll();

  const links = [
    {
      label: "Home",
      to: "home",
    },
    {
      label: "About",
      to: "about",
    },
    {
      label: "Message",
      to: "message",
    },
  ];

  return (
    <div
      className={`fixed w-full z-50 py-4 ${
        isMoved &&
        "bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur dark:backdrop-blur transition duration-500  ease-in-out"
      }`}
    >
      <div className=" flex justify-center gap-3 ">
        {links.map(({ to, label }) => (
          <Nav to={to} label={label} key={label} />
        ))}
      </div>
    </div>
  );
};

const Nav = ({ to, label }) => {
  return (
    <Link
      to={to}
      smooth
      activeClass="text-yellow-500"
      spy
      className="text-violet-300 cursor-pointer"
    >
      {label}
    </Link>
  );
};

export default Navbar;
