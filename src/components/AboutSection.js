import React from "react";
import { aboutText } from "../utils/text";
import Image from "next/image";
const AboutSection = () => {
  return (
    <main name="about">
      <section className="py-24 container">
        <div className="text-center">
          <h2 className="text-primary text-lg font-bold">İNSANLIĞIN IRMAĞI</h2>
          <div className="lg:text-2xl text-xl text-gray-700 pt-2 ">
            <p>
              منظمة مجتمع مدني غير حكومية ولا ربحية، مرخصة تعمل في سوريا وتركيا،
              وهي مستقلة ولا تتبع لأي جهة سياسية أو إيديولوجية، كما تتمتع
              المنظمة بشخصية وذمة مالية مستقلة، تعمل على تأمين الاحتياجات
              الأساسية والضرورية للمجتمع المدني، من أجل خدمة الفرد وبناء الإنسان
              والذي بدوره يؤدي إلى بناء المجتمع المدني المتجانس.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 pt-16  space-y-5 md:space-y-0">
          {aboutText.map(({ icon, title, description, id }) => (
            <div className="flex gap-3 items-start" key={id}>
              <div className=" relative h-6 w-10">
                <Image src={icon} layout="fill" objectFit="cover" />
              </div>
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
          <h2 className="text-primary text-3xl font-bold mb-5">أغث سوريا</h2>
          <p className="text-white lg:text-2xl text-xl">
            مأساة إنسانية حلّت على أهلنا في سوريا لتزيد من قساوة الحياة والظروف
            المعيشية الصعبة.
          </p>
          <p className="text-white lg:text-2xl text-xl">
            عشرات الجرحى بحاجة عاجلة إلى العلاج...
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
