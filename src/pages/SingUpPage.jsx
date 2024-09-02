import { Link } from "react-router-dom";
import login_bg from "../assets/images/login_bg.png";
import rival_logo from "../assets/images/rival_logo.png";
import SocialLogInButton from "../components/button/SocailLogInButton";
import { Apple_icon, Facebook_icon, Google_icon } from "../assets/icons/socailIcons";

const SignUpPage = () => {
    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-9 lg:grid-cols-8 h-screen">
            <div className="bg-white max-md:hidden md:col-span-5 lg:col-span-5 h-full">
                <img src={login_bg} alt="login image" className="w-full h-full object-cover" />
            </div>

            <div className="max-md:my-auto md:pt-28 px-5 sm:px-10 lg:px-14 col-span-1 md:col-span-4 lg:col-span-3">
                <img src={rival_logo} alt="logo" className="max-md:mt-2.5 mb-10 w-[150px] h-[60px] mx-auto" />

                <p className="text-center text-2xl font-semibold text-[#111928] mb-10">Create an account</p>

                <div className="flex flex-col gap-3 mb-10">
                    <SocialLogInButton icon={<Google_icon />} text="Continue With Google" link={`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/public/google-login`} />
                    <SocialLogInButton icon={<Facebook_icon />} text="Continue With Facebook" link={`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/public/facebook-login`} />
                    <SocialLogInButton icon={<Apple_icon />} text="Continue With Apple" link="/sign-in" />
                </div>

                <div className="mb-10">
                    <input type="checkbox" className="mr-2 accent-slate-700 w-3.5 h-3.5" />
                    <label className="text-[#6B7280] text-sm font-normal">I do not wish to receive news and promotions from injazgroup Company by email.</label>
                </div>

                <p className="text-center text-base font-normal text-[#374151]">Already have an account? <Link to="/sign-in" className="font-semibold text-[#1F2A59]">Log in</Link></p>
            </div>
        </div>
    );
}
 
export default SignUpPage;