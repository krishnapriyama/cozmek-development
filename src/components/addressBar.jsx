const AddressBar = () => {
  return (
    <div className="w-full bg-[#33A1B0] flex 2xl:justify-center md:justify-end justify-center">
    <div className="flex xs1:flex-row flex-col items-center justify-center md:justify-end xs1:gap-2 text-xs md:text-sm text-white py-2  px-4 w-auto 2xl:w-[1440px]">
         <div>
          <span className="hidden md:inline-block">Email:</span>{" "}
          <a href="mailto:cozmekinfo@gmail.com">cozmekinfo@gmail.com</a>
        </div>
        <div>
          <span className="hidden md:inline-block">Phone:</span>{" "}
          <a href="tel:+918921216142">+918921216142</a>,{" "}
          <a href="tel:+918089991943">+918089991943</a>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
