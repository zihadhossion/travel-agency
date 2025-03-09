import React from "react";
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from "@/data/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type DeskNavProps = {
  onHandleNav: () => void;
};

const DeskNav = ({ onHandleNav }: DeskNavProps) => {
  const [navBg, setNavBg] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(!navBg);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`${
        navBg ? "bg-blue-950 shadow-md" : "fixed"
      } w-full h-[12vh] transition-all duration-200 fixed z-[1000] mb-[12vh]`}
    >
      <div className="w-[90%] xl:w-[80%] h-full flex items-center justify-between mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 flex flex-col items-center justify-center rounded-full">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <p className="text-xl md:text-2xl text-white uppercase font-bold">
            Aphaa
          </p>
        </div>
        {/* NAVLINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <span
                  className="w-fit relative text-white text-base font-medium after:block after:absolute after:content[''] after:h-0.5 after:bg-yellow-300 after:w-full after:scale-x-0 
                                hover:after:scale-x-100 after:transition after:duration-300 after:origin-right"
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
        {/* BUTTONS */}
        <div className="flex items-center space-x-4">
          <button className="text-black text-base bg-white hover:bg-gray-200 px-8 md:px-10 py-2 md:py-2.5 rounded-lg transition-all duration-200 cursor-pointer">
            Book Now
          </button>
          {/* MENU */}
          <div className="lg:hidden">
            <HiBars3BottomRight
              className="w-8 h-8 text-white cursor-pointer lg:hidden"
              onClick={onHandleNav}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DeskNav;
