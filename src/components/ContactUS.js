import React from "react";
import Image from "next/image";
import { PhoneIcon, AtSymbolIcon } from "@heroicons/react/outline";
const ContactUS = () => {
  return (
    <section name="contactus">
      <div className="grid grid-cols-2  ">
        <div className="bg-gray-900 text-white container py-12 text-center">
          <h2 className="text-gray-400">للتواصل معنا</h2>
          <p className="text-2xl"> يُرجى ملء النموذج التالي</p>
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
          <Image src="/images/contactUs.jpg" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div>
        <div className=" container py-10 flex justify-around">
          <div className="flex gap-2">
            <p className="text-2xl">info@idorg.org</p>
            <AtSymbolIcon className="w-7 h-7 text-primary " />
          </div>
          <div className="flex gap-2">
            <p className="text-2xl" style={{ direction: "ltr" }}>
              +903488020992
            </p>
            <PhoneIcon className="w-7 h-7 text-primary " />
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.6064328078656!2d37.131499999999996!3d36.7123354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fd182979207a5%3A0xa1406f00cbc53b3f!2sYap%C4%B1%20Kredi%20Bankas%C4%B1%20ATM!5e0!3m2!1sar!2str!4v1660319194622!5m2!1sar!2str"
          className="w-full h-[300px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="py-3 text-center">
        <p>
          جميع الحقوق محفوظة
          <span>{new Date().getFullYear()}</span>
          <span className="text-primary mx-2">İNSANLIĞIN IRMAĞI</span>
        </p>
      </div>
    </section>
  );
};

export default ContactUS;
