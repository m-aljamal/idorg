import React, { Fragment } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";

const links = [
  {
    label: "الرئيسية",
    to: "home",
  },
  {
    label: "من نحن",
    to: "about",
  },
  {
    label: "خدماتنا",
    to: "services",
  },
  {
    label: "تواصل معنا",
    to: "contactus",
  },
];
const Navbar = () => {
  return (
    <div className="w-full  bg-white text-black py-1 fixed bg-opacity-90 backdrop-blur z-50 ">
      <div className="container flex  justify-between items-center gap-16">
        <div className=" md:flex md:gap-8 gap-4 flex-1 hidden">
          {links.map(({ to, label }) => (
            <Nav to={to} label={label} key={label} />
          ))}
        </div>
        <div className=" relative  w-1/4 h-14">
          <Image
            src="/images/logo.png"
            layout="fill"
            priority
            objectFit="contain"
          />
        </div>
        <MobileNav />
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

const MobileNav = () => {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="md:hidden relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={`origin-center transition scale-90 opacity-0": ${open}`}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={`origin-center transition "scale-90 opacity-0": ${!open}  `}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 mx-4 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <div className=" flex flex-col">
                  {links.map(({ to, label }) => (
                    <Nav to={to} label={label} key={label} />
                  ))}
                </div>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
};
