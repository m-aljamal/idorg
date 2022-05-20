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
      label: "الرئيسية",
      to: "home",
    },
    {
      label: "من نحن",
      to: "about",
    },
  ];

  return (
    <div className="w-full  bg-white text-black py-1 fixed bg-opacity-90 backdrop-blur z-50 ">
      <div className="container flex  justify-between items-center gap-16">
        <div className=" relative  w-1/4 h-14">
          <Image
            src="/images/logo.png"
            layout="fill"
            priority
            objectFit="contain"
          />
        </div>
        <div className=" flex md:gap-8 gap-4 flex-1">
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
      activeClass="text-primary"
      spy
      className="text-lg cursor-pointer "
    >
      {label}
    </Link>
  );
};

export default Navbar;
