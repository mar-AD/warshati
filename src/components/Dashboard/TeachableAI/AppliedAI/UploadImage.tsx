"use client";

import { Card, CardBody, Divider, Image as NextImage } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { UploadImageProps } from "./types";
import { imageToDataURL } from "./utils";
import UploadImageCard from "./UploadImageCard";



const UploadImage: React.FC<UploadImageProps> = ({ setIsImgLoaded, setProcessedImage, processFrameAction }) => {

  const [images, setImages] = useState<string[]>([]);
  const acceptType = ['jpg', 'png', 'gif'];

  const onChange = (imageList: ImageListType) => {
    const newImages = imageList.map(image => image.dataURL || "");
    setImages(newImages);
  };

  const onError = (errors: any) => {
    if (errors.acceptType) toast.error("Your selected file type is not allowed");
    if (errors.maxFileSize) toast.error("Selected file size exceeds maxFileSize");
    if (errors.resolution) toast.error("Selected file does not match your desired resolution");
  };

  useEffect(() => {
    const processImage = async () => {
      if (images.length > 0) {
        try {
          const encodedImage = await imageToDataURL(images[0]);
          const data = await processFrameAction(encodedImage, { static_image_mode: true });
          setProcessedImage(data.processed_image);
          setIsImgLoaded(true);
        } catch (error) {
          console.error("Error processing the image:", error);
          toast.error("Error processing the image");
          setProcessedImage("");
          setIsImgLoaded(false);
        }
      }
    };

    processImage();
  }, [images, setProcessedImage, setIsImgLoaded, processFrameAction]);

  return (
    <Card>
      <CardBody>
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

        {images[0] && (
          <>
            <Divider className="my-4" />
            <NextImage
              src={images[0]}
              alt="Uploaded"
              width={500}
              height={300}
              className="block mx-auto my-2 rounded-lg shadow-lg max-w-full h-auto"
            />
          </>
        )}
      </CardBody>
    </Card>
  );
};


export default UploadImage;