"use client"
import React, { useState, useCallback, useEffect } from 'react';
import { Card } from '@nextui-org/react';
import { v4 as uuidv4 } from 'uuid';
import { ClassItemProps } from '../../types';
import { fileToDataUrl } from '../../utils/fileUtils';
import { useWebcam } from '../../hooks';
import ClassHeader from './ClassHeader';
import ClassBody from './ClassBody';
import ClassFooter from './ClassFooter';


const imagesPerPage = 10;

const ClassItem: React.FC<ClassItemProps> = ({ index, updateClassData, removeClass }) => {
  const [images, setImages] = useState<{ id: string, url: string }[]>([]);
  const [imagesToDisplay, setImagesToDisplay] = useState<{ id: string, url: string }[]>([]);
  const [className, setClassName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [nextBatchIndex, setNextBatchIndex] = useState(imagesPerPage);

  const getImages = useCallback(() => images.map((img) => img.url), [images]);

  const handleFileChange = useCallback(async (files: File[]) => {
    setIsLoading(true);
    if (!files) {
      setIsLoading(false);
      return;
    }

    const fileArray = Array.from(files);
    const newImages: { id: string, url: string }[] = [];

    for (let i = 0; i < fileArray.length; i++) {
      const url = await fileToDataUrl(fileArray[i]);
      newImages.push({ id: uuidv4(), url });
      setUploadProgress(Math.round(((i + 1) / fileArray.length) * 100));
    }

    setImages((prevImages) => {
      const updatedImages = [...prevImages, ...newImages];
      setImagesToDisplay(updatedImages.slice(0, imagesPerPage));
      setNextBatchIndex(imagesPerPage);
      return updatedImages;
    });

    setIsLoading(false);
  }, []);

  const handleLoadMore = useCallback(() => {
    setImagesToDisplay((prevImages) => [
      ...prevImages,
      ...images.slice(nextBatchIndex, nextBatchIndex + imagesPerPage)
    ]);
    setNextBatchIndex((prevIndex) => prevIndex + imagesPerPage);
  }, [images, nextBatchIndex]);

  const handleDeleteImage = useCallback((imageId: string) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter(image => image.id !== imageId);
      setImagesToDisplay(updatedImages.slice(0, imagesPerPage));
      setNextBatchIndex(imagesPerPage);
      return updatedImages;
    });
  }, []);

  const removeAllImagesHandler = useCallback(() => {
    setImages([]);
    setImagesToDisplay([]);
    setNextBatchIndex(imagesPerPage);
  }, []);

  useEffect(() => {
    updateClassData(index, { class_name: className, images: getImages() });
  }, [className, images, index, updateClassData, getImages]);

  const {
    videoRef,
    isCapturing,
    countdown,
    startWebcam,
    stopWebcam
  } = useWebcam(2000, 10, handleFileChange);

  return (
    <div className="max-w-screen-2xl" data-index={index}>
      <Card>
        <ClassHeader
          className={className}
          setClassName={setClassName}
          handleFileChange={handleFileChange}
          removeClass={removeClass}
          isLoading={isLoading}
          images={images}
          onImageRemoveAll={removeAllImagesHandler}
          startWebcam={startWebcam}
          stopWebcam={stopWebcam}
          isCapturing={isCapturing}
        />
        <ClassBody
          imagesToDisplay={imagesToDisplay}
          isLoading={isLoading}
          uploadProgress={uploadProgress}
          handleDeleteImage={handleDeleteImage}
          videoRef={videoRef}
          isCapturing={isCapturing}
          countdown={countdown}
        />
        <ClassFooter
          images={images}
          imagesToDisplay={imagesToDisplay}
          handleLoadMore={handleLoadMore}
        />
      </Card>
    </div>
  );
};

export default ClassItem;
