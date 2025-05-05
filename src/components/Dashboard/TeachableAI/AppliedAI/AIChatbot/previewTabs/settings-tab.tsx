"use client";

import type React from "react";

import { Card, CardBody, Divider, Chip } from "@nextui-org/react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

interface SettingsTabProps {
  state: ReturnType<typeof import("./useChatbotState").useChatbotState>;
}

const SettingsTab: React.FC<SettingsTabProps> = ({ state }) => {
  const t = useTranslations("appliedAI.ai_chatbot");
  const { chatConfig, features, hasSourceFiles, sourceFiles } = state;

  return (
    <Card className="p-4">
      <CardBody>
        <h2 className="text-xl font-semibold mb-4">
          {t("settings_tab.chatbot_settings")}
        </h2>

        <div className="space-y-4">
          <div>
            <p className="font-medium">{t("settings_tab.name")}</p>
            <p className="text-gray-600 dark:text-gray-300">
              {chatConfig?.chatbot_name || t("common.not_set")}
            </p>
          </div>

          <Divider />

          <div>
            <p className="font-medium">{t("settings_tab.model")}</p>
            <p className="text-gray-600 dark:text-gray-300">
              {chatConfig?.model || t("common.not_set")}
            </p>
          </div>

          <Divider />

          <div>
            <p className="font-medium">{t("settings_tab.api_endpoint")}</p>
            <p className="text-gray-600 dark:text-gray-300">
              {chatConfig?.chatbot_api || t("common.not_set")}
            </p>
          </div>

          <Divider />

          <div>
            <p className="font-medium">{t("settings_tab.source_files")}</p>
            {hasSourceFiles ? (
              <div className="mt-2">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {sourceFiles.length} {t("settings_tab.files_uploaded")}
                </p>
                <div className="max-h-[100px] overflow-y-auto">
                  {sourceFiles.map((file, index) => (
                    <div key={index} className="flex items-center text-sm mb-1">
                      <IoDocumentTextOutline className="mr-1 text-blue-500" />
                      <span>{file.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">
                {t("settings_tab.no_source_files")}
              </p>
            )}
          </div>

          <Divider />

          <div>
            <p className="font-medium">{t("settings_tab.features")}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {features.saveChatHistory && (
                <Chip color="primary" variant="flat">
                  {t("settings_tab.feature_save_chat")}
                </Chip>
              )}
              {features.sentimentAnalysis && (
                <Chip color="success" variant="flat">
                  {t("settings_tab.feature_sentiment")}
                </Chip>
              )}
              {features.typingAnimation && (
                <Chip color="warning" variant="flat">
                  {t("settings_tab.feature_typing")}
                </Chip>
              )}
              {features.personalitySelection && (
                <Chip color="secondary" variant="flat">
                  {t("settings_tab.feature_personality")}:{" "}
                  {localStorage.getItem(
                    `chatbotPersonality_${localStorage.getItem("selectedUUID")}`
                  ) || "formal"}
                </Chip>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default SettingsTab;
