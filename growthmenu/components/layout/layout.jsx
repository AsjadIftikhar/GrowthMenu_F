import React from "react";
import SideBar from "../sidebar/sideBar";
import TopBar from "../topBar/topBar";
import ButtonCard from "../buttonCard/buttonCard";
import Image from "next/image";

const Layout = ({children}) => {
    return (
        <>
            <div className="h-screen bg-LightGrey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
};

export default Layout;