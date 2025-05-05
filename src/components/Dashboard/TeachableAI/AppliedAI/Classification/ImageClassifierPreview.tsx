"use client";

import React, { useContext, useState } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";
import { Tabs, Tab, Card, CardBody, Divider, Button } from "@nextui-org/react";
import { FaVideo } from 'react-icons/fa6';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { toast } from 'react-toastify';
import Image from 'next/image';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { StepContext } from '../providers';
import { sendPostRequest } from '../actions';
import { PredictedClass } from '.';
import UploadImageCard from '../UploadImageCard';


const ImageClassifierPreview = () => {
  const [selectedTab, setSelectedTab] = useState("UploadPhoto");
  const [images, setImages] = useState<string[]>([]);
  const acceptType = ['jpg', 'png', 'gif', 'jpeg'];
  const [predictedClass, setPredictedClass] = useState<string>("");
  const { goToStep } = useContext(StepContext);
  const t = useTranslations("appliedAI.image_classifier_preview");
  const t2 = useTranslations("appliedAI.step_navigation");

  const onChange = (imageList: ImageListType) => {
    const newImages = imageList.map(image => image.dataURL || "");
    setImages(newImages);
    getPredictedClass(newImages[0]);
  };

  const onError = (errors: any) => {
    if (errors.acceptType) toast.error("Your selected file type is not allowed");
    if (errors.maxFileSize) toast.error("Selected file size exceeds maxFileSize");
    if (errors.resolution) toast.error("Selected file does not match your desired resolution");
  };

  const getPredictedClass = async (dataURL: string) => {
    const sessionId = localStorage.getItem("sessionId");
    const data = await sendPostRequest(`/image/classify/${sessionId}`, { image: dataURL });
    if (data?.predicted_class)
      setPredictedClass(data.predicted_class)
  }


  return (
    <div className="h-5/6">
      <div className="flex flex-col md:flex-row h-full justify-around">
        <div className="flex flex-col md:w-[28rem] max-w-md">
          <Tabs
            className='mx-auto'
            aria-label="Options"
            color="primary"
            variant="bordered"
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key.toString())}
            disabledKeys={["stream"]}
          >
            <Tab
              key="UploadPhoto"
              title={
                <div className="flex items-center space-x-2">
                  <MdAddPhotoAlternate size={20} />
                  <span>{t("upload_photo")}</span>
                </div>
              }
            >
              <ImageUploading
                value={images.map((img) => ({ dataURL: img }))}
                onChange={onChange}
                onError={onError}
                acceptType={acceptType}
              >
                {({
                  onImageUpload,
                  isDragging,
                  dragProps,
                }) => (
                  <UploadImageCard onImageUpload={onImageUpload} isDragging={isDragging} dragProps={dragProps} />
                )}
              </ImageUploading>

            </Tab>
            <Tab
              key="stream"
              title={
                <div className="flex items-center space-x-2">
                  <FaVideo size={20} />
                  <span>{t("video_stream")}</span>
                </div>
              }
            >
              <div className="flex justify-center">
                Coming Soon
              </div>
            </Tab>
          </Tabs>

          <Button
            color="success"
            onClick={() => goToStep(1)}
            className="py-2"
            startContent={<IoReturnDownBackOutline />}
          >
            {t2("back")}
          </Button>
        </div>

        <Divider orientation="vertical" className="my-8 md:mx-8" />

        <div className="flex-grow">
          {
            predictedClass &&
            <div className='relative'>
              <Card className="w-max h-max">
                <CardBody >
                  {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 group sm:w-[600px]">
                      <Image
                        width={600}
                        height={340}
                        alt="Uploaded Image"
                        src={image}
                        className="rounded-md max-h-screen"
                      />
                    </div>
                  ))}

                </CardBody>
              </Card>
              <div className='absolute bottom-8 right-1/4'>
                <PredictedClass predictedClass={predictedClass} />
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default ImageClassifierPreview;