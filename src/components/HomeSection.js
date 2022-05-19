import React from "react";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="relative h-screen" name="home">
      <div className="absolute bg-gray-900 top-0 bottom-0 left-0 right-0 bg-opacity-40 z-10"></div>
      <div className="   text-white z-30  absolute top-0 bottom-0 flex  items-center justify-center right-[50%]     ">
        <h1 className="text-4xl">كتابة نص</h1>
      </div>
      <Image
        src="/images/home.jpg"
        layout="fill"
        alt="main"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default HomeSection;
