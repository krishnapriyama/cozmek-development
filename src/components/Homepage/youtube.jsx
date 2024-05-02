/* eslint-disable react/no-unescaped-entities */
import youtubeLogo from "/src/assets/youtube.png";

const youtube = () => {
  const phoneNumber = "918089991943";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <>
      <div className="w-full flex flex-col lg:gap-0 gap-10 lg:flex-row  mt-24 mb-24">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[70%] border border-gray-400 lg:w-4/5 h-64 flex shadow-2xl justify-center items-center">
            <div className="xs:block hidden">
              <img src={youtubeLogo} alt="" className="p-5" />
            </div>
            <div className="flex flex-col mr-10 gap-5 p-3">
              <div className="flex justify-center xl:justify-end">
                <h4 className="xl:text-3xl text-xl font-semibold text-center w-3/4">
                  Explore Our Youtube Channel
                </h4>
              </div>
              <div className="xl:text-end text-center">
  <a href="https://youtube.com/@JerryJohnAI?si=38YQH01z6vjKHlO2" target="_blank" rel="noopener noreferrer">
    <button
      className="bg-[#0B7077] hover:bg-[#329aa1] rounded px-3 py-2 text-white"
    >
      Subscribe
    </button>
  </a>
</div>


            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-[70%] border border-gray-400 lg:w-4/5 p-5 lg:p-10 sm:h-64 h-auto flex flex-col justify-center gap-5 shadow-2xl">
            <div>
              <button className="border text-sm px-4 py-1 rounded-2xl text-[#6B7385]">
                Trending Now
              </button>
            </div>
            <div className="flex justify-center">
              <div className="text-[#192335] w-[80%] lg:w-[100%] text-xs xl:text-sm  flex flex-col justify-center items-center">
                <h1 className="text-lg xl:text-2xl font-semibold capitalize">
                  Inquire about your questions via WhatsApp
                </h1>
                <p className="text-[#6B7385] w-[85%]">
                  Certainly! You're welcome to utilize WhatsApp as a platform
                  for addressing any questions or concerns you may have. Don't
                  hesitate to reach out.
                </p>
              </div>
            </div>
            <div className="text-end">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#0B7077] hover:bg-[#329aa1] rounded px-3 py-2 text-white">
                  Whatsapp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default youtube;
