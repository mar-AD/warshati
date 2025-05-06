
import ChatbotStepsWrapper from "@/components/Dashboard/TeachableAI/AppliedAI/AIChatbot/ChatbotStepsWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot",
};

const AIChatbot = () => {
  return (
    <section className="flex flex-col flex-grow">
      <ChatbotStepsWrapper />
    </section>
  );
};

export default AIChatbot;
