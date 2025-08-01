"use client";

import React, { useEffect, useRef } from 'react';
import { CanvasProcessedFrameProps } from './types';



const CanvasProcessedFrame: React.FC<CanvasProcessedFrameProps> = ({ processedImage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (processedImage && canvas && context) {
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };

      img.onerror = (error) => {
        console.error('Error loading image:', error);
      };

      img.src = `data:image/jpeg;base64,${processedImage}`;
    }

  }, [processedImage]);

  return (
    <canvas
      ref={canvasRef}
      id="processed-canvas"
      className="w-full h-auto max-w-full rounded-lg"
    ></canvas>
  );
}

export default CanvasProcessedFrame;
