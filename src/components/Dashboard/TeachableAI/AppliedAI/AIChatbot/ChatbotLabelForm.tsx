"use client";

import React, { useEffect, useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { StepContext } from "../providers/StepperProvider";
import { useTranslations } from "next-intl";
import { IoReturnDownForwardOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "../SubmitButton";
import { sendChatbotLabels } from "../actions/chatbot_labeling";

const ChatbotLabelForm: React.FC = () => {
  const t = useTranslations("appliedAI.ai_chatbot");
  const { goToStep } = React.useContext(StepContext);
  const [isTrained, setIsTrained] = React.useState(false);
  const [selectedModel, setSelectedModel] = React.useState("");

  const initialState = {
    success: false,
    data: {
      uuid: "",
      chatbot_name: "",
      model: "",
      chatbot_api: "",
      welcome_message: "",
    },
  };

  const [state, formAction] = useFormState(sendChatbotLabels, initialState);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const storedUUID = localStorage.getItem("selectedUUID");
    if (storedUUID) {
      setSessionId(storedUUID);
    }
  }, []);

  useEffect(() => {
    if (state.success && state.data) {
      const { uuid, chatbot_name, model, chatbot_api, welcome_message } =
        state.data;
      // Show success message
      toast.success(`Chatbot created successfully!`);

      // Store chatbot data locally for other components to use
      localStorage.setItem(
        "chatbots",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("chatbots") || "{}"),
          [uuid]: { chatbot_name, model, chatbot_api, welcome_message },
        })
      );

      // Save the uuid for sources section
      localStorage.setItem("selectedUUID", uuid);

      // Navigate to the next step
      goToStep(1);
    } else if (state.error) {
      // Show error message
      toast.error(`Error: ${state.error}`);
    }

    // Check if there are any trained chatbots
    const chatbots = localStorage.getItem("chatbots");
    if (chatbots) {
      setIsTrained(true);
    }
  }, [state, goToStep]);

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(event.target.value);
  };

  const aiModels = [
    { value: "gpt-4o", label: "GPT-4o" },
    { value: "gpt-4", label: "GPT-4" },
    { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
    { value: "claude-3-opus", label: "Claude 3 Opus" },
    { value: "claude-3-sonnet", label: "Claude 3 Sonnet" },
    { value: "llama-3-70b", label: "Llama 3 70B" },
    { value: "mistral-large", label: "Mistral Large" },
  ];

  return (
    <div>
      <h1 className="my-6 text-lg font-medium leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
        {t("create_chatbot")}
      </h1>
      <form action={formAction}>
        <Input type="hidden" name="session_id" value={sessionId} />
        <Input
          label={t("name_placeholder")}
          className="pb-3 sm:mb-1"
          isRequired
          required
          name="chatbot_name"
        />
        <Select
          label={t("model_label")}
          placeholder={t("model_placeholder")}
          className="pb-3 sm:mb-1"
          isRequired
          required
          name="model"
          value={selectedModel}
          onChange={handleModelChange}
        >
          {aiModels.map((model) => (
            <SelectItem key={model.value} value={model.value}>
              {model.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          label={t("api_placeholder")}
          className="pb-3 sm:mb-1"
          isRequired
          required
          name="chatbot_api"
        />
        <Input
          label={t("welcome_message_placeholder")}
          className="pb-3 sm:mb-1"
          isRequired
          required
          name="welcome_message"
        />
        <div className="flex w-full gap-4 mt-5">
          <SubmitButton
            message={t("send")}
            pending_message={t("sending")}
            className="p-1"
          />
          {isTrained && (
            <Button
              color="success"
              className="px-8"
              onClick={() => goToStep(1)}
            >
              {t("g_train")} <IoReturnDownForwardOutline />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChatbotLabelForm;
