"use client";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

const useWebcam = (
  captureInterval: number = 5000,
  imagesLimit: number = 100,
  handleFileChange: (files: FileList | null | any) => void
) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [imageCount, setImageCount] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  const stopWebcam = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (countdownRef.current) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }

    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    setIsCapturing(false);
    setCountdown(null);
    setImageCount(0);
  }, []);

  useEffect(() => {
    return () => stopWebcam();
  }, [stopWebcam]);

  const captureImage = useMemo(() => {
    return () => {
      if (videoRef.current && imageCount < imagesLimit) {
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => {
            if (blob) {
              const file = new File([blob], `capture-${Date.now()}.jpg`, {
                type: "image/jpeg",
              });
              handleFileChange([file]);
            }
          });
        }
        setImageCount((prev) => {
          const newCount = prev + 1;
          if (newCount >= imagesLimit) {
            stopWebcam();
          }
          return newCount;
        });
      }
    };
  }, [imageCount, imagesLimit, handleFileChange, stopWebcam]);

  const startWebcam = useCallback(() => {
    setIsCapturing(true);
    setCountdown(3);

    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(countdownRef.current as NodeJS.Timeout);
          countdownRef.current = null;

          navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
              if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();

                intervalRef.current = setInterval(() => {
                  captureImage();
                }, captureInterval);
              }
            });
        }
        return prev ? prev - 1 : null;
      });
    }, 1000);
  }, [captureInterval, captureImage]);

  return {
    videoRef,
    isCapturing,
    countdown,
    startWebcam,
    stopWebcam,
  };
};

export default useWebcam;
