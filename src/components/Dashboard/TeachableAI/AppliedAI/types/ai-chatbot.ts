export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export interface UploadedSource {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadedAt: Date;
  status: "uploading" | "success" | "error" | "invalid";
  progress?: number;
  errors?: string[];
}
