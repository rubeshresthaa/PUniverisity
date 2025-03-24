"use client";
import { useState, useEffect } from "react";

const Chatbot = () => {
  const [isVisible, setIsVisible] = useState(false); // Initially set to false (chatbot hidden)
  const [scriptLoaded, setScriptLoaded] = useState(false); // To track if the script is already loaded

  useEffect(() => {
    if (isVisible && !scriptLoaded) {
      // Load the script only when the chatbot becomes visible
      const script = document.createElement("script");

      // Chatbase script
      script.innerHTML = `
        (function(){
          if(!window.chatbase || window.chatbase("getState") !== "initialized"){
            window.chatbase = (...arguments) => {
              if(!window.chatbase.q) window.chatbase.q = [];
              window.chatbase.q.push(arguments);
            };
            window.chatbase = new Proxy(window.chatbase, {
              get(target, prop) {
                if(prop === "q") return target.q;
                return (...args) => target(prop, ...args);
              }
            });
          }

          const onLoad = function() {
            const script = document.createElement("script");
            script.src = "https://www.chatbase.co/embed.min.js";
            script.id = "VadjcJnXVRhWg1X3skwmw";
            script.domain = "www.chatbase.co";
            document.body.appendChild(script);
          };

          if(document.readyState === "complete") {
            onLoad();
          } else {
            window.addEventListener("load", onLoad);
          }
        })();
      `;
      
      document.body.appendChild(script);
      setScriptLoaded(true); // Mark the script as loaded
    } else if (!isVisible && scriptLoaded) {
      // Cleanup: Remove the script when the chatbot is hidden
      const chatbaseScript = document.getElementById("VadjcJnXVRhWg1X3skwmw");
      if (chatbaseScript) {
        document.body.removeChild(chatbaseScript);
      }
      setScriptLoaded(false); // Reset the script loaded state
    }

    // Cleanup function when component unmounts
    return () => {
      const chatbaseScript = document.getElementById("VadjcJnXVRhWg1X3skwmw");
      if (chatbaseScript) {
        document.body.removeChild(chatbaseScript);
      }
    };
  }, [isVisible]); // Only trigger effect when visibility changes

  // const handleToggle = () => {
  //   setIsVisible((prev) => !prev); // Toggle chatbot visibility
  // };

  return (
    <div>
     
     
    </div>
  );
};

export default Chatbot;
