import React, {useState} from "react";
import {SideBarData} from "./sideBarData";
import "./sideBar.module.css";
import {useRouter} from "next/router";
import Image from "next/image";

const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const router = useRouter();
    return (
        <aside className="w-64 flex  flex-col bg-white rounded-2xl	min-h-full	">
            <div
                className="flex p-3 items-center justify-center my-0.5 text-2xl font-semibold text-DarkBlue whitespace-nowrap dark:text-white">
        <span className="border-r-2 pr-1">
          <Image
              src="/images/growthMenu.svg"
              alt=""
              height={"20px"}
              width={"20px"}
          />
        </span>
                <span className="pl-1">Growth</span>
                <span className="text-LightBlue">Menu</span>
            </div>
            <ul className="pt-4 mt-4 space-y-2 flex flex-col justify-center border-t border-gray-200 dark:border-gray-700">
                {SideBarData.map((data, index) => (
                    <li
                        key={data}
                        className={
                            selected === index
                                ? "w-full flex justify-center border-l-4 border-DarkBlue"
                                : "w-full flex justify-center"
                        }
                        onClick={() => {
                            setSelected(index);
                            router.push(data.path);
                        }}
                    >
                        <a
                            href="#"
                            className={
                                selected === index
                                    ? "p-3 shadow-md	flex items-center w-48 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                    : "p-3  flex items-center w-48 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            }
                        >
              <span
                  className={
                      selected === index
                          ? "rounded-xl h-6 w-6 bg-DarkBlue	flex items-center justify-center"
                          : "rounded-xl h-6 w-6 bg-gray-200	flex items-center justify-center"
                  }
              >
                {data.icon(selected === index ? "#fff" : "#A9A9A9")}
              </span>
                            <span
                                className={
                                    selected === index
                                        ? "ml-3 font-semibold	 text-xs"
                                        : "ml-3 text-gray-400 text-xs"
                                }
                            >
                {data.heading}
              </span>
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
export default SideBar;
