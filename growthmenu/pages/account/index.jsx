import React from 'react';
import Profile_Component from "../../components/profile";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar"

function Account() {
    return (
        <div className="h-screen bg-LightGrey p-8 flex">
            <div>
                <SideBar/>
            </div>
            <div className="pl-10 w-full">
                <TopBar/>
                <Profile_Component/>
            </div>
        </div>
    );
}

export default Account;