import students from "../../assets/students.png";
import addon from "../../assets/addon.png";
import workshop from "../../assets/workshop.png";
import CounterCards from "../Homepage/counterCards";

const Counts = () => {
  return (
    <>
      <div className="w-full bg-[#0B7077] bg-opacity-[63%] flex flex-col p-5 md:gap-0 gap-10 md:p-10">
        <div className="w-full text-center flex flex-col">
          <div className="flex justify-center">
            <button className="bg-[#2F57EF] font-bold uppercase bg-opacity-[13%] text-[#2F57EF] px-5 py-2 rounded-3xl text-[16px]">
              why cozmek ?!
            </button>
          </div>
          <h1 className="text-[#192335] md:text-[44px] sm:text-[34px] text-[25px] font-bold uppercase">
            Fostering a Community of <br />
            Lifelong Learners
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 lg:gap-32 2xl:gap-40">
          <div className="md:w-1/5 text-center p-5 rounded shadow-2xl bg-white">
            <div className="flex justify-center">
              <img src={students} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl lg:text-4xl font-bold">
                <CounterCards number={1800} title={"+"} />
              </div>
              <p className="text-[#6B7385] lg:text-2xl font-bold text-center">
                Students
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-center mt-0 md:mt-32 p-5 rounded shadow-2xl bg-white">
            <div className="flex justify-center">
              <img src={addon} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl lg:text-4xl font-bold">
                <CounterCards number={5} title={"+"} />
              </div>{" "}
              <p className="text-[#6B7385] lg:text-2xl font-bold text-center">
                Addon Institutions
              </p>
            </div>
          </div>
          <div className="md:w-1/5 text-center p-5 rounded shadow-2xl bg-white">
            <div className="flex justify-center">
              <img src={workshop} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-2xl lg:text-4xl font-bold">
                <CounterCards number={30} title={"+"} />
              </div>{" "}
              <p className="text-[#6B7385] lg:text-2xl font-bold">Workshops</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counts;
