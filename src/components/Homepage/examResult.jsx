import { useEffect } from "react";
import Examicon from "../../assets/examicon.png";
import { Link } from "react-router-dom";
const ExamResult = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex justify-center w-auto">
        <div className="flex p-10 gap-5">
          <img src={Examicon} alt="" className="w-10 h-10" />
          <div className="xl:flex gap-5">
            <h1 className="text-xl text-[#192335CC] xs:text-2xl md:text-4xl font-extrabold uppercase">
              Discover Your Academic Achievements
            </h1>
            <Link to="/examresults" className="items-end flex">
              <span className="text-blue-600 ">Click here to view more...</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamResult;
