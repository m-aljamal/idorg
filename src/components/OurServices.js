import Image from "next/image";
import React from "react";
import { accordionData, achivmentsData, services } from "../utils/text";

const OurServices = () => {
  const [open, setOpen] = React.useState({
    id: 0,
  });
  return (
    <section name="services" className="bg-gray-50">
      <div className="  py-20 container">
        <div className=" pb-10 text-center">
          <h2 className="font-medium text-3xl text-gray-700">خدماتنا</h2>
          <p className="text-gray-600 w-3/4 mx-auto  mt-4">
            Deserunt irure consectetur magna veniam laboris aute excepteur. Nisi
            mollit do aute dolor. Dolore magna laborum ipsum nulla magna aliqua.
            Nostrud amet laborum sit in officia anim fugiat. Cupidatat mollit
            proident ea duis eu aute sit sint laborum qui veniam occaecat
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {services.map(({ id, description, icon, title }) => (
            <div
              key={id}
              className="border p-8  text-center rounded-md bg-white border-b-primary
               hover:bg-gray-700
                hover:text-white
                text-gray-600
                transition duration-150 ease-out hover:scale-110"
            >
              <div className="bg-primary w-20 h-20 flex justify-center items-center rounded-full mx-auto">
                {icon}
              </div>

              <h2 className=" pt-8 pb-2 font-semibold text-lg">{title}</h2>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-14 ">
        <div className="container grid grid-cols-4 place-items-center ">
          {achivmentsData.map(({ id, number, title, icon }) => (
            <div key={id} className="flex items-center gap-2">
              {icon}
              <div>
                <h2 className="text-3xl  font-medium">{number}</h2>
                <p className="text-gray-700">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2   bg-gray-50 items-center">
        <div className=" relative h-full  ">
          <Image src="/images/child.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className=" px-12  py-12     ">
          <div className="py-4  ">
            <h2 className="text-xl text-gray-800">
              نقدم خدماتنا لجميع الأطفال في مناطق الحروب
            </h2>
            <h2 className="font-medium text-2xl">
              خدمات صحية, طبية, اغاثية وتعليمية
            </h2>
          </div>

          <div>
            {accordionData.map(({ id, title, content }) => (
              <Accordion
                key={id}
                id={id}
                title={title}
                content={content}
                setOpen={() =>
                  id === open.id ? setOpen({ id: null }) : setOpen({ id })
                }
                openId={open.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

const Accordion = ({ id, title, content, setOpen, openId }) => {
  return (
    <div className="py-2 " onClick={setOpen}>
      <div className="flex  justify-between  bg-white p-4 cursor-pointer ">
        <h2>
          <span className="text-red-500 font-bold">{id + 1}. </span>
          {title}
        </h2>
        {openId === id ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
      <div
        className={`${
          openId === id
            ? "max-h-60  transition-[max-height]  duration-500 ease-in overflow-hidden"
            : "max-h-0 transition-[max-height] duration-300 ease-out  overflow-hidden"
        } `}
      >
        <p className="py-4">{content}</p>
      </div>
    </div>
  );
};
