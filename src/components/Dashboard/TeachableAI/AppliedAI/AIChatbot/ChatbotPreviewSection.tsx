"use client";

import type React from "react";

import { useContext, useState } from "react";
import {
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
  IoDocumentTextOutline,
  IoReturnDownBackOutline,
} from "react-icons/io5";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useChatbotState } from "./previewTabs/useChatbotState";

// Import the tab sections
import ChatTab from "./previewTabs/chat-tab";
import LogsTab from "./previewTabs/logs-tab";
import SettingsTab from "./previewTabs/settings-tab";
import { StepContext } from "../providers";

const ChatbotPreviewSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("chat");
  const t = useTranslations("appliedAI.ai_chatbot");
  const { goToStep } = useContext(StepContext);

  // Use the shared state hook
  const chatbotState = useChatbotState();

  return (
    <div className="min-h-[80vh] py-6">
      <div className="flex flex-col md:flex-row h-full gap-6">
        <div className="flex flex-col mx-auto max-w-full">
          <Tabs
            className="mx-auto"
            aria-label="Options"
            color="primary"
            variant="bordered"
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key.toString())}
          >
            <Tab
              key="chat"
              title={
                <div className="flex items-center space-x-2">
                  <IoChatbubbleEllipsesOutline size={20} />
                  <span>{t("common.chat")}</span>
                </div>
              }
            >
              <ChatTab state={chatbotState} />
            </Tab>

            <Tab
              key="logs"
              title={
                <div className="flex items-center space-x-2">
                  <IoDocumentTextOutline size={20} />
                  <span>{t("common.chat_logs")}</span>
                </div>
              }
            >
              <LogsTab state={chatbotState} />
            </Tab>

            <Tab
              key="settings"
              title={
                <div className="flex items-center space-x-2">
                  <IoSettingsOutline size={20} />
                  <span>{t("common.settings")}</span>
                </div>
              }
            >
              <SettingsTab state={chatbotState} />
            </Tab>
          </Tabs>

          <Button
            color="success"
            onClick={() => goToStep(2)}
            className="py-2 mt-4"
            startContent={<IoReturnDownBackOutline />}
          >
            {t("common.back_to_training")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPreviewSection;
