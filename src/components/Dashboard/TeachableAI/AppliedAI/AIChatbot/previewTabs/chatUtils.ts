export const analyzeSentiment = (
  text: string
): "positive" | "negative" | "neutral" => {
  // Simple sentiment analysis based on keywords
  const positiveWords = [
    "good",
    "great",
    "excellent",
    "amazing",
    "happy",
    "love",
    "like",
    "thanks",
    "thank",
  ];
  const negativeWords = [
    "bad",
    "terrible",
    "awful",
    "hate",
    "dislike",
    "poor",
    "sorry",
    "problem",
    "issue",
  ];

  const lowerText = text.toLowerCase();
  let positiveScore = 0;
  let negativeScore = 0;

  positiveWords.forEach((word) => {
    if (lowerText.includes(word)) positiveScore++;
  });

  negativeWords.forEach((word) => {
    if (lowerText.includes(word)) negativeScore++;
  });

  if (positiveScore > negativeScore) return "positive";
  if (negativeScore > positiveScore) return "negative";
  return "neutral";
};

export const generateFormalResponse = (
  message: string,
  hasSourceFiles: boolean
): string => {
  if (
    message.toLowerCase().includes("hello") ||
    message.toLowerCase().includes("hi")
  ) {
    return "Hello. How may I assist you today?";
  } else if (message.toLowerCase().includes("help")) {
    return "I'd be happy to help. Please provide more details about what you need assistance with.";
  } else if (message.toLowerCase().includes("thank")) {
    return "You're welcome. Is there anything else I can help you with?";
  } else if (message.toLowerCase().includes("bye")) {
    return "Thank you for your time. Have a pleasant day.";
  } else if (
    hasSourceFiles &&
    (message.toLowerCase().includes("document") ||
      message.toLowerCase().includes("source") ||
      message.toLowerCase().includes("file") ||
      message.toLowerCase().includes("pdf") ||
      message.toLowerCase().includes("read"))
  ) {
    return "Based on the documents you've provided, I can offer you detailed information on this topic. The sources contain relevant information that addresses your query.";
  } else if (message.toLowerCase().includes("food")) {
    return "I can't provide information about food. Is there another topic or question you would like assistance with? I'm here to help!";
  } else {
    return "I understand your message. How can I provide further assistance?";
  }
};

export const generateCasualResponse = (
  message: string,
  hasSourceFiles: boolean
): string => {
  if (
    message.toLowerCase().includes("hello") ||
    message.toLowerCase().includes("hi")
  ) {
    return "Hey! What's up?";
  } else if (message.toLowerCase().includes("help")) {
    return "Sure thing! What do you need help with?";
  } else if (message.toLowerCase().includes("thank")) {
    return "No problem at all! Anything else you need?";
  } else if (message.toLowerCase().includes("bye")) {
    return "See ya later! Have a good one!";
  } else if (
    hasSourceFiles &&
    (message.toLowerCase().includes("document") ||
      message.toLowerCase().includes("source") ||
      message.toLowerCase().includes("file") ||
      message.toLowerCase().includes("pdf") ||
      message.toLowerCase().includes("read"))
  ) {
    return "I checked those docs you uploaded and found some cool info about that! Let me break it down for you in simple terms.";
  } else if (message.toLowerCase().includes("food")) {
    return "I can't provide information about food. Is there another topic or question you would like assistance with? I'm here to help!";
  } else {
    return "Got it! What else is on your mind?";
  }
};

export const generateFunnyResponse = (
  message: string,
  hasSourceFiles: boolean
): string => {
  if (
    message.toLowerCase().includes("hello") ||
    message.toLowerCase().includes("hi")
  ) {
    return "Well hello there! I was just about to take a nap, but you're way more interesting!";
  } else if (message.toLowerCase().includes("help")) {
    return "Help is my middle name! Actually, it's 'Processing Unit 3000', but that doesn't sound as heroic.";
  } else if (message.toLowerCase().includes("thank")) {
    return "You're welcome! I'll be here all week. Don't forget to tip your virtual assistant!";
  } else if (message.toLowerCase().includes("bye")) {
    return "Leaving so soon? And I was just about to tell you my best joke! Next time then!";
  } else if (
    hasSourceFiles &&
    (message.toLowerCase().includes("document") ||
      message.toLowerCase().includes("source") ||
      message.toLowerCase().includes("file") ||
      message.toLowerCase().includes("pdf") ||
      message.toLowerCase().includes("read"))
  ) {
    return "I just speed-read those documents faster than my creator can read a menu at a restaurant! Here's what I found, with 50% less technical jargon and 100% more clarity!";
  } else if (message.toLowerCase().includes("food")) {
    return "I can't provide information about food. Is there another topic or question you would like assistance with? I'm here to help!";
  } else {
    return "That's what she said! Just kidding, I'm programmed to say that randomly. What's really on your mind?";
  }
};

export const formatTime = (date: Date) => {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString() + " " + formatTime(date);
};

export const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export const getSentimentColor = (
  sentiment?: "positive" | "negative" | "neutral"
) => {
  if (!sentiment) return undefined;

  switch (sentiment) {
    case "positive":
      return "success";
    case "negative":
      return "danger";
    case "neutral":
      return "default";
    default:
      return undefined;
  }
};
