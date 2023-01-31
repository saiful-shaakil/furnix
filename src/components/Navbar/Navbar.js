import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { AiOutlineMenu, AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white z-10">
      <div className="flex items-center font-medium justify-around">
        <div className="p-5 md:w-auto w-full flex justify-between">
          <h1 className="font-pacifico text-4xl cursor-pointer pb-4">Furnix</h1>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <HiOutlineXMark /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          {/* <Button /> */} <p>Button</p>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white  z-10 fixed bottom-0 overflow-y-auto w-full top-0 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li className="p-5 md:w-auto w-full flex justify-between">
            <h1 className="font-pacifico text-4xl cursor-pointer pb-4">
              Furnix
            </h1>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <HiOutlineXMark /> : <AiOutlineMenu />}
            </div>
          </li>
          <NavLinks />
          <div className="py-5 px-5">
            <button className="bg-secondary px-2 py-1 w-full rounded-full hover:bg-primary mt-7 font-bold">
              Log In
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
