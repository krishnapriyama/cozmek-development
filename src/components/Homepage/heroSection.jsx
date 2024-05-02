import YourComponent from "./swiper";

const HeroSection = () => {
  // Programe
  const handleProgramClick = () => {
    const programeRef = document.querySelector("#programe");
    if (programeRef) {
      programeRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-auto md:flex custom-gradient font-medium text-[#192335CC] flex-row">
      {/* Left taglines */}
      <div className="md:w-1/2 w-full lg:ml-10 p-10 px-10 2xl:pl-36">
        <h1 className="p-3 bg-white inline-block mt-9">
          🏆 AI: Shaping the Future of Our World
        </h1>
        <h1 className="pt-4 text-2xl xs:text-4xl md:text-6xl font-extrabold uppercase text-epilogue">
          Mastering the Future:
        </h1>
        <span
          className="text-xl xs:text-2xl md:text-4xl font-normal uppercase text-epilogue"
          style={{
            fontFamily: "Epilogue, sans-serif",
          }}>
          AI Pioneering Excellence
        </span>
        <p className="py-4 text-[#6B7385]  text-base md:text-lg font-normal tracking-widest capitalize">
          Through cutting-edge programs and the guidance of seasoned experts, we
          empower individuals of all generations, unlocking their full potential
          in an ever-evolving world.
          <span className="py-2 text-[#6B7385] block text-outfit font-bold tracking-wide capitalize">
            Join us now to secure a future filled with success!
          </span>
        </p>
        <button
          className="bg-[#0B7077] hover:bg-[#329aa1] p-4 px-8 rounded-md text-white"
          onClick={handleProgramClick}>
          View Our Programs
        </button>
      </div>
      {/* Right Slider */}
      <div className="w-auto md:w-1/2 sm:py-10 box-border py-4 px-2 xs1:px-6 ">
        <div className="flex justify-center  box-content">
          <YourComponent />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
