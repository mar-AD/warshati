import { ALLOWED_FILE_TYPES, FILE_TYPE_EXTENSIONS, MAX_FILE_SIZE } from "../../constants/ai-chatbot";
import { ValidationResult } from "../../types/ai-chatbot";


/**
 * Validates a file against allowed types and maximum size
 * @param file The file to validate
 * @returns ValidationResult object with valid flag and any error messages
 */
export function validateFile(file: File): ValidationResult {
  const errors: string[] = [];

  // Check file type
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    // Try to determine file type from extension if MIME type is not recognized
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    const isValidExtension = Object.values(FILE_TYPE_EXTENSIONS).some((ext) =>
      ext.toLowerCase().includes(fileExtension || "")
    );

    if (!isValidExtension) {
      console.log(fileExtension);
      errors.push(
        `File type "${file.type}" is not supported. Please upload PDF, TXT, DOC, DOCX, or CSV files.`
      );
    }
  }

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    const maxSizeMB = MAX_FILE_SIZE / (1024 * 1024);
    errors.push(`File size exceeds the ${maxSizeMB}MB limit.`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates multiple files and groups results
 * @param files Array of files to validate
 * @returns Object containing valid files, invalid files, and error messages
 */
export function validateFiles(files: File[]): {
  validFiles: File[];
  invalidFiles: File[];
  errors: { file: string; errors: string[] }[];
} {
  const validFiles: File[] = [];
  const invalidFiles: File[] = [];
  const errors: { file: string; errors: string[] }[] = [];

  files.forEach((file) => {
    const result = validateFile(file);

    if (result.valid) {
      validFiles.push(file);
    } else {
      invalidFiles.push(file);
      errors.push({
        file: file.name,
        errors: result.errors,
      });
    }
  });

  return {
    validFiles,
    invalidFiles,
    errors,
  };
}
