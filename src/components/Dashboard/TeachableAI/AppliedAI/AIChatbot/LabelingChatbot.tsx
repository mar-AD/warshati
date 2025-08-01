"use client";

import { useTheme } from "next-themes";
import { ChatbotIcon } from "../Icons";
import ChatbotLabelForm from "./ChatbotLabelForm";



const LabelingChatbot: React.FC = () => {
  const {theme} =  useTheme()
  const iconColor = theme === "dark" ? "white" : "black";
  return (
    <div className="flex justify-around items-center flex-wrap-reverse md:flex-nowrap">
      <div className="w-full xl:max-w-xl">
        <ChatbotLabelForm />
      </div>
      <div className="w-full md:max-w-md max-w-full">
        <ChatbotIcon color = {iconColor} />
      </div>
    </div>
  );
};

export default LabelingChatbot;
