import Profile_Component from "../../components/profile";
import Footer from "../../components/footer";


const Profile = () => {
    return (
        <div className="bg-LightGrey">
            <div className="container mx-auto pt-8 pb-16">
                <Profile_Component/>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile