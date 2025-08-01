"use client";
import React, { useMemo } from 'react';
import { CardBody, Progress, ScrollShadow } from '@nextui-org/react';
import { ClassBodyProps } from '../../types';
import ImageCard from '../../ImageCard';


const ClassBody: React.FC<ClassBodyProps> = ({
  imagesToDisplay,
  isLoading,
  uploadProgress,
  handleDeleteImage,
  videoRef,
  isCapturing,
  countdown,
}) => {
  const countdownDisplay = useMemo(() => {
    if (countdown !== null && countdown > 0) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-6xl font-bold z-10 mr-6 !rounded-lg">
          {countdown}
        </div>
      );
    }
    return null;
  }, [countdown]);

  return (
    <CardBody className="px-3 sm:px-0 sm:ml-3 py-0 text-small text-default-400 flex flex-row">

      {isLoading ? (
        <Progress
          value={uploadProgress}
          className="w-full"
          color="primary"
          size="sm"
        />
      ) : (
        <ScrollShadow
          size={70}
          className="w-full flex gap-2 mr-3"
          orientation="horizontal"
          offset={1}
        >
          {imagesToDisplay.map((image) => (
            <ImageCard key={image.id} image={image} handleDeleteImage={handleDeleteImage} />
          ))}
        </ScrollShadow>
      )}
      <div className="relative">
        <div className='mr-6'>
          {isCapturing && (
            <video
              ref={videoRef}
              className="w-96 h-56 !rounded-lg"
              autoPlay
              playsInline
              muted
            />
          )}
          {countdownDisplay}
        </div>
      </div>
    </CardBody>
  );
};

export default ClassBody;
