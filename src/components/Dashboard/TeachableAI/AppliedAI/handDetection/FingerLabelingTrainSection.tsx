"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Button, CircularProgress, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Select, SelectItem } from "@nextui-org/react";
import { IoReturnDownBackOutline, IoSettingsOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { StepContext } from "../providers/StepperProvider";
import { useTranslations } from "next-intl";
import { MdPreview } from "react-icons/md";

const getRandomArbitrary = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

const FingerLabelingTrainSection: React.FC = () => {
  const t = useTranslations('appliedAI.finger-section');
  const t2 = useTranslations('appliedAI.common');
  const { goToStep } = useContext(StepContext);
  const { theme } = useTheme();

  const [dicts, setDicts] = useState<{ [key: string]: { dict_name: string } }>({});
  const [selectedUUID, setSelectedUUID] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [isTrained, setIsTrained] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();


  useEffect(() => {
    const storedDicts = JSON.parse(localStorage.getItem('dicts') || '{}');
    setDicts(storedDicts);

    const uuid = localStorage.getItem("selectedUUID") || Object.keys(storedDicts)[0] || "";
    setSelectedUUID(uuid);

    const isTrained = localStorage.getItem("isFingerTrained");
    setIsTrained(!!isTrained);

  }, []);

  useEffect(() => {
    if (selectedUUID) {
      localStorage.setItem("selectedUUID", selectedUUID);
    } else {
      localStorage.removeItem("selectedUUID");
    }
  }, [selectedUUID]);

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      const step = getRandomArbitrary(5, 15);
      setValue((prev) => (prev >= 100 ? 100 : prev + step));
    }, getRandomArbitrary(1000, 1800));

    if (value === 100) {
      clearInterval(interval);
      onClose();
      localStorage.setItem("isFingerTrained", "true");
      goToStep(2);
    }

    return () => clearInterval(interval);
  }, [isOpen, value, goToStep, onClose]);

  const handleTrain = () => {
    if (selectedUUID) {
      setValue(0);
      onOpen();
    }
  };

  const handleBack = () => {
    goToStep(0);
  };

  return (
    <div className="flex flex-col sm:flex-row h-full justify-around items-center py-4 md:py-8">
      <Image
        src="/images/Dashboard/training.svg"
        alt="hand"
        width={500}
        height={300}
        className="w-full max-w-[320px] h-auto sm:w-1/2 sm:mr-6"
      />


      <div className="sm:w-1/2 flex flex-col justify-between" >
        <div>
          <Select
            labelPlacement={"outside-left"}
            label={t('dict_placeholder') + ' :'}
            placeholder={t('select_dict')}
            selectedKeys={[selectedUUID]}
            defaultSelectedKeys={[dicts[selectedUUID]?.dict_name]}
            onChange={(e) => setSelectedUUID(e.target.value)}
            classNames={
              {
                label: "dark:text-gray-300 min-w-max self-center",
              }
            }
          >
            {Object.keys(dicts).map(key => (
              <SelectItem key={key} value={key}>{dicts[key]?.dict_name}</SelectItem>
            ))}

          </Select>

          <p className="mt-4 text-justify dark:text-gray-300 ">
            {t("project_description")}
          </p>
        </div>       
        <div className="my-8 gap-2  flex flex-wrap  justify-between">
          <Button
            color="success"
            onClick={handleBack}
            className="py-2 text-xs sm:text-sm min-w-[150px] flex-1"
            startContent={<IoReturnDownBackOutline />}
          >
            {t("g_back_to_labeling")}
          </Button>

          <Button
            color="success"
            onClick={handleTrain}
            className="py-2 text-xs sm:text-sm min-w-[150px] flex-1"
          >
            <IoSettingsOutline />
            {isTrained ? t("retrain") : t("train")}
          </Button>

          {isTrained && (
            <Button
              color="success"
              onClick={() => goToStep(2)}
              className="py-2 text-xs sm:text-sm min-w-[150px] flex-1"
              endContent={<MdPreview />}
            >
              {t("preview")}
            </Button>
          )}
        </div>

      </div>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        className="sm:max-w-lg"
      >
        <ModalContent>
          <ModalHeader className="text-lg font-semibold">
            {t2("training")}
          </ModalHeader>
          <ModalBody className="flex flex-col items-center">
            <CircularProgress
              aria-label="Loading..."
              strokeWidth={2}
              value={value}
              color="warning"
              classNames={{
                svg: "w-24 h-24",
                indicator: theme === "dark" ? "text-white" : "text-black",
                track: theme === "dark" ? "text-gray-800" : "text-gray-200",
                value: `text-xl ${theme === "dark" ? "text-white" : "text-black"}`,
              }}
              showValueLabel
            />
            <p className="mt-4 text-center">
              {t2("pls_wait")}
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FingerLabelingTrainSection;