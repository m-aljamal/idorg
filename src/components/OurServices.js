import React from "react";
import { services } from "../utils/text";

const OurServices = () => {
  return (
    <section className="bg-gray-50 py-20 " name="services">
      <div className="container">
        <div className=" pb-10 text-center">
          <h2 className="font-medium text-3xl text-gray-700">خدماتنا</h2>
          <p className="text-gray-600 w-3/4 mx-auto  mt-4">
            Deserunt irure consectetur magna veniam laboris aute excepteur. Nisi
            mollit do aute dolor. Dolore magna laborum ipsum nulla magna aliqua.
            Nostrud amet laborum sit in officia anim fugiat. Cupidatat mollit
            proident ea duis eu aute sit sint laborum qui veniam occaecat
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 ">
          {services.map(({ id, description, icon, title }) => (
            <div
              key={id}
              className="border p-8 text-center rounded-md bg-white border-b-primary
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
    </section>
  );
};

export default OurServices;
