import { TbGridDots } from "react-icons/tb";


const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <TbGridDots size={20} />
            </span>
            <button className="bg-blue-600 relative px-7 h-9 w-30 rounded-sm text-xl text-white hover:bg-blue-400 text-center">Sign In</button>
        </div>
    );
};

export default ProfileIcon;
