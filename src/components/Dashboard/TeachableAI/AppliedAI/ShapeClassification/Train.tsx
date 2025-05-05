"use client";

import React, { useCallback, useContext, useEffect, useState } from 'react';
import TrainForm from './TrainForm';
import { Button, Card, CardBody, CardHeader, Divider, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react';
import { StepContext } from '../providers';
import { FaFeatherAlt } from "react-icons/fa";
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import useSession from '../utils/session';
import { TrainingAccordion } from '../Classification';

const Train: React.FC = () => {
  const [isModelTrained, setIsModelTrained] = useState<boolean>(false);
  const t = useTranslations("train");
  const { goToStep } = useContext(StepContext);

  const { createSession } = useSession();

  useEffect(() => {
    const modelTrained = Boolean(localStorage.getItem("isClassificationTrainingDone"));
    setIsModelTrained(modelTrained);
  }, []);

  const handleGoGatherData = () => {
    goToStep(0);
  };

  const handNewModel = () => {
    localStorage.removeItem("sessionId");
    createSession()
    goToStep(0);
  }

  const handleTestModel = () => {
    goToStep(2);
  };

  const handleWebSocketSuccess = useCallback(() => {
    setIsModelTrained(true);
    localStorage.setItem("isClassificationTrainingDone", "true");
  }, []);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (
    <>
      <div className="flex gap-10 h-full flex-col sm:flex-row-reverse">
        <TrainForm
          className="w-full sm:w-1/3 flex gap-5 flex-col"
          onTrainingSuccess={handleWebSocketSuccess}
        />
        <Divider className="hidden sm:block py-[153px] md:mx-10" orientation="vertical" />
        <div className="flex flex-col gap-3 w-full sm:w-2/3">
          <TrainingAccordion className="hidden sm:block w-full " />
          <div className="flex gap-3 flex-col-reverse sm:flex-row">
            <Button onPress={onOpen} fullWidth variant='ghost' startContent={<IoReturnDownBackOutline />}
            >{t("gather_data")}</Button>

            {isModelTrained && <Button onClick={handleTestModel} variant='shadow' fullWidth color='secondary' endContent={<FaFeatherAlt />}>
              {
                t("test_model")
              }
            </Button>}
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl' className='p-0' classNames={
        {
          base: "bg-white p-0 m-0",
        }
      }
        shadow='lg'
        hideCloseButton
        backdrop={"blur"}
      >
        <ModalContent>
          {() => (
            <ModalBody className='flex flex-row-reverse' >
              <Card isPressable={true} className="py-4 w-1/2 hover:bg-blue-200 dark:hover:bg-blue-800 cursor-pointer" onPress={handleGoGatherData}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{t("gather_btn.existing.title")}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <p>{t("gather_btn.existing.description")}</p>
                </CardBody>
              </Card>

              <Card isPressable onPress={handNewModel} className="py-4 w-1/2 hover:bg-purple-200 dark:hover:bg-purple-800 cursor-pointer">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{t("gather_btn.new.title")}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <p>{t("gather_btn.new.description")}</p>
                </CardBody>
              </Card>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Train;
