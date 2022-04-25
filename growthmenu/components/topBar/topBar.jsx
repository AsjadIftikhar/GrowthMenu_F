import React from "react";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between	 w-full h-15 bg-white p-3 rounded-xl	">
      <div className="text-green-500 text-sm font-semibold	">
        Bonus Funds in wallet:$50.00
      </div>
      <div className="flex items-center">
        <div className="mr-5 flex items-center">
          <Image src="/images/bell.svg" width="17px" height="17px" alt="" />
        </div>
        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg
            className="absolute w-10 h-10 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
