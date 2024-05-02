import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import Slide from "../Homepage/slide";
import c1 from "/src/assets/c01.jpg";
import c2 from "/src/assets/c02.jpg";
import c3 from "/src/assets/c03.jpg";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css";
import "swiper/css/navigation";

let card = [
  {
    mainImage: c1,
    type: "Online",
    MainHead: "Artificial intelligence and Machine learning",
    Duration: "6 months",
    Certificate: "CRBC, ABE",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
    DiscountAmount: "20,000",
    // OriginalAmount: "25,000",
  },
  {
    mainImage: c2,
    type: "Online",
    MainHead: "Python Program",
    Duration: "2 months",
    Certificate: "CRBC",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
    DiscountAmount: "2,999",
    // OriginalAmount: "45,000",
  },
  {
    mainImage: c3,
    type: "Offline",
    MainHead: "International deploma in Artificial intelligence",
    Duration: "6 months",
    Certificate: "CRBC, ABE",
    Curriculum: "Live and recorded classes",
    Support: "100% placement assistance and personal mentor",
    DiscountAmount: "2,999",
    // OriginalAmount: "45,000",
  },
];

const YourComponent = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{ clickable: true }}
        className=" xs:w-[22.5rem] overflow-hidden xs:h-auto xl1:h-[37.5rem] xl:w-[30.5rem]  xl:h-[32.5rem] h-auto w-auto "
      >
        {card.map((Card, index) => {
          return (
            <SwiperSlide key={index} className="p-0 m-0 h-fit">
              <Slide card={Card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default YourComponent;
