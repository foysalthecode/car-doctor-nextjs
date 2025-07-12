import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link href={"/home"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>about</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blogs"}>blogs</Link>
      </li>
      <li>
        <Link href={"/contacts"}>contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu}
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image
            src={"/assets/logo.svg"}
            alt="its logo image"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
