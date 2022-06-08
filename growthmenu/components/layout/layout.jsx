import React from "react";
import SideBar from "../sidebar/sideBar";
import TopBar from "../topBar/topBar";
import {useRouter} from 'next/router';

const Layout = ({children}) => {
    const router = useRouter()

    //else: For Auth Pages we don't want Top Bar and Side Bar
    if (router.asPath !== '/login' && router.asPath.match('/register') === null) {
        return (
            <div className="h-screen bg-LightGrey p-8 flex">
                <SideBar/>
                <div className="pl-10 w-full">
                    <TopBar/>
                    {children}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {children}
            </div>
        )
    }
};

export default Layout;
