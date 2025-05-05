"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Progress,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "@nextui-org/react";
import {
  IoReturnDownBackOutline,
  IoCloudUploadOutline,
  IoTrashOutline,
  IoDocumentTextOutline,
  IoArrowForward,
  IoAlertCircleOutline,
} from "react-icons/io5";

import { StepContext } from "../providers/StepperProvider";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";



import { deleteFile, uploadFiles } from "../actions/chatbot_labeling";
import { UploadedSource } from "../types/ai-chatbot";
import { MAX_FILE_SIZE } from "../constants/ai-chatbot";
import { validateFiles } from "../utils/ai-chatbot/file-validation";
import { createUploadedFile } from "../utils/ai-chatbot/upload";


const ChatbotSourcesSection: React.FC = () => {
  const t = useTranslations("appliedAI.chatbot-section");
  const { goToStep } = useContext(StepContext);

  const [selectedUUID, setSelectedUUID] = useState<string>("");
  const [chatbotName, setChatbotName] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedSource[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasFiles, setHasFiles] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fileToDelete, setFileToDelete] = useState<UploadedSource | null>(null);

  const [validationErrors, setValidationErrors] = useState<
    { file: string; errors: string[] }[]
  >([]);
  const [showValidationModal, setShowValidationModal] = useState(false);

  // Load chatbot data and any previously uploaded files
  useEffect(() => {
    const uuid = localStorage.getItem("selectedUUID") || "";
    setSelectedUUID(uuid);

    if (uuid) {
      // Get chatbot name
      const chatbots = JSON.parse(localStorage.getItem("chatbots") || "{}");
      if (chatbots[uuid]) {
        setChatbotName(chatbots[uuid].chatbot_name || "");
      }

      // Load any previously uploaded files
      const savedFiles = localStorage.getItem(`chatbotSources_${uuid}`);
      if (savedFiles) {
        const files = JSON.parse(savedFiles);
        setUploadedFiles(files);
        setHasFiles(files.length > 0);
      }
    }
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !selectedUUID) return;

    const files = Array.from(e.target.files);

    // Validate files before uploading
    const { validFiles, invalidFiles, errors } = validateFiles(files);

    // If there are validation errors, show them and add invalid files to the list
    if (errors.length > 0) {
      setValidationErrors(errors);
      setShowValidationModal(true);

      // Add invalid files to the list with "invalid" status
      const invalidFileObjects = invalidFiles.map((file) =>
        createUploadedFile(file, "invalid", {
          errors: errors.find((e) => e.file === file.name)?.errors || [
            "Invalid file",
          ],
        })
      );

      setUploadedFiles((prev) => [...prev, ...invalidFileObjects]);

      // If there are no valid files, return early
      if (validFiles.length === 0) {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }
    }

    // Continue with valid files
    const newFiles = validFiles.map((file) =>
      createUploadedFile(file, "uploading", { progress: 0 })
    );

    setUploadedFiles((prev) => [...prev, ...newFiles]);
    setIsUploading(true);

    // Prepare FormData
    const formData = new FormData();
    validFiles.forEach((file) => {
      formData.append("files", file); // must match the FastAPI param name
    });

    try {
      const res = await uploadFiles(formData, selectedUUID);
      if (res.success) {
        toast.success(`${validFiles.length} file(s) uploaded successfully.`);
        const updatedFiles = newFiles.map((f) => ({
          ...f,
          status: "success" as const,
          progress: 100,
        }));

        setUploadedFiles((prev) => [
          ...prev.filter((pf) => !updatedFiles.some((nf) => nf.id === pf.id)),
          ...updatedFiles,
        ]);
        setHasFiles(true);

        // Update localStorage with all files including successful uploads
        localStorage.setItem(
          `chatbotSources_${selectedUUID}`,
          JSON.stringify([
            ...uploadedFiles.filter((f) => f.status !== "uploading"),
            ...updatedFiles,
          ])
        );
      } else {
        toast.error(res.error || "Upload failed");
        // Mark files as error
        const failedFiles = newFiles.map((f) => ({
          ...f,
          status: "error" as const,
          progress: 0,
        }));

        setUploadedFiles((prev) => [
          ...prev.filter((pf) => !failedFiles.some((nf) => nf.id === pf.id)),
          ...failedFiles,
        ]);
      }
    } catch (err) {
      toast.error("File upload failed");
      console.error("Upload error:", err);

      // Mark files as error
      const failedFiles = newFiles.map((f) => ({
        ...f,
        status: "error" as const,
        progress: 0,
      }));

      setUploadedFiles((prev) => [
        ...prev.filter((pf) => !failedFiles.some((nf) => nf.id === pf.id)),
        ...failedFiles,
      ]);
    } finally {
      setIsUploading(false);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDeleteFile = (file: UploadedSource) => {
    setFileToDelete(file);
    onOpen();
  };

  const confirmDeleteFile = async () => {
    if (!fileToDelete || !selectedUUID) return;

    setIsDeleting(true);

    try {
      // Only call the backend if the file was successfully uploaded
      if (fileToDelete.status === "success") {
        const result = await deleteFile(selectedUUID, fileToDelete.name);

        if (result.success) {
          // Remove from UI and localStorage
          setUploadedFiles((prev) =>
            prev.filter((f) => f.id !== fileToDelete.id)
          );

          // Update localStorage
          const updatedFiles = uploadedFiles.filter(
            (f) => f.id !== fileToDelete.id
          );
          localStorage.setItem(
            `chatbotSources_${selectedUUID}`,
            JSON.stringify(updatedFiles)
          );

          setHasFiles(updatedFiles.length > 0);
          toast.success(`File ${fileToDelete.name} deleted successfully.`);
        } else {
          toast.error(
            `Failed to delete ${fileToDelete.name}: ${
              result.error || "Unknown error"
            }`
          );
          console.error("Delete error:", result.error);
        }
      } else {
        // For files that weren't successfully uploaded, just remove from UI
        setUploadedFiles((prev) =>
          prev.filter((f) => f.id !== fileToDelete.id)
        );

        // Update localStorage
        const updatedFiles = uploadedFiles.filter(
          (f) => f.id !== fileToDelete.id
        );
        localStorage.setItem(
          `chatbotSources_${selectedUUID}`,
          JSON.stringify(updatedFiles)
        );

        setHasFiles(updatedFiles.length > 0);
        toast.info(`File ${fileToDelete.name} removed from list.`);
      }
    } catch (error) {
      console.error("Error during file deletion:", error);
      toast.error(`An error occurred while deleting ${fileToDelete.name}.`);
    } finally {
      setIsDeleting(false);
      onClose();
      setFileToDelete(null);
    }
  };

  const handleBack = () => {
    goToStep(0);
  };

  const handleNext = () => {
    goToStep(2);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes("pdf")) {
      return <IoDocumentTextOutline className="text-red-500" size={24} />;
    } else if (fileType.includes("text")) {
      return <IoDocumentTextOutline className="text-blue-500" size={24} />;
    } else if (fileType.includes("word") || fileType.includes("document")) {
      return <IoDocumentTextOutline className="text-blue-700" size={24} />;
    } else if (
      fileType.includes("csv") ||
      fileType.includes("excel") ||
      fileType.includes("spreadsheet")
    ) {
      return <IoDocumentTextOutline className="text-green-600" size={24} />;
    } else {
      return <IoDocumentTextOutline className="text-gray-500" size={24} />;
    }
  };

  const closeValidationModal = () => {
    setShowValidationModal(false);
    setValidationErrors([]);
  };

  return (
    <div className="flex flex-col py-4 md:py-8">
      <div className="flex flex-col sm:flex-row justify-around">
        <Image
          src="/images/Dashboard/training.svg"
          alt="document upload"
          width={500}
          height={300}
          className="w-full max-w-[320px] h-auto sm:min-h-[348px] sm:w-1/2 mx-auto sm:mx-0 my-auto"
        />

        <div className="sm:w-1/2 flex flex-col justify-center self-end mt-6 sm:mt-0">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {t("uploadSource")} {chatbotName}
            </h2>
            <p className="mt-4 text-justify dark:text-gray-300">
              {t("thirdSec")}
            </p>
          </div>

          <Card className="mt-6">
            <CardHeader className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{t("sourceFiles")}</h3>
              <Button
                color="primary"
                startContent={<IoCloudUploadOutline />}
                onClick={() => fileInputRef.current?.click()}
                isDisabled={isUploading}
              >
                {t("uploadFiles")}
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
                accept=".pdf,.txt,.doc,.docx,.csv,.xls,.xlsx"
              />
            </CardHeader>
            <Divider />
            <CardBody className="p-0">
              {uploadedFiles.length > 0 ? (
                <Table aria-label="Uploaded files">
                  <TableHeader>
                    <TableColumn>{t("file")}</TableColumn>
                    <TableColumn>{t("size")}</TableColumn>
                    <TableColumn>{t("status")}</TableColumn>
                    <TableColumn>{t("action")}</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {uploadedFiles.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getFileIcon(file.type)}
                            <div>
                              <p className="font-medium">{file.name}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(file.uploadedAt).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{formatFileSize(file.size)}</TableCell>
                        <TableCell>
                          {file.status === "uploading" ? (
                            <div className="w-full">
                              <Progress
                                value={file.progress}
                                color="primary"
                                size="sm"
                                className="max-w-md"
                              />
                              <p className="text-xs mt-1">{file.progress}%</p>
                            </div>
                          ) : file.status === "success" ? (
                            <Chip color="success" variant="flat">
                              {t("uploaded")}
                            </Chip>
                          ) : file.status === "invalid" ? (
                            <Chip
                              color="warning"
                              variant="flat"
                              className="cursor-pointer"
                              onClick={() => {
                                setValidationErrors([
                                  {
                                    file: file.name,
                                    errors: file.errors || [],
                                  },
                                ]);
                                setShowValidationModal(true);
                              }}
                            >
                              {t("invalid")}
                            </Chip>
                          ) : (
                            <Chip color="danger" variant="flat">
                              {t("error")}
                            </Chip>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button
                            isIconOnly
                            color="danger"
                            variant="light"
                            onClick={() => handleDeleteFile(file)}
                            isDisabled={file.status === "uploading"}
                          >
                            <IoTrashOutline />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="flex flex-col items-center justify-center p-8">
                  <IoDocumentTextOutline
                    size={48}
                    className="text-gray-400 mb-4"
                  />
                  <p className="text-gray-500">{t("noFiles")}</p>
                  <p className="text-gray-400 text-sm">
                    {t("upload")} PDF, TXT, DOC, DOCX, CSV, XLS, or XLSX {t("files")}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    {t("maxFileSize")} {MAX_FILE_SIZE / (1024 * 1024)}{t("mb")}
                  </p>
                </div>
              )}
            </CardBody>
            <CardFooter>
              <p className="text-sm text-gray-500">
                {t("suportedFileType")} PDF, TXT, DOC, DOCX, CSV, XLS, XLSX
              </p>
            </CardFooter>
          </Card>

          <div className="sm:mt-8 mt-6 gap-5 flex justify-between">
            <Button
              color="success"
              onClick={handleBack}
              className="py-2"
              startContent={<IoReturnDownBackOutline />}
            >
              {t("back_btn")}
            </Button>
            <Button
              color="success"
              onClick={handleNext}
              className="py-2"
              endContent={<IoArrowForward />}
            >
              {t("continue_btn")}
            </Button>
          </div>
        </div>
      </div>

      {/* Delete confirmation modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          if (!isDeleting) {
            onClose();
          }
        }}
        isDismissable={!isDeleting}
        hideCloseButton={isDeleting}
      >
        <ModalContent>
          <ModalHeader>{t("confirmDelete")}</ModalHeader>
          <ModalBody>
              {t('sure')} {fileToDelete?.name}?
            {fileToDelete?.status === "success" && (
              <p className="text-sm text-gray-500 mt-2">
                {t("permamentDelete")}
              </p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              color="default"
              variant="light"
              onPress={onClose}
              isDisabled={isDeleting}
            >
              {t("cancel")}
            </Button>
            <Button
              color="danger"
              onPress={confirmDeleteFile}
              isLoading={isDeleting}
              startContent={
                !isDeleting ? null : <Spinner size="sm" color="white" />
              }
            >
              {isDeleting ? t("deleting") : t("delete")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Validation errors modal */}
      <Modal isOpen={showValidationModal} onClose={closeValidationModal}>
        <ModalContent>
          <ModalHeader className="flex gap-2 items-center">
            <IoAlertCircleOutline className="text-warning" size={24} />
            {t("fileValidErr")}
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              {validationErrors.map((error, index) => (
                <div
                  key={index}
                  className="border border-warning rounded-md p-3"
                >
                  <p className="font-semibold">{error.file}</p>
                  <ul className="list-disc pl-5 mt-2">
                    {error.errors.map((err, i) => (
                      <li key={i} className="text-sm text-warning">
                        {err}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-sm text-gray-500 mt-2">
                {t("ensure")}
                <ul className="list-disc pl-5 mt-1">
                  <li>
                    {t("supoertedFormat")} PDF, TXT, DOC, DOCX, CSV, XLS, XLSX
                  </li>
                  <li>{t("maxFileSize")} {MAX_FILE_SIZE / (1024 * 1024)}{t("mb")}</li>
                </ul>
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={closeValidationModal}>
              {t("ok")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChatbotSourcesSection;
