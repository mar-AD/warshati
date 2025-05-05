"use client";

import { toast } from "react-toastify";
import React, { useCallback, useEffect, useState } from "react";
import { VideoStreamProps } from "./types";
import { useVideoStream } from "./hooks";
import { getFingers } from "./utils";
import { FPS } from "./config/constants";




const VideoStream: React.FC<VideoStreamProps> = ({ isLoaded, setProcessedImage, additionalData }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const captureFrame = useCallback(() => {
    if (!videoRef.current) return;
    if (!isLoaded) return;


    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");

    if (context) {
      context.save();
      context.scale(-1, 1); // Flip the image horizontally
      context.drawImage(videoRef.current, -canvas.width, 0, canvas.width, canvas.height);
      context.restore();

      const dataURL = canvas.toDataURL("image/jpeg");
      const dataURLWithoutPrefix = dataURL.replace("data:image/jpeg;base64,", "");
      const data = {
        image: dataURLWithoutPrefix,
        static_image_mode: false,
        fingers
      };

      if (data.image === "data:,")
        return;

      if (socket) {
        socket.send(JSON.stringify(data));
      }
    }
  }, [additionalData, socket]);

  const videoRef = useVideoStream(isLoaded, captureFrame, Number(FPS));

  const fingers = getFingers()


  useEffect(() => {
    if (isLoaded) {
      const ws_base_url = process.env.NEXT_PUBLIC_WS_BASE_URL || "ws://localhost:8000";
      const ws = new WebSocket(`${ws_base_url}/ws/hand-detection/`);
      ws.onopen = () => {
        console.log("WebSocket connection opened");
      };
      ws.onmessage = (event) => {
        const response = JSON.parse(event.data);
        if (response.processed_image) {
          setProcessedImage(response.processed_image);
        } else if (response.error) {
          toast.error(response.error);
        }
      };
      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        toast.error("WebSocket error occurred");
      };
      ws.onclose = () => {
        console.log("WebSocket connection closed");
        setSocket(null);
      };
      setSocket(ws);

      return () => {
        ws.close();
      };
    }
  }, [isLoaded, setProcessedImage]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    />
  );
};

export default VideoStream;
