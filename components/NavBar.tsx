import { useState, useEffect } from "react";

import Image from "next/image";

import useMediaQuery from "../utils/hooks/useMediaQuery";

interface INavbar {
  handleClick: () => void;
  isOpen: boolean;
}

const NavBar = ({ handleClick, isOpen }: INavbar) => {
  const [ariaExpanded, setAriaExpanded] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    setAriaExpanded(isOpen);
  }, [isOpen]);

  const triggerClick = () => {
    setAriaExpanded(true);
    handleClick();
  };

  return (
    <div className="flex flex-row justify-between items-center px-4 py-4 w-full bg-[#3dbffe] fixed top-0 z-10">
      <Image src="/logo.svg" alt="" width={124} height={24} layout="fixed" />
      <div className="flex items-center">
        {isDesktop ? (
          <nav className="flex flex-row justify-between align-middle items-center">
            <a
              className="mx-4 text-white text-base font-black font-barlow hover:cursor-pointer"
              href="#"
            >
              About
            </a>
            <a
              className="mx-4 text-white text-base font-black font-barlow hover:cursor-pointer"
              href="#"
            >
              Services
            </a>
            <a
              className="mx-4 text-white text-base font-black font-barlow hover:cursor-pointer"
              href="#"
            >
              Projects
            </a>
            <div className="mx-4 py-3 px-6 bg-white rounded-full text-very-dark-desaturated-blue hover:cursor-pointer hover:bg-opacity-30 hover:text-white transition ease-in-out duration-700">
              <a className="text-base font-black font-barlow" href="#">
                Contact
              </a>
            </div>
          </nav>
        ) : (
          <button
            type="button"
            aria-label="navigational menu"
            aria-expanded={ariaExpanded}
            onClick={triggerClick}
          >
            <Image
              id="hamburger-menu"
              aria-hidden="true"
              src="/icon-hamburger.svg"
              alt="dropdown menu"
              width={24}
              height={18}
              layout="fixed"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
