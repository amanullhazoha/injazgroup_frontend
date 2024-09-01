const SocialLogInButton = ({ icon, text, link}) => {
    return (
        <a href={link} className="flex gap-2 items-center justify-center border border-[#D0D5DD] rounded-md py-2">
            {icon}

            <p className="text-base font-semibold text-[#344054]">{text}</p>
        </a>
    );
}
 
export default SocialLogInButton;