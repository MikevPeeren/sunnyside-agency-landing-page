import React, { useRef, useEffect, MouseEvent } from "react";

import styles from "./NavBarExpanded.module.scss";

interface INavBarExpanded {
  handleClick: Function;
  isOpen: boolean;
}

const NavBarExpanded = ({ handleClick, isOpen }: INavBarExpanded) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      //@ts-ignore
      if (wrapperRef?.current && !wrapperRef?.current?.contains(event.target)) {
        if (event?.target?.id === "hamburger-menu") return;
        else handleClick();
      }
    }

    //@ts-ignore
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //@ts-ignore
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className={`${styles.NavBarExpanded} ${
        isOpen ? styles.fadein : styles.fadeout
      } w-[90%] md:w-[95%] bg-white h-[300px] absolute z-50 left-1/2 top-16 md:top-20 -translate-x-1/2 text-center flex flex-col justify-center items-center px-4`}
    >
      <span className="my-2 text-gray-blue text-base font-medium hover:cursor-pointer">
        About
      </span>
      <span className="my-2 text-gray-blue text-base font-medium hover:cursor-pointer">
        Services
      </span>
      <span className="my-2 text-gray-blue text-base font-medium hover:cursor-pointer">
        Projects
      </span>
      <div className="w-[200px] my-2 py-3 px-4 bg-yellow rounded-full text-very-dark-desaturated-blue hover:cursor-pointer hover:bg-opacity-30 hover:text-gray-500 transition ease-in-out duration-700">
        <span className="text-base font-black ">Contact</span>
      </div>
    </div>
  );
};

export default NavBarExpanded;
