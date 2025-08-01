"use client";

import React, { useContext, useEffect, useState } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";
import { Tabs, Tab, Card, CardBody, Divider, Button, Skeleton } from "@nextui-org/react";
import { FaVideo } from 'react-icons/fa6';
import { HiMiniVideoCamera, HiMiniVideoCameraSlash } from "react-icons/hi2";
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { PreviewSectionProps } from './types';
import { StepContext } from './providers';
import VideoStream from './VideoStream';
import UploadImage from './UploadImage';
import CanvasProcessedFrame from './CanvasProcessedFrame';


const PreviewSection: React.FC<PreviewSectionProps> = ({ processFrameAction }) => {
  const [selectedTab, setSelectedTab] = useState("stream");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [processedImage, setProcessedImage] = useState<string>("");
  const t1 = useTranslations('appliedAI.common');
  const t2 = useTranslations("appliedAI.finger-section");
  const { goToStep } = useContext(StepContext);

  useEffect(() => {
    if (selectedTab !== "stream") {
      setIsVideoLoaded(false);
      setProcessedImage("");
    } else {
      setIsImageLoaded(false);
    }
  }, [selectedTab]);

  const toggleVideoLoad = () => {
    setIsVideoLoaded(prev => !prev);
  };

  useEffect(() => {
    if (!isVideoLoaded) {
      setProcessedImage("");
    }
  }, [isVideoLoaded]);

  return (
    <div className="h-5/6 justify-around">
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex flex-col md:w-[28rem] mx-auto max-w-md">
          <Tabs
            className='mx-auto '
            aria-label="Options"
            color="primary"
            variant="bordered"
            selectedKey={selectedTab}
            onSelectionChange={(key) => setSelectedTab(key.toString())}
          >
            <Tab
              key="stream"
              title={
                <div className="flex items-center space-x-2">
                  <FaVideo size={20} />
                  <span>{t1("vid_stream")}</span>
                </div>
              }
            >
              <div className='flex flex-col justify-between gap-3'>
                <Card className="p-4 space-y-5 h-auto" radius="lg">
                  <Skeleton isLoaded={isVideoLoaded} className="rounded-lg">
                    <VideoStream
                      isLoaded={isVideoLoaded}
                      setProcessedImage={setProcessedImage}
                    />
                  </Skeleton>

                  <Divider orientation="horizontal" className="my-4" />
                  <div className="flex justify-center">
                    <Button
                      color="primary"
                      onClick={toggleVideoLoad}
                      endContent={isVideoLoaded ? <HiMiniVideoCameraSlash size={20} /> : <HiMiniVideoCamera size={20} />}
                    >
                      {isVideoLoaded ? t1("close_cam") : t1("open_cam")}
                    </Button>
                  </div>
                </Card>
              </div>
            </Tab>
            <Tab
              key="UploadPhoto"
              title={
                <div className="flex items-center space-x-2">
                  <MdAddPhotoAlternate size={20} />
                  <span>{t1("up_photos")}</span>
                </div>
              }
            >
              <UploadImage
                setIsImgLoaded={setIsImageLoaded}
                setProcessedImage={setProcessedImage}
                processFrameAction={processFrameAction}
              />
            </Tab>
          </Tabs>

          <Button
            color="success"
            onClick={() => goToStep(1)}
            className="py-2"
            startContent={<IoReturnDownBackOutline />}
          >
            {t2("g_back_training")}
          </Button>
        </div>

        <Divider orientation="vertical" className="my-8 md:mx-8" />

        <div className="flex-grow">
          <Card className="w-full h-full">
            <CardBody>
              <Skeleton isLoaded={isVideoLoaded || isImageLoaded} className="w-max rounded-lg">
                <h1 className="text-2xl font-semibold">{t2("prv")}</h1>
              </Skeleton>
              <Divider className="my-4" />
              <Skeleton isLoaded={isVideoLoaded || isImageLoaded} className="w-full h-full rounded-lg">
                <CanvasProcessedFrame processedImage={processedImage} />
              </Skeleton>
            </CardBody>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default PreviewSection;
