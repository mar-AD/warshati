
"use client";

import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import ThirdPhase from "./ChatPhases/Phase3/PhaseThree";
import { CommencerDataSets } from "@/lib/data";
import Image from "next/image";
import waveing_robot from "../../../public/images/Commencer/waveing-robot2.gif";
import image from "../../../public/images/Commencer/image.png";
import space_man from "../../../public/images/Home/parcours/space_man.png";
import circle from "../../../public/images/Home/digitalLab/circles.png";
import flight from "../../../public/images/Home/hero/flight.png";
import { motion } from "framer-motion";
import { FadeTyping, FadeUp } from "@/lib/animations";
import PhaseFour from "./ChatPhases/Phase4/PhaseFour";
import PhaseOne from "./ChatPhases/Phase1_2/PhaseOne";
import PhaseTwo from "./ChatPhases/Phase1_2/PhaseTwo";
import PhaseFifth from "./ChatPhases/Phase5/PhaseFifth";
import SixthPhase from "./ChatPhases/Phase6/SixthPhase";
import SeventhPhase from "./ChatPhases/Phase7/SeventhPhase";

const ChatInterface = () => {
  const [leftText, setLeftText] = useState("Hi, I’m Wsep...");
  const [screenIndex, setScreenIndex] = useState(0);
  const [showLeft, setShowLeft] = useState(true);
  const [screenWidth, setScreenWidth] = useState(1024);
  const [overflowVisible, setOverflowVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setLeftText("Let’s build a learning path just for you");
    }, 5000);

    const secondTimeout = setTimeout(() => {
      setLeftText(CommencerDataSets[0].question);
      setScreenIndex(1);
    }, 10000);

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (

  <div className="relative p-14 flex flex-col items-center justify-center min-h-screen overflow-hidden max-md:mt-10 ">
    <ProgressBar 
      currentStep={screenIndex} 
      totalSteps={8} 
      onPrev={() => setScreenIndex((prev) => Math.max(prev - 1, 0))} 
    />

    <Image src={space_man} alt="" className="absolute right-14 z-[-1]" />
    <Image src={flight} alt="" className="absolute left-0" />
    <Image src={circle} alt="" className="absolute -top-16 -left-44 w-[22rem] h-[25rem]" />
    <Image src={circle} alt="" className="absolute right-56 -bottom-60 w-[35rem] h-[41rem] z-[-1]" />
    <Image src={circle} alt="" className="absolute -left-20 -bottom-60 w-[35rem] h-[41rem]" />

    <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto 
    lg:h-[80vh] lg:mt-0">

    {showLeft && (
      <motion.div
      variants={FadeUp(1)}
      initial="initial"
      animate="animate"
      exit="initial"
      viewport={{ once: true }}
      className="relative flex flex-col items-center text-center w-full lg:w-auto h-[80%] order-1"
    >

      <div className="relative w-full max-w-[30rem] h-auto">
        <Image src={image} alt="Main Image" className="w-full h-auto" />

        <motion.p
          key={leftText}
          variants={FadeTyping(1)}
          initial="initial"
          animate="animate"
          exit="initial"
          className="absolute inset-0 flex items-center justify-start text-violet-700 font-bold text-[calc(1vw+0.5rem)] max-md:text-[18px] pl-[15%] pr-[5%] break-words leading-tight text-left">
          {leftText}
        </motion.p>
      </div>
    </motion.div>
    
    
    )}

    <motion.div
      variants={{
        initial: { opacity: 0, y: 40 },
        animate: {
          opacity: 1,
          y: screenWidth >= 1020 ? (showLeft ? 0 : -80) : 0,
          x: screenWidth >= 1020 ? (showLeft ? 0 : -20) : 0,
          transition: { duration: 0.5, ease: "easeInOut" },
        },
      }}
      initial="initial"
      animate="animate"
      exit={{ opacity: 1, x: 0 }}
      className="relative w-full lg:w-auto flex justify-center order-2 md:w-[15rem] max-md:w-[15rem] max-sm:w-[13rem]"
    >

      <Image src={waveing_robot} alt="Waving Robot" className="relative" />
    </motion.div>

    <motion.div
      key={screenIndex}
      variants={FadeUp(2)}
      initial="initial"
      animate="animate"
      exit="initial"
      className={`w-full ${showLeft ? "lg:w-[500px]" : "lg:w-[800px]"} text-center order-3 lg:order-3 
        ${screenIndex === 1 ? "md:h-[85%] lg:h-[95%]" 
        : screenIndex === 7 ? "md:h-[40%] lg:h-[40%]" 
        : "md:h-[85%] lg:h-[85%]"}
        max-sm:h-[500px]
        
        lg:mt-[10vh]  ${overflowVisible ? "lg:overflow-visible" : " lg:overflow-y-auto"}  scrollbar-hidden
      `}
    >
      {screenIndex === 1 && <PhaseOne setScreenIndex={setScreenIndex} setLeftText={setLeftText} />}
      {screenIndex === 2 && <PhaseTwo setScreenIndex={setScreenIndex} setLeftText={setLeftText} />}
      {screenIndex === 3 && <ThirdPhase setScreenIndex={setScreenIndex} setLeftText={setLeftText} setShowLeft={setShowLeft} setOverflowVisible={setOverflowVisible} />}
      {screenIndex === 4 && <PhaseFour setScreenIndex={setScreenIndex} setLeftText={setLeftText} setShowLeft={setShowLeft} />}
      {screenIndex === 5 && <PhaseFifth setScreenIndex={setScreenIndex} setLeftText={setLeftText} />}
      {screenIndex === 6 && <SixthPhase setScreenIndex={setScreenIndex} setLeftText={setLeftText} setOverflowVisible={setOverflowVisible}/>}
      {screenIndex === 7 && <SeventhPhase setLeftText={setLeftText} />}
    </motion.div>

  </div>
</div>

  );
};

export default ChatInterface;
