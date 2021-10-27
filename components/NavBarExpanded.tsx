import React, { useRef, useEffect, MouseEvent, useState } from "react";

import useMediaQuery from "../utils/hooks/useMediaQuery";

import styles from "./NavBarExpanded.module.scss";

interface INavBarExpanded {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarExpanded = ({ isOpen, setIsOpen }: INavBarExpanded) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      //@ts-ignore
      if (wrapperRef?.current && !wrapperRef?.current?.contains(event.target)) {
        //@ts-ignore
        if (event?.target?.id === "hamburger-menu") return;
        //@ts-ignore
        else setIsOpen(false);
      }
    }

    //@ts-ignore
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //@ts-ignore
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  return (
    <nav
      ref={wrapperRef}
      className={`${styles.NavBarExpanded} ${
        visible ? styles.fadein : styles.fadeout
      } w-[90%] md:w-[95%] bg-white h-[300px] z-50 left-1/2 top-16 md:top-20 -translate-x-1/2 text-center flex flex-col justify-center items-center px-4 fixed ${
        isDesktop ? "hidden" : ""
      }`}
    >
      <a
        className="my-2 text-gray-blue text-base font-medium font-barlow hover:cursor-pointer"
        href="#"
      >
        About
      </a>
      <a
        className="my-2 text-gray-blue text-base font-medium font-barlow hover:cursor-pointer"
        href="#"
      >
        Services
      </a>
      <a
        className="my-2 text-gray-blue text-base font-medium font-barlow hover:cursor-pointer"
        href="#"
      >
        Projects
      </a>
      <button className="w-[200px] my-2 py-3 px-4 bg-yellow rounded-full text-very-dark-desaturated-blue hover:cursor-pointer hover:bg-opacity-30 hover:text-gray-500 transition ease-in-out duration-700">
        <a className="text-base font-black font-barlow" href="#">
          Contact
        </a>
      </button>
    </nav>
  );
};

export default NavBarExpanded;
