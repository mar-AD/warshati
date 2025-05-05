import { locales } from "@/i18n/config";


/**
 * Converts an image URL to a Data URL.
 * @param imageUrl - The URL of the image to convert.
 * @returns A Promise that resolves to the Data URL of the image.
 */
export const imageToDataURL = (imageUrl: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return reject("Failed to get canvas context");
      }
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
    img.onerror = (err) => {
      reject(err);
    };
  });
};

/**
 * Retrieves the fingers from localStorage based on the selectedUUID.
 * @returns An array of fingers.
 * @throws {Error} If the required localStorage items are missing.
 */
export const getFingers = () => {
  const dicts = localStorage.getItem("dicts");
  const selectedUUID = localStorage.getItem("selectedUUID");

  if (!dicts || !selectedUUID) {
    throw new Error("Missing required localStorage items.");
  }

  const dict = JSON.parse(dicts);
  const labeledData = dict[selectedUUID];
  return labeledData.fingers;
};

export const chunkArray = (arr: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, chunkSize + i));
  }
  return chunks;
};

export const calcTime = (epochs: number) => {
  const trainingTime = epochs * 2 + 7;
  const trainingTimeInSeconds = trainingTime % 60;
  const trainingTimeInMinutes = Math.floor(trainingTime / 60);

  let trainingTimeDisplay = "";
  if (trainingTimeInMinutes > 0) {
    trainingTimeDisplay += `${trainingTimeInMinutes} minute${
      trainingTimeInMinutes > 1 ? "s" : ""
    }`;
  }
  if (trainingTimeInSeconds > 0) {
    trainingTimeDisplay += `${
      trainingTimeInMinutes > 0 ? " " : ""
    }${trainingTimeInSeconds} second${trainingTimeInSeconds > 1 ? "s" : ""}`;
  }

  return trainingTimeDisplay;
};

export const getPathWithoutLang = (path: string) => {
  const pathParts = path.split("/").filter(Boolean);
  // Check if the first part of the path is a recognized locale
  if (pathParts[0] && locales.includes(pathParts[0] as "en" | "fr")) {
    pathParts.shift();
  }
  return `/${pathParts.join("/")}`;
};
