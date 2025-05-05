"use client";

import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { toast } from 'react-toastify';
import { TbSettingsBolt } from 'react-icons/tb';


import { useTranslations } from "next-intl";
import { BiSolidSkipNextCircle } from 'react-icons/bi';
import { CHUNK_SIZE, CLASSIFICATION_MAX_CLASSES } from '../config/constants';

import { StepContext } from '../providers';
import { sendPostRequest } from '../actions';
import { ClassItem } from './Class';
// import useSession from '../utils/session';
import { chunkArray } from '../utils';


const Gather = () => {
  const t = useTranslations("appliedAI.classification.validation_messages");
  const t2 = useTranslations("appliedAI.classification.class_item");
  const t3 = useTranslations("appliedAI.step_navigation");


  const MIN_CLASSES_ERROR = t("min_classes_error");
  const DUPLICATE_CLASS_NAME_ERROR = t("class_name_error");
  const NO_SESSION_ID_ERROR = t("no_session_id_error");
  const IMAGE_UPLOAD_ERROR = t("image_upload_error");
  const IMAGE_UPLOAD_SUCCESS = t("image_upload_success");

  const { goToStep } = useContext(StepContext);
  const [classes, setClasses] = useState<number[]>([0, 1]);
  const [classData, setClassData] = useState<{ class_name: string; images: string[] }[]>([
    { class_name: '', images: [] },
    { class_name: '', images: [] }
  ]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isReady, setIsReady] = useState(false);
  const [isSkip, setIsSkip] = useState(false);

  const removeClass = useCallback((index: number) => {
    if (classes.length <= 2) {
      toast.error(MIN_CLASSES_ERROR);
      return;
    }
    setClasses((prevClasses) => prevClasses.filter((_, i) => i !== index));
    setClassData((prevData) => prevData.filter((_, i) => i !== index));
  }, [classes]);

  const addClass = useCallback(() => {
    setClasses((prevClasses) => [...prevClasses, prevClasses.length]);
    setClassData((prevData) => [...prevData, { class_name: '', images: [] }]);
  }, [classes]);

  const updateClassData = useCallback((index: number, data: { class_name: string; images: string[] }) => {
    setClassData((prevData) => {
      const newData = [...prevData];
      newData[index] = data;
      return newData;
    });
  }, []);

  useEffect(() => {
    let flag = true;
    const classNames = new Set<string>();

    for (const classItem of classData) {
      if (!classItem.class_name || !classItem.images.length) {
        flag = false;
        break;
      }
      if (classNames.has(classItem.class_name)) {
        flag = false;
        toast.error(DUPLICATE_CLASS_NAME_ERROR);
        break;
      }
      classNames.add(classItem.class_name);
    }

    setIsReady(flag);
  }, [classData]);

  const handleUploadImagesToBackend = useCallback(async () => {
    const sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      toast.error(NO_SESSION_ID_ERROR);
      return;
    }

    setIsPending(true);

    try {
      await Promise.all(
        classData.map(async (classItem) => {
          const imageChunks = chunkArray(classItem.images, CHUNK_SIZE);
          for (let i = 0; i < imageChunks.length; i++) {
            const chunk = imageChunks[i];
            const data = {
              session_id: sessionId,
              classes: [{ class_name: classItem.class_name, images: chunk }],
            };
            try {
              const response = await sendPostRequest('/image/upload/', data);
              if (!response) {
                throw new Error(IMAGE_UPLOAD_ERROR);
              }
            } catch {
              toast.error(`${IMAGE_UPLOAD_ERROR} - Chunk ${i + 1} failed.`);
            }
          }
        })
      );
      toast.success(IMAGE_UPLOAD_SUCCESS);
      localStorage.removeItem('isClassificationTrainingDone');
      localStorage.setItem('sessionHasData', 'true');
      goToStep(1);
    } catch {
      toast.error(IMAGE_UPLOAD_ERROR);
    } finally {
      setIsPending(false);
    }
  }, [classData, goToStep]);

  const handleRemoveClass = useCallback((index: number) => {
    removeClass(index);
  }, [removeClass]);


  useEffect(() => {
    const skip = localStorage.getItem('isClassificationTrainingDone');
    setIsSkip(Boolean(skip));
  }, []);


  return (
    <div className='flex gap-2 flex-col'>
      {classes.map((index) => (
        <ClassItem
          key={index}
          index={index}
          updateClassData={updateClassData}
          removeClass={() => handleRemoveClass(index)}
        />
      ))}
      <div className='flex gap-3 flex-col-reverse sm:flex-row sm:justify-between sm:mt-3'>
        <Button
          color="success"
          className='sm:max-w-max w-full'
          variant="ghost"
          onClick={handleUploadImagesToBackend}
          isLoading={isPending}
          isDisabled={!isReady}
          endContent={<TbSettingsBolt />}
        >
          {isPending ? t2("image_uploading") : t3("go_to_training")}
        </Button>

        <Button
          color="default"
          className='sm:max-w-max w-full'
          variant="bordered"
          radius={isSkip ? "full" : "md"}
          onClick={addClass}
          startContent={<span>--</span>}
          endContent={<span>--</span>}
          isDisabled={classes.length === CLASSIFICATION_MAX_CLASSES}
        >
          {t2("add_class")}
        </Button>
        {
          isSkip && <Button
            color="default"
            className='sm:max-w-max w-full'
            variant="ghost"
            onClick={() => goToStep(1)}
            endContent={<BiSolidSkipNextCircle />
            }
          >
            {t3("skip_to_training")}
          </ Button>
        }
      </div>
    </div >
  );
};

export default Gather;
