import React from "react";
import Image from "next/image";
import { contactInfo } from "../utils/text";
const ContactUS = () => {
  return (
    <section name="contactus">
      <div className="grid grid-cols-2  ">
        <div className="bg-gray-900 text-white container py-12  text-center ">
          <h2 className="text-gray-400">
            املأ النموذج وسنكون على اتصال قريبًا!
          </h2>
          <p className="text-2xl"> هل أنت جاهز لطلب عرض أسعار؟</p>
          <form>
            <input
              placeholder="الاسم"
              className="border-b  border-gray-500 bg-gray-900 block w-full py-2 my-5 outline-none"
            />
            <input
              placeholder="الايميل"
              className="border-b border-gray-500  bg-gray-900 block w-full py-2 my-5 outline-none"
            />
            <input
              placeholder="رقم الهاتف"
              className="border-b border-gray-500  bg-gray-900 block w-full py-2 my-5 outline-none"
            />
            <textarea
              placeholder="الموضوع"
              className="border-b  border-gray-500 bg-gray-900 block w-full py-2 my-5 outline-none"
            />
            <button className="bg-primary py-1 px-4 rounded-md font-medium text-lg">
              أرسل الرسالة
            </button>
          </form>
        </div>
        <div className="relative h-full">
          <Image src="/images/contact.jpg" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="bg-gray-50 py-8">
        <div className=" flex justify-between container text-center  ">
          {contactInfo.map(({ id, icon, title, text }) => (
            <div key={id}>
              <div className="flex justify-center py-2">{icon}</div>
              <h2 className="font-medium">{title}</h2>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
