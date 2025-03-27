
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
import warchati from "../../../public/images/Commencer/w.png";

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
    {!overflowVisible && (
      <div
        className={`
          absolute right-14 z-[-1] max-sm:hidden
          transition-all duration-500 ease-in-out
          ${[1, 2, 3, 4, 5, 7].includes(screenIndex) ? "top-[50%]" : "top-[20%]"}
        `}
      >
        <Image
          src={space_man}
          alt=""
          className="w-[8rem] sm:w-[8rem] md:w-[10rem] lg:w-[14rem]"
        />
      </div>
    )}

    <Image src={flight} alt="" className="absolute left-0 w-[8rem] sm:w-[8rem] md:w-[10rem] lg:w-auto md:top-52 max-md:top-52 lg:top-auto z-[-1] transition-all duration-500 ease-in-out"/>

    <Image src={circle} alt="" className={`absolute z-[-1] 
        ${overflowVisible ? "-top-32 -left-56 w-[18rem] h-[23rem] sm:w-[22rem] sm:h-[27rem] md:w-[25rem] md:h-[30rem]" 
        : [1, 2, 3, 4, 5, 7].includes(screenIndex) ? "-top-32 -left-56 w-[18rem] h-[23rem] sm:w-[22rem] sm:h-[27rem] md:w-[25rem] md:h-[30rem]" 
        : "-top-16 -left-44 w-[15rem] h-[20rem] sm:w-[20rem] sm:h-[25rem] md:w-[22rem] md:h-[25rem]"} 
        transition-all duration-500 ease-in-out`}
    />

    <Image src={circle} alt="" className={`absolute z-[-1] 
        ${overflowVisible ? "right-56 -bottom-60 w-[12rem] h-[18rem]" 
        : [1, 2, 3, 4, 5, 7].includes(screenIndex) ? "-right-72 bottom-0" 
        : "right-56 -bottom-60"} 
        w-[20rem] h-[25rem] sm:w-[28rem] sm:h-[35rem] md:w-[35rem] md:h-[41rem] hidden md:block transition-all duration-500 ease-in-out`}
    />

    <Image src={circle} alt="" className={`absolute -left-20 -bottom-60 w-[25rem] h-[30rem] sm:w-[28rem] sm:h-[35rem] md:w-[35rem] md:h-[41rem] z-[-1] 
        ${overflowVisible ? "block" : [1, 2, 3, 4, 5, 7].includes(screenIndex) ? "hidden" : "block"} 
        transition-all duration-500 ease-in-out`} 
    />

    {screenIndex === 7 && (
      <>
        <Image src={circle} alt="" className="absolute -left-16 -bottom-48 lg:w-[30rem] lg:h-[35rem] sm:w-[22rem] sm:h-[26rem] md:w-[25rem] md:h-[30rem] z-[-1]" />

        <Image src={circle} alt="" className="absolute left-1/2 -translate-x-1/2 -bottom-80 w-[20rem] h-[24rem] sm:w-[24rem] sm:h-[28rem] md:w-[28rem] md:h-[32rem] z-[-1]" />
      </>
    )}

    <div className="flex flex-col lg:flex-row items-center justify-center w-full mx-auto lg:h-[80vh] lg:mt-0">

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
        <Image src={warchati} alt="Warchati" className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[4rem] md:w-[3rem] sm:w-[2rem] max-sm:w-[2rem] transition-all duration-500 ease-in-out"/>
    
      </motion.div>

      <motion.div
        key={screenIndex}
        variants={FadeUp(2)}
        initial="initial"
        animate="animate"
        exit="initial"
        className={`w-full ${showLeft ? "lg:w-[500px]" : "lg:w-[800px]"} text-center order-3 lg:order-3 
          ${screenIndex === 1 ? "md:h-[85%] lg:h-[95%]" 
          : screenIndex === 7 ? "md:h-[40%] lg:h-[40%] !lg:mt-0" 
          : "md:h-[85%] lg:h-[85%]"}
          max-sm:max-h-[700px]
          
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
