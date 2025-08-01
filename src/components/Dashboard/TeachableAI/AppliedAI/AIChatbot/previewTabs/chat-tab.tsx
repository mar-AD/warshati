"use client";

import type React from "react";
import { IoSend, IoRefreshOutline } from "react-icons/io5";
import {
  Card,
  CardBody,
  Divider,
  Button,
  Textarea,
  Avatar,
  Chip,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import {
  analyzeSentiment,
  formatTime,
  getSentimentColor,
  generateCasualResponse,
  generateFormalResponse,
  generateFunnyResponse,
} from "./chatUtils";
import type { Message, ChatSession } from "./useChatbotState";

interface ChatTabProps {
  state: ReturnType<typeof import("./useChatbotState").useChatbotState>;
}

const ChatTab: React.FC<ChatTabProps> = ({ state }) => {
  const t = useTranslations("appliedAI.ai_chatbot");
  const {
    messages,
    setMessages,
    inputMessage,
    setInputMessage,
    isTyping,
    setIsTyping,
    currentTypingMessage,
    hasSourceFiles,
    setTypingMessageContent,
    messagesEndRef,
    chatConfig,
    features,
    selectedChatSession,
    updateChatSessions,
    saveMessages,
  } = state;

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };

    // Add sentiment analysis if enabled
    if (features.sentimentAnalysis) {
      userMessage.sentiment = analyzeSentiment(inputMessage);
    }

    // Add user message to chat
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveMessages(updatedMessages);

    // Update the selected chat session
    if (selectedChatSession) {
      const updatedSession = {
        ...selectedChatSession,
        messages: updatedMessages,
        lastMessage: userMessage.content,
        timestamp: new Date(),
      };
      updateChatSessions(updatedSession);
    }

    setInputMessage("");

    // Generate bot response
    setTimeout(() => {
      let botResponse = "";
      let sourceCitation = "";

      // Check if we should add a source citation (if we have source files)
      if (hasSourceFiles && Math.random() > 0.5) {
        const randomFile =
          state.sourceFiles[
            Math.floor(Math.random() * state.sourceFiles.length)
          ];
        sourceCitation = randomFile?.name || "Source document";
      }

      // Generate response based on personality if enabled
      if (features.personalitySelection) {
        const personality =
          localStorage.getItem(
            `chatbotPersonality_${localStorage.getItem("selectedUUID")}`
          ) || "formal";

        switch (personality) {
          case "formal":
            botResponse = `I appreciate your inquiry. ${generateFormalResponse(
              inputMessage,
              hasSourceFiles
            )}`;
            break;
          case "casual":
            botResponse = `Hey there! ${generateCasualResponse(
              inputMessage,
              hasSourceFiles
            )}`;
            break;
          case "funny":
            botResponse = `Well, well, well! ${generateFunnyResponse(
              inputMessage,
              hasSourceFiles
            )}`;
            break;
          default:
            botResponse = `I understand your message. ${generateFormalResponse(
              inputMessage,
              hasSourceFiles
            )}`;
        }
      } else {
        botResponse = generateFormalResponse(inputMessage, hasSourceFiles);
      }

      // Add bot response with typing animation if enabled
      if (features.typingAnimation) {
        setIsTyping(true);
        setTypingMessageContent(botResponse);
      } else {
        const botMessage: Message = {
          id: `msg-${Date.now()}-bot`,
          role: "assistant",
          content: botResponse,
          timestamp: new Date(),
          sourceCitation: sourceCitation || undefined,
        };
        const newMessages = [...updatedMessages, botMessage];
        setMessages(newMessages);
        saveMessages(newMessages);

        // Update the selected chat session
        if (selectedChatSession) {
          const updatedSession = {
            ...selectedChatSession,
            messages: newMessages,
            lastMessage: botMessage.content,
            timestamp: new Date(),
          };
          updateChatSessions(updatedSession);
        }
      }
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    // Create a new empty session
    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      title: "New Conversation",
      lastMessage: "",
      timestamp: new Date(),
      messages: [],
    };

    state.setChatSessions([...state.chatSessions, newSession]);
    state.setSelectedChatSession(newSession);
    setMessages([]);
    state.setWelcomeMessageSent(false); // Allow welcome message to be sent again
  };

  return (
    <div className="w-[400px] mx-auto flex flex-col justify-between gap-3">
      <Card className="p-4 space-y-5 h-auto" radius="lg">
        <CardBody className="p-0 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            {/* Chatbot name and model */}
            <div className="flex items-center">
              <Avatar
                name={chatConfig?.chatbot_name || t("chat_tab.ai_assistant")}
                size="sm"
                className="mr-2"
              />
              <div>
                <p className="font-semibold">
                  {chatConfig?.chatbot_name || t("chat_tab.ai_assistant")}
                </p>
                <p className="text-xs text-gray-500">
                  {t("chat_tab.model_label")}:{" "}
                  {chatConfig?.model || t("common.unknown")}
                </p>
              </div>
            </div>

            {/* New Chat Button */}
            <Button
              isIconOnly
              color="primary"
              variant="light"
              onClick={handleClearChat}
              aria-label={t("chat_tab.new_chat")}
            >
              <IoRefreshOutline size={20} />
            </Button>
          </div>

          <Divider orientation="horizontal" className="my-2" />

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto p-2">
              {/* Regular messages */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-white dark:text-black rounded-tr-none"
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
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing animation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 dark:bg-gray-800 rounded-tl-none">
                    <div className="flex flex-col">
                      <p>
                        {currentTypingMessage}
                        <span className="animate-pulse">▋</span>
                      </p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs opacity-70">
                          {formatTime(new Date())}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        </CardBody>

        <Divider orientation="horizontal" className="my-2" />

        <div className="flex items-end gap-2">
          <Textarea
            placeholder={t("chat_tab.type_message")}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            minRows={1}
            maxRows={4}
            className="flex-grow"
          />
          <Button
            isIconOnly
            color="primary"
            onClick={handleSendMessage}
            isDisabled={!inputMessage.trim() || isTyping}
          >
            <IoSend />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ChatTab;
