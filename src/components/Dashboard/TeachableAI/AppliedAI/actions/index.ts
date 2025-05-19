import { getFingers } from "../utils";

/**
 * Sends a POST request to the specified endpoint with the provided data.
 * @param endpoint - The endpoint to send the request to.
 * @param data - The data to include in the request body.
 * @returns A Promise that resolves to the JSON response from the server.
 * @throws If the request fails or encounters an error.
 */
export const sendPostRequest = async (endpoint: string, data: any) => {
  const baseURL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  try {
    const response = await fetch(`${baseURL}/api${endpoint}`, {
      method: "POST",
      /* headers: {
        "Content-Type": "application/json",
      }, */
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error sending POST request:", error);
    throw error;
  }
};

/**
 * Processes a frame for finger labeling.
 *
 * @param dataURL - The data URL of the image to be processed.
 * @param additionalData - Additional data to be included in the request.
 * @returns A Promise that resolves to the response from the server.
 */
export const processFrameForFingerLabeling = async (
  dataURL: string,
  additionalData?: any
) => {
  const fingers = getFingers();

  return sendPostRequest("/finger-labeling/", {
    image: dataURL,
    fingers,
    ...additionalData,
  });
};
