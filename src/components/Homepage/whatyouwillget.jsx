import Whatyouwillget from "/src/assets/Whatyouwillget.png";
import TickSqr from "/src/assets/Tick Square.png";
let points = [
  "Online and Offline Sections",
  "Placement Assistance and Gurantee",
  "Exploring through wide range of TECHNOLOGIES",
];

let popins = {
  fontFamily: "Poppins, sans-serif",
};
const whatyouwillget = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mx-3 my-4 mt-10 md:mt-20 mb-20">
      <div className="md:w-1/2 flex ml-10 md:ml-0 justify-center">
        <div className="flex">
          <div className="relative w-full h-full">
            <img
              src={Whatyouwillget}
              className="w-[600px]"
              alt="What you will get"
            />
            <div className="bg-[#EFD8C9] rounded-3xl absolute bottom-0 left-0 w-[85%] h-[77%] -z-10"></div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-0 mt-10 ml-10 md:ml-0 lg:p-6 xl:px-[6rem] ">
        <h1
          className="text-2xl md:text-4xl md:font-bold  py-4 text-[#393939]"
          style={popins}
        >
          What Will You <span className="text-[#0B7077]">Get</span>?
        </h1>
        <p className="text-base md:text-lg text-[#6C6C6C] lg:mr-14">
          Step into a future world filled with enhanced career prospects,
          extensive technological exploration opportunities, and the possibility
          of landing your dream job.
        </p>
        <div className="list-disc mt-4 ">
          {points.map((point, i) => {
            return (
              <div
                key={i}
                className=" flex items-center py-6 pl-6 w-10/12 my-6 xs:my-3 md:my-6 text-sm "
                style={{
                  borderRadius: "16px",
                  background: "#FFF",
                  boxShadow: "0px -2px 128px 0px rgba(5, 142, 110, 0.14)",
                  ...popins,
                }}
              >
                <div>
                  <img
                    src={TickSqr}
                    className="inline pr-5"
                    alt="Tick squire"
                  />
                </div>
                <div>
                  <h4 className="text-base md:text-lg inline ">{point}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default whatyouwillget;
