import React from "react";

import Profile_Component from "../../components/profile";
import Footer from "../../components/footer";


const Profile = () => {
    return (
        // <div className="bg-LightGrey">
        //     <div className="bg-LightGrey container mx-auto py-16">
        //         <Profile_Component/>
        //     </div>
        // </div>
        <div className="bg-LightGrey">
            <div className="container mx-auto pt-8 pb-16">
                <Profile_Component/>

            </div>
            <Footer/>
        </div>
    )
}

export default Profile