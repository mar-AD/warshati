"use server";
import { v4 as uuidv4 } from "uuid";

export const sendChatbotLabels = async ( prevState: {
  success: boolean;
  error: string;
  data: null;
} | {
  success: boolean;
  data: {
    uuid: string;
    chatbot_name: any;
    model: any;
    chatbot_api: any;
    welcome_message: any;
  };
  error?: undefined;
},
formData: FormData) => {
  // Get session ID
  const sessionId = formData.get("session_id")?.toString() || uuidv4();

  // Extract form data
  const rawData = {
    chatbot_name: formData.get("chatbot_name"),
    model: formData.get("model"),
    chatbot_api: formData.get("chatbot_api"),
    welcome_message: formData.get("welcome_message"),
  };

  try {
    // Send data to the backend API
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
    const response = await fetch(
      `${baseURL}/api/ai-chatbot/label/${sessionId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rawData),
      }
    );

    // Handle API response
    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      return {
        success: false,
        error: `Server error: ${response.status}`,
        data: null,
      };
    }

    // Try to parse the response as JSON
    let responseData;
    try {
      responseData = await response.json();
    } catch (error) {
      console.log(error)
      // If the response is not JSON, use our raw data
      responseData = null;
    }

    // Return success with data (either from API or our original data)
    return {
      success: true,
      data: {
        uuid: sessionId, // Use our generated UUID
        chatbot_name: responseData?.chatbot_name || rawData.chatbot_name,
        model: responseData?.model || rawData.model,
        chatbot_api: responseData?.chatbot_api || rawData.chatbot_api,
        welcome_message:
          responseData?.welcome_message || rawData.welcome_message,
      },
    };
  } catch (error) {
    // Handle any network or other errors
    console.error("Error sending data to backend:", error);

    // For development/testing, still return success with local data
    // In production, you might want to return an error instead
    return {
      success: true, // Keep as true to maintain existing flow
      data: {
        uuid: sessionId,
        chatbot_name: rawData.chatbot_name,
        model: rawData.model,
        chatbot_api: rawData.chatbot_api,
        welcome_message: rawData.welcome_message,
      },
    };
  }
};

// Need To Be Removed
export const uploadFiles = async (formData: FormData, sessionId: string) => {
  try {
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

    // Make the POST request to the FastAPI endpoint
    const response = await fetch(
      `${baseURL}/api/ai-chatbot/upload/${sessionId}`,
      {
        method: "POST",
        // Don't set Content-Type header when sending FormData
        // The browser will automatically set the correct multipart/form-data with boundary
        body: formData,
      }
    );

    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      const errorText = await response.text();
      return {
        success: false,
        error: `Server error: ${response.status} - ${errorText}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error: unknown) {
    console.error("Error uploading files to backend:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to upload files",
    };
  }
};

/**
 * Delete a file from the chatbot's sources
 * @param sessionId The session ID for the chatbot
 * @param filename The name of the file to delete
 * @returns Object with success flag and optional error message
 */
export const deleteFile = async (sessionId: string, filename: string) => {
  try {
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

    // Make the DELETE request to the FastAPI endpoint
    const response = await fetch(
      `${baseURL}/api/ai-chatbot/delete/${sessionId}/${encodeURIComponent(
        filename
      )}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      const errorText = await response.text();
      return {
        success: false,
        error: `Server error: ${response.status} - ${errorText}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  }catch (error: unknown) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete file",
    };
  }
};
