import React from "react";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import useScroll from "../utils/useScroll";
import Image from "next/image";
const Navbar = () => {
  const { isMoved } = useScroll();

  const links = [
    {
      label: "من نحن",
      to: "about",
    },
    {
      label: "الرئيسية",
      to: "home",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-black py-2 fixed dark:bg-black bg-opacity-80 dark:bg-opacity-80 backdrop-blur dark:backdrop-blur transition duration-500  ease-in-out  z-50 ">
      <div className="container flex justify-around items-center">
        <div>
          <Image
            src="/images/logo.png"
            width={300}
            height={50}
            priority
            objectFit="contain"
          />
        </div>
        <div className=" flex justify-center md:gap-8 gap-4">
          {links.map(({ to, label }) => (
            <Nav to={to} label={label} key={label} />
          ))}
        </div>
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
      className="text-gray-700 text-lg cursor-pointer"
    >
      {label}
    </Link>
  );
};

export default Navbar;
