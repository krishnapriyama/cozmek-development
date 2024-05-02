import { useState, useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/contactus_animation.json";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
  const generateToast = (msg) => {
    toast.success(msg, { position: "bottom-right" });
  };

  const [formdata, setFormData] = useState({
    Email: "",
    FullName: "",
    Coures: "",
    PhoneNumber: "",
  });

  const [errors, setErrors] = useState({
    Email: "",
    FullName: "",
    Coures: "",
    PhoneNumber: "",
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formdata.Email.trim()) {
      newErrors.Email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formdata.Email)) {
      newErrors.Email = "Invalid email format";
      isValid = false;
    }

    if (!formdata.FullName.trim()) {
      newErrors.FullName = "Full Name is required";
      isValid = false;
    }

    if (!formdata.Coures) {
      newErrors.Coures = "Course selection is required";
      isValid = false;
    }

    if (!formdata.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formdata.PhoneNumber)) {
      newErrors.PhoneNumber = "Invalid phone number format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = () => {
    if (validateForm()) {
      console.log(formdata);
      setFormData({
        Email: "",
        FullName: "",
        Coures: "",
        PhoneNumber: "",
      });
      fetch(
        "https://script.google.com/macros/s/AKfycbwEcsjNy4Ru-61KMARVpTxcJif07GvGNKmhvkLylW6f4GdnIDZB5yvtOuaqMJ5juM7G/exec",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formdata).toString(),
        }
      )
        .then(() => {
          generateToast("Registeration Completed");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const registerRef = useRef();
  return (
    <div id="register" ref={registerRef}>
      <div
        className="bg-[#0B7077] bg-opacity-[63%] flex justify-center items-center"
        id="contactUs"
      >
        <div className="w-full lg:w-[90%] lg:flex text-[#FFFFFF]">
          {/* Left Img */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="w-1/2 lg:w-full">
              <Lottie options={defaultOptions} height="auto" width="90%" />
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-3">
            <div className="flex flex-col gap-5 items-center">
              <div className="flex justify-center">
                <button className="bg-[#FFFFFF] bg-opacity-[13%] px-5 py-2 rounded-3xl text-[16px]">
                  WANT TO JOIN ?!
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-center sm:text-xl">
                  Prepare yourself to enhance your skills and adapt your
                  perspective to <br />
                  align with the demands of the next century using COZMEK
                  <br />
                  <span className="font-bold">
                    No ads, No trails, No commitments
                  </span>
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-full lg:max-w-lg bg-white px-8 pt-6 pb-8">
                  <div className="mb-4">
                    <label className="block text-[#242731] text-[25px] sm:text-[31px] font-bold">
                      Get to know the COURSE !
                    </label>
                    <p className="text-[#575F6E] text-xs sm:text-sm">
                      Fill in the registration data. It will take a couple of
                      minutes.
                      <br />
                      All you need is a phone number and e-mail
                    </p>
                  </div>

                  <form id="gform">
                    <div className="mb-4">
                      <label className="text-black">E-MAIL</label>
                      <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Email && "border-red-500"
                          }`}
                        id="username"
                        type="email"
                        name="Email"
                        placeholder="alex_manager@gmail.com"
                        value={formdata?.Email}
                        onChange={(e) => {
                          const { value, name } = e.target;
                          setFormData((prevState) => ({
                            ...prevState,
                            [name]: value,
                          }));
                        }}
                      />
                      {errors.Email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.Email}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="text-black">FULL NAME</label>
                      <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.FullName && "border-red-500"
                          }`}
                        id="username"
                        type="text"
                        name="FullName"
                        placeholder="John Doe"
                        value={formdata?.FullName}
                        onChange={(e) => {
                          const { value, name } = e.target;
                          setFormData((prevState) => ({
                            ...prevState,
                            [name]: value,
                          }));
                        }}
                      />
                      {errors.FullName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.FullName}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="text-black">COURSE</label>
                      <select
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.Coures && "border-red-500"
                          }`}
                        id="course"
                        name="Coures"
                        onChange={(e) => {
                          const { value, name } = e.target;
                          setFormData((prevState) => ({
                            ...prevState,
                            [name]: value,
                          }));
                        }}
                        value={formdata?.Coures}
                      >
                        <option value="">Select a course</option>
                        <option value="AI Crash Course Programe (6-Months)">
                          Data Science and Machine Learning
                        </option>
                        <option value="AI Expert Course Programe (1-Year)">
                          Python Program
                        </option>
                      </select>
                      {errors.Coures && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.Coures}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="text-black">PHONE NUMBER</label>
                      <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.PhoneNumber && "border-red-500"
                          }`}
                        id="username"
                        type="number"
                        placeholder="000 0000 0000"
                        name="PhoneNumber"
                        onChange={(e) => {
                          const { value, name } = e.target;
                          setFormData((prevState) => ({
                            ...prevState,
                            [name]: value,
                          }));
                        }}
                        value={formdata?.PhoneNumber}
                      />
                      {errors.PhoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.PhoneNumber}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-end mt-5">
                      <button
                        className="bg-[#0093B0] text-white font-bold py-2 px-6"
                        onClick={(e) => {
                          e.preventDefault();
                          submitHandler();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
