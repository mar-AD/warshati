"use client";

import { useState, useEffect, useRef } from "react";
import { getChatbotConfig, getChatbotFeatures } from "../../utils/ai-chatbot/config";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sentiment?: "positive" | "negative" | "neutral";
  timestamp: Date;
  sourceCitation?: string;
  expectedResponse?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messages: Message[];
}

export function useChatbotState() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingMessage, setCurrentTypingMessage] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [hasSourceFiles, setHasSourceFiles] = useState(false);
  const [sourceFiles, setSourceFiles] = useState<any[]>([]);
  const [typingMessageContent, setTypingMessageContent] = useState("");
  const [welcomeMessageSent, setWelcomeMessageSent] = useState(false);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [selectedChatSession, setSelectedChatSession] =
    useState<ChatSession | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatConfig = getChatbotConfig();
  const features = getChatbotFeatures();

  // Load source files and chat sessions
  useEffect(() => {
    const selectedUUID = localStorage.getItem("selectedUUID");
    if (selectedUUID) {
      const savedFiles = localStorage.getItem(`chatbotSources_${selectedUUID}`);
      if (savedFiles) {
        const files = JSON.parse(savedFiles);
        setSourceFiles(files);
        setHasSourceFiles(files.length > 0);
      }

      // Load saved chat history if feature is enabled
      if (features.saveChatHistory) {
        const savedMessages = localStorage.getItem(
          `chatHistory_${selectedUUID}`
        );
        if (savedMessages) {
          const parsedMessages = JSON.parse(savedMessages);
          setMessages(parsedMessages);
          setWelcomeMessageSent(true); // Don't send welcome message if we have history

          // Create a default chat session from the current messages
          const defaultSession: ChatSession = {
            id: "default-session",
            title: "Default Conversation",
            lastMessage:
              parsedMessages.length > 0
                ? parsedMessages[parsedMessages.length - 1].content
                : "",
            timestamp: new Date(),
            messages: parsedMessages,
          };

          // Load any saved chat sessions
          const savedSessions = localStorage.getItem(
            `chatSessions_${selectedUUID}`
          );
          if (savedSessions) {
            const parsedSessions = JSON.parse(savedSessions);
            setChatSessions(parsedSessions);

            // If there are saved sessions, select the first one
            if (parsedSessions.length > 0) {
              setSelectedChatSession(parsedSessions[0]);
              setMessages(parsedSessions[0].messages);
            } else {
              setChatSessions([defaultSession]);
              setSelectedChatSession(defaultSession);
            }
          } else {
            // If no saved sessions, create the default one
            setChatSessions([defaultSession]);
            setSelectedChatSession(defaultSession);
          }
        } else {
          // Create an empty default session
          const emptySession: ChatSession = {
            id: "default-session",
            title: "New Conversation",
            lastMessage: "",
            timestamp: new Date(),
            messages: [],
          };
          setChatSessions([emptySession]);
          setSelectedChatSession(emptySession);
        }
      }
    }
  }, [features.saveChatHistory]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentTypingMessage]);

  // Add welcome message when component mounts
  useEffect(() => {
    // Only send welcome message once and when chatConfig is loaded
    if (chatConfig && !welcomeMessageSent) {
      setWelcomeMessageSent(true);
      const welcomeMessage =
        chatConfig.welcome_message || "Hello! How can I help you today?";

      if (features.typingAnimation) {
        setIsTyping(true);
        setCurrentTypingMessage("");
        setTypingIndex(0);
        setTypingMessageContent(welcomeMessage);
      } else {
        // Immediately add welcome message without typing animation
        const welcomeMsg: Message = {
          id: `msg-${Date.now()}`,
          role: "assistant",
          content: welcomeMessage,
          timestamp: new Date(),
        };
        setMessages([welcomeMsg]);
        saveMessages([welcomeMsg]);

        // Update the selected chat session
        if (selectedChatSession) {
          const updatedSession = {
            ...selectedChatSession,
            messages: [welcomeMsg],
            lastMessage: welcomeMsg.content,
          };
          setSelectedChatSession(updatedSession);
          updateChatSessions(updatedSession);
        }
      }
    }
  }, [chatConfig, welcomeMessageSent, features.typingAnimation]);

  // Handle typing animation
  useEffect(() => {
    if (!isTyping || !typingMessageContent) return;

    if (typingIndex < typingMessageContent.length) {
      const timeout = setTimeout(() => {
        setCurrentTypingMessage(
          (prev) => prev + typingMessageContent[typingIndex]
        );
        setTypingIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);

      const newMessage: Message = {
        id: `msg-${Date.now()}`,
        role: "assistant",
        content: typingMessageContent,
        timestamp: new Date(),
      };

      let updatedMessages: Message[];

      if (messages.length === 0) {
        // This was the welcome message
        updatedMessages = [newMessage];
      } else {
        // This was a response to user message
        updatedMessages = [...messages, newMessage];
      }

      setMessages(updatedMessages);
      saveMessages(updatedMessages);

      // Update the selected chat session
      if (selectedChatSession) {
        const updatedSession = {
          ...selectedChatSession,
          messages: updatedMessages,
          lastMessage: newMessage.content,
          timestamp: new Date(),
        };
        setSelectedChatSession(updatedSession);
        updateChatSessions(updatedSession);
      }

      setCurrentTypingMessage("");
      setTypingIndex(0);
      setTypingMessageContent("");
    }
  }, [
    isTyping,
    typingIndex,
    currentTypingMessage,
    typingMessageContent,
    messages,
    selectedChatSession,
  ]);

  // Update chat sessions with the modified session
  const updateChatSessions = (updatedSession: ChatSession) => {
    const updatedSessions = chatSessions.map((session) =>
      session.id === updatedSession.id ? updatedSession : session
    );
    setChatSessions(updatedSessions);
    saveChatSessions(updatedSessions);
  };

  // Save chat sessions to localStorage
  const saveChatSessions = (sessions: ChatSession[]) => {
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

  // Save messages to localStorage if feature is enabled
  const saveMessages = (msgs: Message[]) => {
    if (features.saveChatHistory) {
      const selectedUUID = localStorage.getItem("selectedUUID");
      if (selectedUUID) {
        localStorage.setItem(
          `chatHistory_${selectedUUID}`,
          JSON.stringify(msgs)
        );
      }
    }
  };

  return {
    messages,
    setMessages,
    inputMessage,
    setInputMessage,
    isTyping,
    setIsTyping,
    currentTypingMessage,
    setCurrentTypingMessage,
    typingIndex,
    setTypingIndex,
    hasSourceFiles,
    sourceFiles,
    typingMessageContent,
    setTypingMessageContent,
    welcomeMessageSent,
    setWelcomeMessageSent,
    chatSessions,
    setChatSessions,
    selectedChatSession,
    setSelectedChatSession,
    messagesEndRef,
    chatConfig,
    features,
    updateChatSessions,
    saveChatSessions,
    saveMessages,
  };
}
