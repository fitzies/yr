"use client";

import Link from "next/link";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center justify-center my-10 mx-20 gap-4 font">
      <Link
        href={"/"}
        className="mr-auto flex flex-col items-start cursor-pointer"
      >
        <h1>YR</h1>
        <p className="text-sm">‎</p>
      </Link>
      <div className="absolute flex items-center justify-center gap-20 mx-auto">
        <div
          className="flex flex-col items-start cursor-pointer duration-150 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h1>Browse</h1>
          <p className="text-light text-sm">Lorem ipsum dolor sit.</p>
          {isDropdownOpen && <Dropdown />}
        </div>
        <Link
          href={"/ranking"}
          className="flex flex-col items-start cursor-pointer duration-150"
        >
          <h1>Ranking</h1>
          <p className="text-light text-sm">Lorem ipsum dolor sit.</p>
        </Link>
      </div>
      <Link
        href={"/create"}
        className="ml-auto flex flex-col items-start cursor-pointer hover:-translate-y-1 duration-150"
      >
        <h1>Create</h1>
        <p className="text-sm">‎</p>
      </Link>
    </div>
  );
};

export default Nav;
