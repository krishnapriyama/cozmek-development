import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import LeftArrow from "/src/assets/left-arrow-.png";
import RightArrow from "/src/assets/right-arrow-6421.png";
import imglogo1 from "/src/assets/workwith1.png";
import imglogo2 from "/src/assets/workwith2.png";
import imglogo3 from "/src/assets/workwith3.png";
import imglogo4 from "/src/assets/workwith4.png";
import imglogo5 from "/src/assets/workwith5.png";
import imglogo6 from "/src/assets/workwith6.png";
import imglogo7 from "/src/assets/workwith1.png";
import imglogo8 from "/src/assets/workwith2.png";
import imglogo9 from "/src/assets/workwith3.png";
import imglogo10 from "/src/assets/workwith4.png";
import imglogo11 from "/src/assets/workwith5.png";
import imglogo12 from "/src/assets/workwith6.png";
import imglogo13 from "/src/assets/workwith1.png";
import imglogo14 from "/src/assets/workwith2.png";
import imglogo15 from "/src/assets/workwith3.png";
import imglogo16 from "/src/assets/workwith4.png";

const logo = [
  imglogo1,
  imglogo2,
  imglogo3,
  imglogo4,
  imglogo5,
  imglogo6,
  imglogo7,
  imglogo8,
  imglogo9,
  imglogo10,
  imglogo11,
  imglogo12,
  imglogo13,
  imglogo14,
  imglogo15,
  imglogo16,
];
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const WorkingWith = () => {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  function calculateSlidesPerView() {
    return window.innerWidth >= 768 ? 6 : 3; // Adjust the breakpoint and slides per view accordingly
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-100% h-auto bg-[#F7F7FA]">
      <div className="md:flex">
        <div className="text-xl py-10 md:text-2xl px-10 md:w-3/4">
          <h2>
            Meet the People build there career with AI; Artifical Intelligence
          </h2>
          <h1 className="font-bold">Who are Working With</h1>
        </div>
        <div className="flex items-center justify-center md:items-end md:justify-end w-full  md:w-1/4  px-2  ">
          {" "}
          <div className="lg:px-6">
            <button className=" rounded-full px-1 " onClick={handlePrev}>
              <img
                className="w-8 md:w-12 lg:w-auto rounded-full hover:bg-[#def3f3]"
                src={LeftArrow}
                alt="Prev"
              />
            </button>
            <button onClick={handleNext} className=" rounded-full px-1">
              <img
                className="w-8 md:w-12 lg:w-auto bg-[#237E7E] hover:bg-[#a4dfdf]  rounded-full"
                src={RightArrow}
                alt="Next"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          autoplay={{ delay: 300 }}
          ref={swiperRef}
          className="w-100% p-4"
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          {logo.map((img, i) => {
            return (
              <SwiperSlide
                key={i}

                className="w-25% md:w-100% flex justify-center">

                <img
                  className="w-20 h-10 sm:w-32 sm:h-20 ml-10 md:w-44"
                  src={img}
                  alt="Logo"
                />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default WorkingWith;
