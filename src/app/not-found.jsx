"use client";
import React from "react";
import Animate from "../ErrorJson/erroPage.json";
import Lottie from "lottie-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-96 mx-auto">
      <Lottie animationData={Animate} loop={true}></Lottie>
      <Link
        href={"/"}
        className="relative px-8 py-3 bg-white border border-orange-400 text-orange-500 font-bold rounded-md overflow-hidden group cursor-pointer flex justify-center"
      >
        <span className="absolute inset-0 bg-orange-500 -translate-y-[-100%] group-hover:-translate-y-0 transition-transform duration-400 z-0"></span>
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          BACK TO HOME
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
