import React, {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";

import {SideBarData} from "./sideBarData"
import {logout} from "../../services/userServices"

const SideBar = () => {
    const router = useRouter();
    return (
        <aside className="w-72 flex flex-col bg-white rounded-2xl min-h-full">
            <div
                className="flex p-3 items-center justify-center my-0.5 text-2xl font-semibold text-DarkBlue whitespace-nowrap">
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
                            <span className="rounded-full h-7 w-7 bg-DarkBlue flex items-center justify-center">
                                {data.icon("LightGrey")}
                          </span>
                            <span
                                className="mx-3 text-gray-700">{data.heading}
                              </span>
                        </div>

                    </li>)}
            </ul>
        </aside>
    );
};
export default SideBar;
