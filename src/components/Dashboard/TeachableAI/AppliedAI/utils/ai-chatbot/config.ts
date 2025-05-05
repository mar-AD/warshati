/**
 * Retrieves the chatbot configuration from localStorage based on the selectedUUID.
 * @returns The chatbot configuration or null if not found.
 */
export const getChatbotConfig = () => {
  try {
    const chatbots = localStorage.getItem("chatbots");
    const selectedUUID = localStorage.getItem("selectedUUID");

    if (!chatbots || !selectedUUID) {
      console.warn("Missing required localStorage items for chatbot.");
      return null;
    }

    const chatbotsData = JSON.parse(chatbots);
    const chatbotConfig = chatbotsData[selectedUUID];

    if (!chatbotConfig) {
      console.warn(`No chatbot configuration found for UUID: ${selectedUUID}`);
      return null;
    }

    return chatbotConfig;
  } catch (error) {
    console.error("Error in getChatbotConfig:", error);
    return null;
  }
};

/**
 * Retrieves the chatbot features from localStorage based on the selectedUUID.
 * @returns The chatbot features or default features if not found.
 */
export const getChatbotFeatures = () => {
  try {
    const selectedUUID = localStorage.getItem("selectedUUID");

    if (!selectedUUID) {
      console.warn("No selectedUUID found for chatbot features.");
      return getDefaultChatbotFeatures();
    }

    const features = localStorage.getItem(`chatbotFeatures_${selectedUUID}`);

    if (!features) {
      console.warn(`No features found for chatbot UUID: ${selectedUUID}`);
      return getDefaultChatbotFeatures();
    }

    return JSON.parse(features);
  } catch (error) {
    console.error("Error in getChatbotFeatures:", error);
    return getDefaultChatbotFeatures();
  }
};

/**
 * Returns the default chatbot features.
 */
export const getDefaultChatbotFeatures = () => {
  return {
    saveChatHistory: true,
    sentimentAnalysis: false,
    typingAnimation: false,
    personalitySelection: false,
  };
};

/**
 * Checks if a chatbot has been trained.
 * @returns Boolean indicating if the current chatbot is trained.
 */
export const isChatbotTrained = () => {
  try {
    const selectedUUID = localStorage.getItem("selectedUUID");

    if (!selectedUUID) {
      return false;
    }

    const trainedChatbots = JSON.parse(
      localStorage.getItem("trainedChatbots") || "{}"
    );
    return !!trainedChatbots[selectedUUID];
  } catch (error) {
    console.error("Error in isChatbotTrained:", error);
    return false;
  }
};
