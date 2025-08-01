"use client";

import { useRef, useEffect, MutableRefObject, useState } from "react";
import { toast } from "react-toastify";

const useVideoStream = (
  isLoaded: boolean,
  captureFrame: () => void,
  fps: number = 15
) => {
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const intervalIdRef: MutableRefObject<number | null> = useRef(null);

  useEffect(() => {
    const getVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        intervalIdRef.current = window.setInterval(captureFrame, 1000 / fps);
      } catch (err) {
        toast.error("Error accessing the camera");
        console.error("Error accessing the camera" + err);
      }
    };

    if (isLoaded) {
      getVideoStream();
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        toast.info("Your camera is closed");
        console.info("Your camera is closed");
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        toast.info("Your camera is closed");
        console.info("Your camera is closed");
      }
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isLoaded, captureFrame, fps]);

  return videoRef;
};

export default useVideoStream;
