import { Link } from "react-router-dom";
import login_bg from "../assets/images/login_bg.png";
import rival_logo from "../assets/images/rival_logo.png";
import SocialLogInButton from "../components/button/SocailLogInButton";
import { Apple_icon, Facebook_icon, Google_icon } from "../assets/icons/socailIcons";

const HomePage = () => {
    return (
        <div className="bg-white flex flex-col justify-center items-center h-screen">
            <Link to="/">
                <img src={rival_logo} alt="logo" className="max-md:mt-2.5 mb-5 w-[150px] h-[60px] mx-auto" />
            </Link>

            <p className="text-center text-2xl font-semibold text-[#111928] mb-5">We are coming soon</p>

            <Link to="/project/2/join" className="font-semibold text-white bg-black px-5 py-1.5 rounded-md hover:bg-slate-600">Join Us</Link>
        </div>
    );
}
 
export default HomePage;