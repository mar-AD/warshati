"use client";

import type React from "react";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  CircularProgress,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Select,
  SelectItem,
  Card,
  CardBody,
  Checkbox,
  Divider,
} from "@nextui-org/react";
import { IoReturnDownBackOutline, IoSettingsOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { StepContext } from "../providers/StepperProvider";
import { useTranslations } from "next-intl";
import { MdPreview } from "react-icons/md";

const getRandomArbitrary = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const ChatbotTrainSection: React.FC = () => {
  const t = useTranslations("appliedAI.chatbot-section");
  const { goToStep } = useContext(StepContext);
  const { theme } = useTheme();

  const [chatbots, setChatbots] = useState<{
    [key: string]: {
      chatbot_name: string;
      chatbot_api: string;
      welcome_message: string;
      model: string;
    };
  }>({});
  const [selectedUUID, setSelectedUUID] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [isTrained, setIsTrained] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasSourceFiles, setHasSourceFiles] = useState(false);

  // Feature toggle states
  const [features, setFeatures] = useState({
    saveChatHistory: true,
    sentimentAnalysis: false,
    typingAnimation: false,
    personalitySelection: false,
  });

  const personalityOptions = [
    { value: "formal", label: t("formal") },
    { value: "casual", label: t("casual") },
    { value: "funny", label: t("funny") },
  ];
  

  // Personality selection state (only used if personalitySelection is enabled)
  const [selectedPersonality, setSelectedPersonality] = useState("formal");

  useEffect(() => {
    const storedChatbots = JSON.parse(localStorage.getItem("chatbots") || "{}");
    setChatbots(storedChatbots);

    const uuid =
      localStorage.getItem("selectedUUID") ||
      Object.keys(storedChatbots)[0] ||
      "";
    setSelectedUUID(uuid);

    const isTrained = localStorage.getItem("isChatbotTrained");
    setIsTrained(!!isTrained);

    // Check if there are source files
    const sourceFiles = localStorage.getItem(`chatbotSources_${uuid}`);
    setHasSourceFiles(!!sourceFiles && JSON.parse(sourceFiles).length > 0);

    // Load saved feature settings
    const savedFeatures = localStorage.getItem(`chatbotFeatures_${uuid}`);
    if (savedFeatures) {
      setFeatures(JSON.parse(savedFeatures));
    }

    // Load saved personality
    const savedPersonality = localStorage.getItem(`chatbotPersonality_${uuid}`);
    if (savedPersonality) {
      setSelectedPersonality(savedPersonality);
    }
  }, []);

  useEffect(() => {
    if (selectedUUID) {
      localStorage.setItem("selectedUUID", selectedUUID);

      // Check if there are source files for this chatbot
      const sourceFiles = localStorage.getItem(
        `chatbotSources_${selectedUUID}`
      );
      setHasSourceFiles(!!sourceFiles && JSON.parse(sourceFiles).length > 0);

      // Load features for the selected chatbot
      const savedFeatures = localStorage.getItem(
        `chatbotFeatures_${selectedUUID}`
      );
      if (savedFeatures) {
        setFeatures(JSON.parse(savedFeatures));
      } else {
        // Reset to defaults if no saved features
        setFeatures({
          saveChatHistory: true,
          sentimentAnalysis: false,
          typingAnimation: false,
          personalitySelection: false,
        });
      }

      // Load personality for the selected chatbot
      const savedPersonality = localStorage.getItem(
        `chatbotPersonality_${selectedUUID}`
      );
      if (savedPersonality) {
        setSelectedPersonality(savedPersonality);
      } else {
        setSelectedPersonality("formal");
      }
    } else {
      localStorage.removeItem("selectedUUID");
    }
  }, [selectedUUID]);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      const step = getRandomArbitrary(5, 15);
      setValue((prev) => (prev >= 100 ? 100 : prev + step));
    }, getRandomArbitrary(1000, 1800));

    if (value === 100) {
      clearInterval(interval);
      onClose();
      localStorage.setItem("isChatbotTrained", "true");

      // Also save the trained status for this specific chatbot
      const trainedChatbots = JSON.parse(
        localStorage.getItem("trainedChatbots") || "{}"
      );
      trainedChatbots[selectedUUID] = true;
      localStorage.setItem("trainedChatbots", JSON.stringify(trainedChatbots));

      goToStep(3); // Now goes to Preview (step 3)
    }

    return () => clearInterval(interval);
  }, [isOpen, value, goToStep, onClose, selectedUUID]);

  const handleTrain = () => {
    if (selectedUUID) {
      // Save feature settings before training
      localStorage.setItem(
        `chatbotFeatures_${selectedUUID}`,
        JSON.stringify(features)
      );

      // Save personality selection if that feature is enabled
      if (features.personalitySelection) {
        localStorage.setItem(
          `chatbotPersonality_${selectedUUID}`,
          selectedPersonality
        );
      }

      setValue(0);
      onOpen();
    }
  };

  const handleBack = () => {
    goToStep(1); // Now goes back to Sources (step 1)
  };

  const handleFeatureChange = (feature: keyof typeof features) => {
    setFeatures((prev) => {
      const updated = { ...prev, [feature]: !prev[feature] };
      // Save immediately on change
      if (selectedUUID) {
        localStorage.setItem(
          `chatbotFeatures_${selectedUUID}`,
          JSON.stringify(updated)
        );
      }
      return updated;
    });
  };

  const handlePersonalityChange = (personality: string) => {
    setSelectedPersonality(personality);
    if (selectedUUID) {
      localStorage.setItem(`chatbotPersonality_${selectedUUID}`, personality);
    }
  };

  return (
    <div className="flex flex-col h-full py-4 md:py-8">
      <div className="flex flex-col sm:flex-row justify-around">
        <Image
          src="/images/Dashboard/training.svg"
          alt="chatbot"
          width={500}
          height={300}
          className="w-full max-w-[320px] h-auto sm:min-h-[348px] sm:w-1/2 mx-auto sm:mx-0 my-auto"
        />

        <div className="sm:w-1/2 flex flex-col justify-center self-end mt-6 sm:mt-0">
          <div>
            <Select
              labelPlacement={"outside-left"}
              label={t("chatbName")}
              placeholder="Select a chatbot"
              selectedKeys={[selectedUUID]}
              defaultSelectedKeys={[selectedUUID]}
              onChange={(e) => setSelectedUUID(e.target.value)}
              classNames={{
                label: "dark:text-gray-300 min-w-max self-center",
              }}
            >
              {Object.keys(chatbots).map((key) => (
                <SelectItem key={key} value={key}>
                  {chatbots[key]?.chatbot_name}
                </SelectItem>
              ))}
            </Select>

            <p className="mt-4 text-justify dark:text-gray-300">
              {t("disc")}
            </p>

            {hasSourceFiles && (
              <div className="mt-2 p-2 bg-green-100 dark:bg-green-900 rounded-md">
                <p className="text-green-700 dark:text-green-300 text-sm">
                  {t("secDisc")}
                </p>
              </div>
            )}
          </div>

          <Card className="mt-6">
            <CardBody>
              <h3 className="text-lg font-medium mb-3">{t("featurs")}</h3>
              <div className="grid grid-cols-1 gap-2">
                <Checkbox
                  isSelected={features.saveChatHistory}
                  onValueChange={() => handleFeatureChange("saveChatHistory")}
                >
                  {t("history")}
                </Checkbox>
                <Checkbox
                  isSelected={features.sentimentAnalysis}
                  onValueChange={() => handleFeatureChange("sentimentAnalysis")}
                >
                  {t("sentiment")}
                </Checkbox>
                <Checkbox
                  isSelected={features.typingAnimation}
                  onValueChange={() => handleFeatureChange("typingAnimation")}
                >
                  {t("typing")}
                </Checkbox>
                <Checkbox
                  isSelected={features.personalitySelection}
                  onValueChange={() =>
                    handleFeatureChange("personalitySelection")
                  }
                >
                  {t("personality")}
                </Checkbox>
              </div>

              {features.personalitySelection && (
                <>
                  <Divider className="my-3" />
                  <h4 className="text-md font-medium mb-2">
                    {t("selectPers")}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {personalityOptions.map((option) => (
                      <Checkbox
                        key={option.value}
                        isSelected={selectedPersonality === option.value}
                        onValueChange={() =>
                          selectedPersonality !== option.value &&
                          handlePersonalityChange(option.value)
                        }
                      >
                        {option.label}
                      </Checkbox>
                    ))}
                  </div>
                </>
              )}
            </CardBody>
          </Card>

          <div className="sm:my-8 mt-6 gap-5 flex justify-between">
            <Button
              color="success"
              onClick={handleBack}
              className="py-2"
              startContent={<IoReturnDownBackOutline />}
            >
              {t("back")}
            </Button>
            <Button
              color="success"
              onClick={handleTrain}
              className="py-2"
              isDisabled={!selectedUUID}
            >
              <IoSettingsOutline />
              {isTrained ? t("retrain") : t("train")}
            </Button>

            {isTrained && (
              <Button
                color="success"
                onClick={() => goToStep(3)}
                className="py-2"
                endContent={<MdPreview />}
              >
                {t("preview")}
              </Button>
            )}
          </div>
        </div>
      </div>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        className="sm:max-w-lg"
      >
        <ModalContent>
          <ModalHeader className="text-lg font-semibold">
            {t("training")}
          </ModalHeader>
          <ModalBody className="flex flex-col items-center">
            <CircularProgress
              aria-label="Loading..."
              strokeWidth={2}
              value={value}
              color="warning"
              classNames={{
                svg: "w-24 h-24",
                indicator: theme === "dark" ? "text-white" : "text-black",
                track: theme === "dark" ? "text-gray-800" : "text-gray-200",
                value: `text-xl ${
                  theme === "dark" ? "text-white" : "text-black"
                }`,
              }}
              showValueLabel
            />
            <p className="mt-4 text-center">
              {t("pls_wait")}
              {hasSourceFiles && (
                <span className="block mt-2 text-sm text-gray-500">
                  {t("processing")}
                </span>
              )}
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChatbotTrainSection;
