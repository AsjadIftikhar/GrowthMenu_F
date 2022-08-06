import React from 'react';
import Edit_Profile_Component from "../../components/Profile/edit_profile";
import SideBar from "../../components/sidebar/sideBar"
import TopBar from "../../components/topBar/topBar";


const Account = () => {
    return (
        <React.Fragment>
            <div className="h-screen bg-LightGrey p-8 flex">
                <div>
                    <SideBar/>
                </div>
                <div className="pl-10 w-full">
                    <TopBar/>
                    <Edit_Profile_Component/>
                </div>
            </div>
        </React.Fragment>

)
    ;
}

export default Account;