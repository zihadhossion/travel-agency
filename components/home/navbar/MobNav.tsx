import { navLinks } from "@/data/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type MobNavProps = {
  showNav: boolean;
  onHandleNav: () => void;
};

const MobNav = ({ onHandleNav, showNav }: MobNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <>
      {/* Overlay */}
      <div
        className={`${navOpen} w-full h-screen fixed inset-0 bg-black opacity-50 transform transition z-[1001]`}
      ></div>
      <aside
        className={`${navOpen} w-[80%] sm:w-[60%] h-full text-white bg-rose-900 flex 
        flex-col justify-center fixed transform transition-all duration-300 delay-75 space-y-6 z-[1002]`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="text-2xl font-semibold text-center"
          >
            <p className="w-fit text-white text-xl sm:text-3xl border-b-2 pb-1 border-white ml-12">
              {link.label}
            </p>
          </Link>
        ))}
        {/* close bar */}
        <CgClose
          className="w-6 sm:w-8 h-6 sm:h-8 text-white absolute top-2.5 right-5.5 cursor-pointer"
          onClick={onHandleNav}
        />
      </aside>
    </>
  );
};

export default MobNav;
