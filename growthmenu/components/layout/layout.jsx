import React, {useState} from "react";
import SideBar from "../sidebar/sideBar";
import TopBar from "../topBar/topBar";
import {useRouter} from 'next/router';

const Layout = ({children}) => {
    const router = useRouter()
    const [isLogin, setisLogin] = useState();
    if (router.asPath !== '/login') {
        return (
            <div className="h-screen bg-Grey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>
                    {children}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                {children}
            </div>
        )
    }
};

export default Layout;
