import React from "react";
import { aboutText } from "../utils/text";

const AboutSection = () => {
  return (
    <main className="py-16 container" name="about">
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
            <div className="bg-primary h-6 w-1"></div>
            <div>
              <h3 className="text-gray-800 font-medium text-lg">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AboutSection;
