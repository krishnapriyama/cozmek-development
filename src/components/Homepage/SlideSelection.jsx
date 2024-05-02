/* eslint-disable no-dupe-keys */
import BasicCardimg from "/src/assets/c01.jpg";
import basiccard from "/src/assets/basic card.png";
import InterMediateCardimg from "/src/assets/InterMediateCardimg.png";
import Intermediatecard from "/src/assets/Intermediate card.png";
import ticMark from "/src/assets/ticMark.png";
import { useRef } from "react";
let slide = [
  {
    mainImage: BasicCardimg,
    roundImages: basiccard,
    Project: "2",
    type: "Premium",
    MainHead: "Data Science and Machine Learning",
    Discription: "Embark on your journey into Data Science and Machine Learning with our 6-month Crash Program. Immerse yourself in the realms of data analysis, machine learning algorithms, and predictive modeling through expertly curated content, assignments, practical sessions, and rigorous exams. Earn Amarican board of education and Cozmek rank board certification, guided by a personal mentor. Engage in real-world data science projects, access our vibrant AI community, and rest assured with our 100% Placement Assistance guarantee.",
    DiscountAmount: "20,000",
    // OriginalAmount: "25,000",
    Curriculum: "Live & Recorded Classes, Assignments, Practicals",
    Evaluation: "Exams and CRBS Certification",
    Assistance: "Mentoring",
    Projects: "Real-World Projects",
    Support: "Live Doubt Clearning Session",
    Placement: "100% Placement Assistance",
  },
  {
    mainImage: InterMediateCardimg,
    roundImages: Intermediatecard,
    Project: "4",
    type: "Premium",
    MainHead: "Python Program",
    Discription:
      "Enhance your Python skills in our 2-month Python Program. With a blend of recorded and live classes, hands-on assignments, and CRBS certifications, you'll master Python fundamentals and advanced concepts. Dive into four comprehensive Python projects to solidify your understanding. Engage with our dynamic Python community, participate in coding challenges, and receive specialized interview preparation for a successful career, all supported by our 100% Placement Assistance guarantee.",
    DiscountAmount: "2,999",
    // OriginalAmount: "45,000",
    Curriculum: "Recorded & Live Classes, Assignments, Practicals",
    Evaluation: "Exams and CRBS Certifications",
    Assistance: "Mentoring",
    Projects: "Real-World Projects",
    Support: "AI Community, Free Hackathon Entry",
    Placement: "100% Placement Assistance",
  }
];

// Register
const handleRegisterClick = () => {
  const registerRef = document.querySelector("#register");
  if (registerRef) {
    registerRef.scrollIntoView({ behavior: "smooth" });
  }
};

const SlideSelection = () => {
  const programeRef = useRef();
  return (
    <div id="programe" ref={programeRef}>
      <div className="flex-wrap w-auto h-auto px-3 py-4 gap-5 flex items-center justify-center md:mt-20 mt-10 my-5">
        {slide.map((card, index) => {
          return (
            <div
              key={index}
              className=" max-w-[32rem] min-h-[720px] xl:h-[750px]  container  bg-[#FAFAFA] rounded-xl overflow-hidden border-2  relative"
              style={{
                flexShrink: 0,
              }}
            >
              <div>
                <img
                  className="w-[40rem] h-[11.8rem]"
                  src={card?.mainImage}
                  alt="CardImage"
                />
              </div>
              <div
                className="w-auto flex xs:w-[246.51px] items-center gap-5 absolute top-[11rem] left-8"
                style={{
                  height: "41px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  background: "#FAFAFA",
                  borderRadius: "40px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <img src={card?.roundImages} className="" alt="cards" />
              </div>

              <div className="p-4 flex flex-col  ">
                <h4 className="font-sans mt-8 mb-2 xss:mb-0 xss:mt-5 text-[#9393b6] pb-3">
                  {card?.type}
                </h4>

                <h1 className="text-2xl text-[#0B7077] text-center flex justify-center items-center font-sans font-bold h-12 mb-4 xss:mb-2">
                  {card?.MainHead}
                </h1>

                <p className="text-sm font-sans text-justify text-[#7b7b96] py-2 leading-normal">
                  {card?.Discription}
                </p>

                <div className="">
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Curriculum</span>:{" "}
                      {card?.Curriculum}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Evaluation</span>:{" "}
                      {card?.Evaluation}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Assistance</span>:{" "}
                      {card?.Assistance}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Projects</span>:{" "}
                      {card?.Projects}
                    </h6>
                  </div>
                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Support</span>:{" "}
                      {card?.Support}
                    </h6>
                  </div>

                  <div className="flex items-center py-1">
                    <img src={ticMark} className="w-6 mr-2 inline" alt="." />
                    <h6 className="text-base">
                      <span className="font-bold">Placement</span>:{" "}
                      {card?.Placement}
                    </h6>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5">
                  <div className="flex gap-3 font-extrabold">
                    <h2 className="text-green-500 text-sm  xs:text-lg xs1:text-2xl">
                      ₹ {card?.DiscountAmount}
                    </h2>
                    <h2 className="line-through text-red-500 text-xs  xs:text-md xs1:text-xl">
                      {card?.OriginalAmount}
                    </h2>
                  </div>

                  <button
                    className="bg-[#0B7077] hover:bg-[#329aa1] p-2 rounded-md text-white capitalize"
                    onClick={handleRegisterClick}
                  >
                    enroll now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideSelection;
