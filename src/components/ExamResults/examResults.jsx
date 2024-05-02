/* eslint-disable react/no-unescaped-entities */
import Exam from "../../assets/exam.jpg";
const examResults = () => {
  return (
    <>
      <div className="h-auto xl:flex custom-gradient font-medium text-[#192335CC] flex-row">
        {/* Left taglines */}
        <div className="xl:w-1/2 w-full p-10 px-10 flex justify-center flex-col items-center">
          <div className="w-3/4 xl:ml-14">
            <h1 className="pt-4 text-xl xs:text-2xl md:text-4xl font-extrabold uppercase text-epilogue">
              Annual Exam Results Released
            </h1>
            <span
              className="text-lg xs:text-xl md:text-3xl font-normal uppercase text-epilogue"
              style={{
                fontFamily: "Epilogue, sans-serif",
              }}
            >
              Discover Your Academic Achievements
            </span>
            <p className="py-4 text-[#6B7385] text-base md:text-md font-normal tracking-widest capitalize">
              The wait is over! We're excited to announce that the annual exam
              results are now available. Your dedication and hard work have
              culminated in this moment of achievement. Access your grades,
              celebrate your successes, and strategize for the future. Let's
              continue the journey of learning together.
              <span className="py-2 text-[#6B7385] block text-outfit font-bold tracking-wide capitalize">
                Your hard work has paid off! Click the button below to unveil
                your performance in the recent examinations.
              </span>
            </p>
            <div className="sm:flex flex-row gap-8">
              <button className="bg-[#0B7077] hover:bg-[#329aa1] p-3 px-8 rounded-md sm:text-base text-xs sm:w-auto w-full text-white uppercase">
                Ilahiya Addon Batch 2023
              </button>
              <button className="bg-[#0B7077] hover:bg-[#329aa1] p-3 px-8 rounded-md sm:text-base text-xs sm:mt-0 mt-3 sm:w-auto w-full text-white uppercase">
                Addon batch
              </button>
            </div>
          </div>
        </div>

        {/* Right Slider */}
        <div className="w-auto xl:w-1/2 sm:py-10 box-border py-4 px-2 xs1:px-6 ">
          <div className="flex justify-center">
            <img src={Exam} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default examResults;
