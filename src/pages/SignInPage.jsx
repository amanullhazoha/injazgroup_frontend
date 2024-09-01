import login_bg from "../assets/images/login_bg.png"
import SocialLogInButton from "../components/button/SocailLogInButton";
import { Apple_icon, Facebook_icon, Google_icon } from "../assets/icons/socailIcons";

const SignInPage = () => {
    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-9 lg:grid-cols-8 h-screen">
            <div className="bg-white max-md:hidden md:col-span-5 lg:col-span-5 h-full">
                <img src={login_bg} alt="login image" className="w-full h-full object-cover" />
            </div>

            <div className="max-md:my-auto md:pt-20 px-5 sm:px-10 lg:px-20 col-span-1 md:col-span-4 lg:col-span-3">
                <p className="text-center text-2xl font-semibold text-[#111928] mb-10">Log In</p>

                <div className="flex flex-col gap-3">
                    <SocialLogInButton icon={<Google_icon />} text="Continue With Google" link={`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/public/google-login`} />
                    <SocialLogInButton icon={<Facebook_icon />} text="Continue With Facebook" link={`${process.env.REACT_APP_BACKEND_BASE_URL}/api/v1/public/facebook-login`} />
                    <SocialLogInButton icon={<Apple_icon />} text="Continue With Apple" link="/" />
                </div>
            </div>
        </div>
    );
}
 
export default SignInPage;