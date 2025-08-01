// File validation constants
export const ALLOWED_FILE_TYPES = [
  "application/pdf", // PDF
  "text/plain", // TXT
  "application/msword", // DOC
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
  "text/csv", // CSV
  "application/vnd.ms-excel", // XLS (old Excel)
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // XLSX
];

export const FILE_TYPE_EXTENSIONS = {
  "application/pdf": ".pdf",
  "text/plain": ".txt",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
  "text/csv": ".csv",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
};

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
