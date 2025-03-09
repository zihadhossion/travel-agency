"use client";

import React from "react";
import DeskNav from "./DeskNav";
import MobNav from "./MobNav";

const Navbar = () => {
  const [showNav, setShowNav] = React.useState(false);
  const handleShowNav = () => setShowNav(!showNav);

  return (
    <>
      <DeskNav onHandleNav={handleShowNav} />
      <MobNav showNav={showNav} onHandleNav={handleShowNav} />
    </>
  );
};

export default Navbar;
