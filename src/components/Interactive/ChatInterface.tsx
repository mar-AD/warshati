"use client";

import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import DynamicRight from "./DynamicRight";
import ThirdPhase from "./ThirdPhase/ThirdPhase"; // ✅ Import ThirdPhase
import { CommencerDataSets } from "@/lib/data";
import Image from "next/image";
import waveing_robot from "../../../public/images/Commencer/waveing-robot.gif";
import image from "../../../public/images/Commencer/image.png";
import space_man from "../../../public/images/Home/parcours/space_man.png";
import circle from "../../../public/images/Home/digitalLab/circles.png";
import flight from "../../../public/images/Home/hero/flight.png";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";

const ChatInterface = () => {
  // const [currentStep, setCurrentStep] = useState(0);
  const [leftText, setLeftText] = useState("Hi, I’m Wsep...");
  const [screenIndex, setScreenIndex] = useState(0);
  const [showDefaultRight, setShowDefaultRight] = useState(true);
  const [showLeft, setShowLeft] = useState(true);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setLeftText(CommencerDataSets[0].question);
      setShowDefaultRight(false);
      setScreenIndex(1);
    }, 5000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div className="relative p-14 flex flex-col items-center justify-center h-screen overflow-hidden">
      <ProgressBar 
        currentStep={screenIndex} 
        totalSteps={CommencerDataSets.length + 4} 
        onPrev={() => setScreenIndex((prev) => Math.max(prev - 1, 0))} 
      />

      <Image src={space_man} alt="" className="absolute right-14" />
      <Image src={flight} alt="" className="absolute left-0" />
      <Image src={circle} alt="" className="absolute -top-16 -left-44 w-[22rem] h-[25rem]" />
      <Image src={circle} alt="" className="absolute right-56 -bottom-60 w-[35rem] h-[41rem]" />
      <Image src={circle} alt="" className="absolute -left-20 -bottom-60 w-[35rem] h-[41rem]" />


      <motion.div
        variants={FadeUp(1)}
        initial="initial"
        animate="animate"
        viewport={{ once: true }} 
        className="relative inline-block"
      >
        <Image src={waveing_robot} alt="Waving Robot" className="relative" />

        {showLeft && (
          <motion.div
            key={leftText}
            variants={FadeUp(1)}
            initial="initial" 
            animate="animate"
            exit="initial"
            viewport={{ once: true }}
            className="absolute top-1 left-[-16rem]"
          >
            <Image src={image} alt="Main Image" className="w-96 h-36" />
            <motion.p 
              variants={FadeUp(1)}
              initial="initial"
              animate="animate"
              exit="initial"
              className="absolute inset-0 flex items-center justify-center text-violet-700 text-lg font-bold text-[30px]"
            >
              {leftText}
            </motion.p>
          </motion.div>
        )}
    </motion.div>

      {showDefaultRight && (
        <motion.div
          variants={FadeUp(2)}
          initial="initial"
          animate="animate"
          exit="initial"
          className="absolute top-[10rem] right-[25rem] text-center w-[35rem] h-[36rem]"
        >
          <div className="relative">
            <Image src={image} alt="Main Image" className="w-[35rem] h-36" />
            <p className="absolute inset-0 flex items-center justify-center text-violet-700 text-lg font-bold text-[30px]">
              Let’s build a learning path <br /> just for you
            </p>
          </div>
        </motion.div>
      )}

      {!showDefaultRight && screenIndex < 3 && (
        <motion.div
          variants={FadeUp(2)}
          initial="initial"
          animate="animate"
          exit="initial"
          className="absolute top-[10rem] right-[25rem] text-center w-[25rem] h-[36rem]"
        >
          <DynamicRight screenIndex={screenIndex} setScreenIndex={setScreenIndex} setLeftText={setLeftText} />
        </motion.div>
      )}

      {screenIndex === 3 && (
        <motion.div
          variants={FadeUp(2)}
          initial="initial"
          animate="animate"
          exit="initial"
          className="absolute top-[10rem] right-[25rem] text-center w-[25rem] h-[36rem]"
        >
          <ThirdPhase setScreenIndex={setScreenIndex} setLeftText={setLeftText} setShowLeft={setShowLeft} />
        </motion.div>
      )}

    </div>
  );
};

export default ChatInterface;
