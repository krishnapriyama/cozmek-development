import HeroSection from "../../components/Homepage/heroSection";
import AboutUs from "../../components/Homepage/aboutUs";
// import ExamResult from "../../components/Homepage/examResult";
import SlideSelection from "../../components/Homepage/SlideSelection";
import Whatyouwillget from "../../components/Homepage/whatyouwillget";
import Youtube from "../../components/Homepage/youtube";
import Contactus from "../../components/Homepage/contactus";
import WorkingWith from "../../components/Homepage/workingWith";
import Counts from "../../components/Homepage/counts";
import Testimonals from "../../components/Homepage/testimonals";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <SlideSelection />
      {/* <ExamResult/ /> */}
      <Whatyouwillget />
      <WorkingWith />
      <Youtube />
      <Counts />
      <Testimonals />
      <Contactus />
    </div>
  );
};

export default Home;
