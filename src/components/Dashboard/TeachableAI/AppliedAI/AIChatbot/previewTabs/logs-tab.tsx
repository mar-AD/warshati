"use client";

import type React from "react";

import { useState } from "react";
import {
  IoFilterOutline,
  IoRefreshOutline,
  IoTrashOutline,
  IoDownloadOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import {
  Card,
  CardBody,
  Button,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { formatTime, getSentimentColor, truncateText } from "./chatUtils";
import type { Message } from "./useChatbotState";

interface LogsTabProps {
  state: ReturnType<typeof import("./useChatbotState").useChatbotState>;
}

const LogsTab: React.FC<LogsTabProps> = ({ state }) => {
  const t = useTranslations("appliedAI.ai_chatbot");
  const {
    messages,
    setMessages,
    chatSessions,
    setChatSessions,
    selectedChatSession,
    setSelectedChatSession,
    features,
    saveMessages,
    updateChatSessions,
  } = state;

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [expectedResponse, setExpectedResponse] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleReviseAnswer = (message: Message) => {
    setSelectedMessage(message);
    setExpectedResponse(message.expectedResponse || "");
    onOpen();
  };

  const handleUpdateAnswer = () => {
    if (!selectedMessage) return;

    // Update the message with the expected response
    const updatedMessages = messages.map((msg) =>
      msg.id === selectedMessage.id ? { ...msg, expectedResponse } : msg
    );

    setMessages(updatedMessages);
    saveMessages(updatedMessages);

    // Update the selected chat session
    if (selectedChatSession) {
      const updatedSession = {
        ...selectedChatSession,
        messages: updatedMessages,
      };
      setSelectedChatSession(updatedSession);
      updateChatSessions(updatedSession);
    }

    onClose();
  };

  const handleDeleteChatSession = (sessionId: string) => {
    const updatedSessions = chatSessions.filter(
      (session) => session.id !== sessionId
    );
    setChatSessions(updatedSessions);
    saveChatSessions(updatedSessions);

    // If we deleted the selected session, select another one
    if (selectedChatSession && selectedChatSession.id === sessionId) {
      if (updatedSessions.length > 0) {
        setSelectedChatSession(updatedSessions[0]);
        setMessages(updatedSessions[0].messages);
      } else {
        // Create a new empty session if we deleted all sessions
        const newSession = {
          id: `session-${Date.now()}`,
          title: "New Conversation",
          lastMessage: "",
          timestamp: new Date(),
          messages: [],
        };
        setChatSessions([newSession]);
        setSelectedChatSession(newSession);
        setMessages([]);
        state.setWelcomeMessageSent(false); // Allow welcome message to be sent again
      }
    }
  };

  const handleExportChat = () => {
    // Create a JSON file with the chat history
    const exportData = selectedChatSession
      ? selectedChatSession.messages.map((msg) => ({
          timestamp: new Date(msg.timestamp).toISOString(),
          role: msg.role,
          content: msg.content,
          expectedResponse: msg.expectedResponse || "",
          sentiment: msg.sentiment || "",
        }))
      : [];

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `chatbot-conversation-${
      new Date().toISOString().split("T")[0]
    }.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleClearChat = () => {
    // Create a new empty session
    const newSession = {
      id: `session-${Date.now()}`,
      title: "New Conversation",
      lastMessage: "",
      timestamp: new Date(),
      messages: [],
    };

    setChatSessions([...chatSessions, newSession]);
    setSelectedChatSession(newSession);
    setMessages([]);
    state.setWelcomeMessageSent(false); // Allow welcome message to be sent again
  };

  const handleSelectChatSession = (session: any) => {
    setSelectedChatSession(session);
    setMessages(session.messages);
  };

  const saveChatSessions = (sessions: any[]) => {
    if (features.saveChatHistory) {
      const selectedUUID = localStorage.getItem("selectedUUID");
      if (selectedUUID) {
        localStorage.setItem(
          `chatSessions_${selectedUUID}`,
          JSON.stringify(sessions)
        );
      }
    }
  };

  return (
    <Card className="p-4">
      <CardBody className="p-0">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left side - Chat sessions list */}
          <div className="w-[400px] border-r dark:border-gray-700 overflow-y-auto">
            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                {t("logs_tab.chat_logs")}
              </h2>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="light"
                  startContent={<IoRefreshOutline />}
                >
                  {t("logs_tab.refresh")}
                </Button>
                <Button
                  size="sm"
                  variant="light"
                  startContent={<IoFilterOutline />}
                >
                  {t("logs_tab.filter")}
                </Button>
                <Button
                  size="sm"
                  color="primary"
                  startContent={<IoDownloadOutline />}
                  onClick={handleExportChat}
                >
                  {t("logs_tab.export")}
                </Button>
              </div>
            </div>

            <div className="divide-y dark:divide-gray-700">
              {chatSessions.map((session) => (
                <div
                  key={session.id}
                  className={`p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    selectedChatSession?.id === session.id
                      ? "bg-gray-100 dark:bg-gray-800"
                      : ""
                  }`}
                  onClick={() => handleSelectChatSession(session)}
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium truncate max-w-[150px]">
                        {truncateText(session.lastMessage, 30)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(session.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    <Button
                      isIconOnly
                      size="sm"
                      color="danger"
                      variant="light"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteChatSession(session.id);
                      }}
                    >
                      <IoTrashOutline />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4">
              <Button
                color="primary"
                variant="light"
                className="w-full"
                onClick={handleClearChat}
              >
                {t("logs_tab.new_conversation")}
              </Button>
            </div>
          </div>

          {/* Right side - Selected chat conversation */}
          <div className="w-[600px] overflow-y-auto p-4">
            {selectedChatSession ? (
              <>
                <div className="flex flex-col gap-4">
                  {selectedChatSession.messages.map((message: Message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === "user"
                            ? "bg-primary text-white rounded-tr-none"
                            : "bg-gray-100 dark:bg-gray-800 rounded-tl-none"
                        }`}
                      >
                        <div className="flex flex-col">
                          <p>{message.content}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs opacity-70">
                              {formatTime(message.timestamp)}
                            </span>
                            {features.sentimentAnalysis &&
                              message.role === "user" &&
                              message.sentiment && (
                                <Chip
                                  size="sm"
                                  color={getSentimentColor(message.sentiment)}
                                  className="ml-2"
                                >
                                  {message.sentiment}
                                </Chip>
                              )}
                          </div>
                          {message.role === "assistant" &&
                            message.sourceCitation && (
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <IoDocumentTextOutline className="mr-1" />
                                {t("logs_tab.source")}: {message.sourceCitation}
                              </div>
                            )}
                          {message.role === "assistant" && (
                            <div className="flex items-center mt-2 justify-end">
                              <Button
                                size="sm"
                                variant="light"
                                className="text-xs ml-2"
                                onClick={() => handleReviseAnswer(message)}
                              >
                                {t("logs_tab.revise_answer")}
                              </Button>
                            </div>
                          )}
                          {message.role === "assistant" &&
                            message.expectedResponse && (
                              <div className="mt-2 p-1 bg-green-100 dark:bg-green-900 rounded text-xs">
                                <p className="font-semibold">
                                  {t("logs_tab.expected")}
                                </p>
                                <p>{message.expectedResponse}</p>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">
                  {t("logs_tab.select_conversation")}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardBody>

      {/* Revise Answer Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader>{t("revise_modal.revise_answer")}</ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-1">
                  {t("revise_modal.user_message")}
                </p>
                <Textarea
                  readOnly
                  value={
                    selectedMessage?.role === "assistant" && messages.length > 0
                      ? messages[
                          messages.findIndex(
                            (m) => m.id === selectedMessage?.id
                          ) - 1
                        ]?.content || ""
                      : ""
                  }
                  className="w-full"
                />
              </div>

              <div>
                <p className="font-medium mb-1">
                  {t("revise_modal.bot_response")}
                </p>
                <Textarea
                  readOnly
                  value={selectedMessage?.content || ""}
                  className="w-full"
                />
              </div>

              <div>
                <p className="font-medium mb-1">
                  {t("revise_modal.expected_response")}
                </p>
                <Textarea
                  placeholder={t("revise_modal.expected_placeholder")}
                  value={expectedResponse}
                  onChange={(e) => setExpectedResponse(e.target.value)}
                  className="w-full"
                  minRows={4}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="flat" onPress={onClose}>
              {t("revise_modal.cancel")}
            </Button>
            <Button color="primary" onPress={handleUpdateAnswer}>
              {t("revise_modal.update_answer")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default LogsTab;
