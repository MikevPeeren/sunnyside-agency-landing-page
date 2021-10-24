import Image from "next/image";

import useMediaQuery from "../utils/hooks/useMediaQuery";

const NavBar = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className="flex flex-row justify-between px-4 pt-6  absolute z-10 w-full">
      <h1 className="text-white lowercase font-fraunces font-black text-base md:text-4xl">
        Sunnyside
      </h1>
      <div className="flex items-center">
        {isDesktop ? (
          <div className="flex flex-row justify-between align-middle items-center">
            <p className="mx-4 text-white text-base font-black">About</p>
            <p className="mx-4 text-white text-base  font-black">Services</p>
            <p className="mx-4 text-white text-base  font-black">Projects</p>
            <div className="mx-4 py-2 px-4 bg-white rounded-2xl">
              <p className="text-very-dark-desaturated-blue text-base font-black">
                Contact
              </p>
            </div>
          </div>
        ) : (
          <Image
            src="/icon-hamburger.svg"
            alt="facebook"
            width={24}
            height={18}
            layout="fixed"
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
