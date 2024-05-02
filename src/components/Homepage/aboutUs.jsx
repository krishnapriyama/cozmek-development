import Lottie from "react-lottie";
import animationData from "../../assets/AboutUs_animation.json";
import Tick from "/src/assets/ticMark.png";
import { useRef } from "react";

const list = [
  "Purely skill-based, advanced curriculum, and structure.",
  "24*7 mentoring.",
  "Hybrid method of teaching.",
  "Cozmek Rank Board System (CRBS) based examinations and ranking.",
  "100% Placement Support.",
  "Provides self-competitive learning ecosystem.",
  "Personality development classes.",
];

const AboutUs = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const aboutRef = useRef();
  return (
    <div id="about" ref={aboutRef}>
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
        <div className="md:w-1/2 w-full mb-4 sm:mb-0">
          <Lottie options={defaultOptions} height="auto" width="90%" />
        </div>
        <div className="md:w-1/2 w-full px-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-[#192335] opacity-90">
            Know About Cozmek Private Limited
          </h1>
          <p className="text-base my-3 leading-7 text-gray-700">
            <span className="font-bold uppercase">Cozmek</span> serves as your
            gateway to a realm of transformative education, aiming to
            revolutionize the learning experience by providing a diverse range
            of courses that empower individuals of all age groups. Embrace the
            transformative force of education and unleash your maximum potential
            with <span className="font-bold uppercase">Cozmek</span>.
          </p>
          <div className="flex flex-col space-y-2">
            {list.map((data, index) => (
              <div key={index} className="flex items-center">
                <img src={Tick} className="w-6 mr-2" alt="." />
                <h6 className="text-base">{data}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
