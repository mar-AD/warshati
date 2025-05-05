"use client";

import React from "react";


import { useTranslations } from "next-intl";
import { StepContext } from "../providers";
import Stepper from "../Stepper";
import LabelingChatbot from "./LabelingChatbot";
import ChatbotSourcesSection from "./ChatbotSourcesSection";
import ChatbotTrainSection from "./ChatbotTrainSection";
import ChatbotPreviewSection from "./ChatbotPreviewSection";

const ProcessCard = () => {
  const { currentStep } = React.useContext(StepContext);
  const t = useTranslations("appliedAI.process-steps");
  const t2 = useTranslations("appliedAI.ai_chatbot");

  return (
    <div className="py-6 px-[30px]">
      <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white mb-6">
        {t2("title")}{" "}
        <span className="text-blue-600 dark:text-blue-500">#</span>.
      </h1>
      <Stepper
        step={currentStep}
        labels={[t("labeling"), t("sources"), t("training"), t("preview")]}
      />
      {currentStep === 0 && <LabelingChatbot />}
      {currentStep === 1 && <ChatbotSourcesSection />}
      {currentStep === 2 && <ChatbotTrainSection />}
      {currentStep === 3 && <ChatbotPreviewSection />}
    </div>
  );
};

export default ProcessCard;
