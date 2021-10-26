import Image from "next/image";

import useMediaQuery from "../utils/hooks/useMediaQuery";

interface INavbar {
  handleClick: () => void;
}

const NavBar = ({ handleClick }: INavbar) => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className="flex flex-row justify-between items-center px-4 py-4 w-full bg-[#3dbffe] fixed top-0 z-10">
      <h1 className="text-white lowercase font-fraunces font-black text-base md:text-4xl">
        Sunnyside
      </h1>
      <div className="flex items-center">
        {isDesktop ? (
          <div className="flex flex-row justify-between align-middle items-center">
            <span className="mx-4 text-white text-base font-black font-barlow hover:cursor-pointer">
              About
            </span>
            <span className="mx-4 text-white text-base font-black font-barlow  hover:cursor-pointer">
              Services
            </span>
            <span className="mx-4 text-white text-base font-black font-barlow  hover:cursor-pointer">
              Projects
            </span>
            <div className="mx-4 py-3 px-6 bg-white rounded-full text-very-dark-desaturated-blue hover:cursor-pointer hover:bg-opacity-30 hover:text-white transition ease-in-out duration-700">
              <span className="text-base font-black font-barlow ">Contact</span>
            </div>
          </div>
        ) : (
          <div onClick={handleClick}>
            <Image
              id="hamburger-menu"
              src="/icon-hamburger.svg"
              alt="hamburger"
              width={24}
              height={18}
              layout="fixed"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
