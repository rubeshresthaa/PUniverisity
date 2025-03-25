import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

const TopBar = () => {
  return (
    <div
     
      className="bg-gray-950 flex justify-between items-center text-gray-50 px-4 sm:px-12 lg:px-20 py-2 gap-3 md:gap-2 text-xs md:text-lg "
    >
      <div className="flex items-center gap-1">
        <MdCall size={20} />
        <p>+977-21-465240, 590937</p>
      </div>
      <div className="hidden md:flex items-center gap-1 ">
        <FaLocationDot size={20} />
        <p>
          Office Of The Examination Management, Biratnagar, Puspalal Chowk,
          Nepal
        </p>
      </div>
      <div className="flex items-center gap-1">
        <IoIosMail size={20} />
        <p>puoemgt@puexam.edu.np</p>
      </div>
    </div>
  );
};
export default TopBar;
