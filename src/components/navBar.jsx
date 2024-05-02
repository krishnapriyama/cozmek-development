import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Logo_Cozmek_Black.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Contact
  const handleContactClick = () => {
    const footerRef = document.querySelector("#footer");
    if (footerRef) {
      footerRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  // About
  const handleAboutClick = () => {
    const aboutRef = document.querySelector("#about");
    if (aboutRef) {
      aboutRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Register
  const handleRegisterClick = () => {
    const registerRef = document.querySelector("#register");
    if (registerRef) {
      registerRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
  
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <Link to="/">
            <div className="container flex items-center gap-2">
              <img
                className="w-8 h-8 xs:w-8 sx:h-8 lg:w-10 lg:h-10 flex-shrink-0 hover:cursor-pointer"
                src={Logo}
                alt="Logo"
              />
              <div className="flex flex-col">
                <span className="hidden md:inline uppercase font-bold text-lg">
                  COZMEK pvt ltd
                </span>
                <span className="hidden md:inline text-xs -mt-2">
                  Unlock the power of AI
                </span>
              </div>
            </div>
          </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
               <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {navbarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={
              "md:flex flex-grow items-center  md:mt-0 mt-5" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex flex-col gap-5 md:flex-row items-center list-none md:ml-auto">
            <div className="text-[14px]">
              <button className="uppercase" onClick={handleContactClick}>
                Contact
              </button>
            </div>
            <div className="text-[14px]">
              <button className="uppercase" onClick={handleAboutClick}>
                About
              </button>
            </div>
            <div className="text-[14px]">
              <button className="uppercase" onClick={handleRegisterClick}>
                Achievements
              </button>
            </div>
            <div className="text-[14px]">
            <button
            className="uppercase text-xs animate-pulse font-semibold text-center border border-[#33A1B0] text-[#33A1B0] py-2 px-3 rounded-lg cursor-pointer hover:border-[#2a8692]"
            onClick={handleRegisterClick}
          >
            Book your slot
          </button>
            </div>
            </div >
          </div>
        </div>
      </nav>
   
    </>



    
  );
};

export default NavBar;
