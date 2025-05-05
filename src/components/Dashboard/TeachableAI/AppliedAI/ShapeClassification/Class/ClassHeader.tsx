"use client";
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  CardHeader, Input, Button, Dropdown, DropdownTrigger, DropdownMenu,
  DropdownSection, DropdownItem, cn, Modal, useDisclosure,
  ModalContent, ModalHeader, ModalBody, ModalFooter
} from '@nextui-org/react';
import { RiUploadCloud2Fill } from "react-icons/ri";
import { useTranslations } from 'next-intl';
import { BsFillWebcamFill } from "react-icons/bs";
import { ClassHeaderProps } from '../../types';
import { DeleteDocumentIcon, VerticalDotsIcon } from '../../Icons';
import { SUPPORTED_FORMATS } from '../../config/constants';

const ClassHeader: React.FC<ClassHeaderProps> = ({
  className,
  setClassName,
  handleFileChange,
  removeClass,
  isLoading,
  onImageRemoveAll,
  startWebcam,
  stopWebcam,
  isCapturing,
  images,
}) => {
  const t = useTranslations("shape_classification.validation_messages");
  const t2 = useTranslations("shape_classification.class_item");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  const [modalState, setModalState] = useState({
    title: "",
    description: "",
    action: (e: any) => {
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
     }
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // const iconClasses = useMemo(() => "text-xl text-default-500 pointer-events-none flex-shrink-0", []);

  const data = useMemo(() => [
    {
      title: t2("remove_all_images"),
      description: t2("delete_all_images_permanently"),
      action: onImageRemoveAll
    },
    {
      title: t2("remove_class"),
      description: t2("delete_class_permanently"),
      action: removeClass
    }
  ], [t2, onImageRemoveAll, removeClass]);

  const handleUploadButtonClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleWebcamToggle = useCallback(() => {
    if (isCapturing) {
      stopWebcam();
    } else {
      startWebcam();
    }
  }, [isCapturing, startWebcam, stopWebcam]);

  const handleOpen = useCallback((idx: number) => {
    const { title, description, action } = data[idx];
    setModalState({ title, description, action });
    onOpen();
  }, [data, onOpen]);


  const handleFileChangeWrapper = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const existingImageCount = images.length;

    if (existingImageCount + files.length > 750) {
      const allowedFiles = files.slice(0, 750 - existingImageCount);
      handleFileChange(allowedFiles);
      alert(`You can only add up to 750 images per class. Only ${allowedFiles.length} images were added.`);
    } else {
      handleFileChange(files);
    }
  }, [handleFileChange, images.length]);

  return (
    <CardHeader className="justify-between">
      <Input
        isRequired
        variant="bordered"
        className="w-full sm:w-1/4"
        placeholder={t2("class_name")}
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        isInvalid={!className && images.length > 0}
        errorMessage={t("class_name_required")}
      />

      <div className="flex items-center space-x-2">
        <Button
          color="primary"
          size="sm"
          radius='full'
          onClick={handleWebcamToggle}
          endContent={<BsFillWebcamFill size={20} />}
        >
          {isCapturing ? t2("close_webcam") : t2("open_webcam")}
        </Button>

        <Button
          isLoading={isLoading}
          color="secondary"
          size="sm"
          radius='full'
          onClick={handleUploadButtonClick}
          endContent={<RiUploadCloud2Fill size={20} />}
        >
          {t2("upload")}
        </Button>

        <Dropdown
          showArrow
          classNames={{
            base: "before:bg-default-200",
            content: "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
          }}
        >
          <DropdownTrigger>
            <Button isIconOnly size="sm" variant="light">
              <VerticalDotsIcon className="text-default-300" />
            </Button>
          </DropdownTrigger>

          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection title={t2("danger_zone")}>
              <DropdownItem
                key="deleteImages"
                className="text-danger"
                color="danger"
                description={t2("delete_all_images_permanently")}
                onClick={() => handleOpen(0)}
                startContent={<DeleteDocumentIcon className={cn("text-xl text-danger")} />}
              >
                {t2("remove_all_images")}
              </DropdownItem>
              <DropdownItem
                key="deleteClass"
                className="text-danger"
                color="danger"
                description={t2("delete_class_permanently")}
                onClick={() => handleOpen(1)}
                startContent={<DeleteDocumentIcon className={cn("text-xl text-danger")} />}
              >
                {t2("remove_class")}
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{modalState.title}</ModalHeader>
              <ModalBody>
                <p>
                  {modalState.description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={(e) => { modalState.action(e); onClose(); }}>
                  {t2("delete")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <input
        type="file"
        multiple
        accept={SUPPORTED_FORMATS.join(', ')}
        onChange={handleFileChangeWrapper}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </CardHeader>
  );
};

export default ClassHeader;
