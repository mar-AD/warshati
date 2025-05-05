import { UploadedSource } from "../../types/ai-chatbot";


/**
 * Maps a file to an uploaded file object with initial state
 * @param file File to map
 * @param status Initial status
 * @returns UploadedFile object
 */
export const createUploadedFile = (
  file: File,
  status: "invalid" | "uploading" | "success" | "error",
  extra?: Partial<UploadedSource>
): UploadedSource => ({
  id: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  name: file.name,
  size: file.size,
  type: file.type,
  uploadedAt: new Date(),
  status,
  ...extra,
});
