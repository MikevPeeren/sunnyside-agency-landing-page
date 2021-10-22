import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between px-4 pt-6  absolute z-10 w-full">
      <h1 className="text-white text-xl lowercase font-barlow font-black">
        Sunnyside
      </h1>
      <div className="flex items-center">
        <Image
          src="/icon-hamburger.svg"
          alt="facebook"
          width={24}
          height={18}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default NavBar;
