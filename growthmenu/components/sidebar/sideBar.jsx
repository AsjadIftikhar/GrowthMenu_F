import React, {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";

import {SideBarData} from "./sideBarData"
import {logout} from "../../services/userServices"

const SideBar = () => {
    const router = useRouter();
    return (
        <aside className="w-64 flex  flex-col bg-white rounded-2xl min-h-full">
            <div
                className="flex p-3 items-center justify-center my-0.5 text-2xl font-semibold text-DarkBlue whitespace-nowrap dark:text-white">
        <span className="border-r-2 pr-1">
          <Image
              src="/images/growthMenu.svg"
              alt=""
              height={"24px"}
              width={"24px"}
          />
        </span>
                <span className="pl-1">Growth</span>
                <span className="text-LightBlue">Menu</span>
            </div>
            <ul className="my-6 py-6 space-y-2 flex flex-col justify-center">
                {SideBarData.map(data =>
                    <li key={data.heading} className="w-full shadow-sm flex justify-center border-l-2 border-DarkBlue"
                        onClick={() => {
                            if (data.heading === "Sign Out") {
                                logout();
                                router.replace(data.path)
                            } else
                                router.push(data.path);
                        }}>
                        <div className="p-3 flex items-center w-full text-gray-900 hover:bg-gray-200">
                            {/*"p-3  flex items-center w-48 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"*/}
                            <span className="rounded-full h-7 w-7 bg-DarkBlue	flex items-center justify-center">
                                      {/*: "rounded-xl h-6 w-6 bg-gray-200	flex items-center justify-center"*/}
                                {data.icon("#fff")}
                                {/*"#A9A9A9"*/}
                          </span>
                            <span
                                className="mx-3">{data.heading}
                                {/*"ml-3 text-gray-400 text-xs"*/}
                              </span>
                        </div>

                    </li>)}
            </ul>
        </aside>
    );
};
export default SideBar;
