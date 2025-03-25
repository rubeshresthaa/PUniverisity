"use client";
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { TbMessageChatbotFilled } from "react-icons/tb";


const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false); // Toggle chatbot visibility

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-5 right-5 bg-blue-950 text-white p-3 rounded-full shadow-lg transition duration-300 hover:bg-blue-900 cursor-pointer"
      >
        {!isVisible ? <TbMessageChatbotFilled />
 : <IoIosArrowDropdownCircle />
}
      </button>

      {/* Chatbot iframe - shown when isVisible is true */}
      {isVisible && (
        <div className="fixed bottom-16 right-5 w-80 h-96 bg-white shadow-lg border rounded-lg">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/VadjcJnXVRhWg1X3skwmw"
            width="100%"
            height="100%"
            className="rounded-lg"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
