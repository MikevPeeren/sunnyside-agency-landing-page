import React, { useRef, useEffect, MouseEvent, useState } from "react";

import styles from "./NavBarExpanded.module.scss";

interface INavBarExpanded {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarExpanded = ({ isOpen, setIsOpen }: INavBarExpanded) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

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
    <div
      ref={wrapperRef}
      className={`${styles.NavBarExpanded} ${
        visible ? styles.fadein : styles.fadeout
      } w-[90%] md:w-[95%] bg-white h-[300px] absolute z-50 left-1/2 top-16 md:top-20 -translate-x-1/2 text-center flex flex-col justify-center items-center px-4`}
    >
      <span className="my-2 text-gray-blue text-base font-medium font-barlow hover:cursor-pointer">
        About
      </span>
      <span className="my-2 text-gray-blue text-base font-medium font-barlow hover:cursor-pointer">
        Services
      </span>
      <span className="my-2 text-gray-blue text-base font-medium font-barlow hover:cursor-pointer">
        Projects
      </span>
      <div className="w-[200px] my-2 py-3 px-4 bg-yellow rounded-full text-very-dark-desaturated-blue hover:cursor-pointer hover:bg-opacity-30 hover:text-gray-500 transition ease-in-out duration-700">
        <span className="text-base font-black font-barlow">Contact</span>
      </div>
    </div>
  );
};

export default NavBarExpanded;
