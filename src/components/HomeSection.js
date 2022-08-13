import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
const HomeSection = () => {
  return (
    <div className="relative" name="home">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        dir="ltr"
      >
        <SwiperSlide>
          <ImageContainer>
            <TextContainer
              text1="1.7 مليون شخص يعيشون في مخيمات شمال غرب سوريا."
              text2="ساهم معنا للتخفيف من معاناتهم"
            />
            <Image
              src="/images/main1.jpeg"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
              
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <TextContainer
              text1="58% من النازحين المقيمين في المخيمات هم أطفال."
              text2="ساهم معنا لأجلهم"
            />
            <Image
              src="/images/main2.jpeg"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <TextContainer
              text1="أكثر من 60% من النازحين لا يتلقون الخدمات التعليمية."
              text2="فلنتعاون سويًا لأجلهم"
            />
            <Image
              src="/images/main3.jpeg"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <TextContainer
              text1="أكثر من 70% من النازحين يحتاجون إلى رعاية صحية."
              text2="تبرع لأجلهم"
            />
            <Image
              src="/images/main4.jpg"
              layout="fill"
              alt="main"
              objectFit="cover"
              objectPosition="bottom"
              priority
            />
          </ImageContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSection;

const ImageContainer = ({ children }) => {
  return <div className="relative   bg-white h-screen">{children}</div>;
};

const TextContainer = ({ text1, text2 }) => {
  return (
    <div
      className=" container flex justify-center text-center"
      style={{ direction: "rtl" }}
    >
      <div className="text-gray-800 z-30 absolute container  bottom-6 bg-white w-1/2 py-2 rounded-md opacity-60">
        <h2 className=" text-xl lg:text-2xl font-bold ">{text1}</h2>
        <h2 className=" text-xl lg:text-2xl font-bold text-primary">{text2}</h2>
      </div>
    </div>
  );
};
