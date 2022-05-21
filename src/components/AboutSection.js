import React from "react";
import { aboutText } from "../utils/text";

const AboutSection = () => {
  return (
    <main name="about">
      <section className="py-24 container">
        <div className="text-center">
          <h2 className="text-primary text-lg font-bold">
            نحن نقدم منتجات رقمية جميلة
          </h2>
          <div className="text-2xl text-gray-700 pt-2 ">
            <p>نحن نقدم جودة عالية وفعالة من حيث التكلفة في الخارج</p>
            <p>خدمات تطوير الويب والبرمجيات</p>
          </div>
        </div>
        <div className="grid grid-cols-3 pt-16 place-items-center">
          {aboutText.map(({ icon, title, description }) => (
            <div className="flex gap-5   ">
              <div>{icon}</div>
              <div className="bg-primary h-6 w-[1px]"></div>
              <div>
                <h3 className="text-gray-800 font-medium text-lg">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[url('/images/bg.jpg')] flex justify-center items-center  relative  bg-cover bg-fixed  h-[600px] ">
        <div className="bg-black w-full h-full opacity-50 absolute  "></div>
        <div className=" relative  container text-center    ">
          <h2 className="text-primary text-xl">
            نص تجريبي يحتوي على بعض النصوص التي تستخدم في التصميم.
          </h2>
          <p className="text-white text-3xl">
            نص تجريبي يحتوي على بعض النصوص التي تستخدم في التصميم.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
