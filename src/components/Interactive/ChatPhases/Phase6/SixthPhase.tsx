import { useState, useEffect } from "react";
import { CommencerCards } from "@/lib/data";
import Card from "../Cards";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";

interface SixthPhaseProps {
  setScreenIndex: (index: number) => void;  
  setLeftText: (text: string) => void;
  setOverflowVisible: (visible: boolean) => void;
}


const SixthPhase = ({ setScreenIndex, setLeftText, setOverflowVisible }: SixthPhaseProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    setLeftText(CommencerCards[currentCardIndex].leftText || "");
    setOverflowVisible(true);

    const cardTimeout = setTimeout(() => {
      if (currentCardIndex < CommencerCards.length - 1) {
        setCurrentCardIndex((prev) => prev + 1);
      } else {
        setOverflowVisible(false);
        setScreenIndex(7);
      }
    }, 15000);

    return () => clearTimeout(cardTimeout);
  }, [currentCardIndex, setScreenIndex, setLeftText, setOverflowVisible]);

  return (
    <motion.div
    key={currentCardIndex}
    variants={FadeUp(2)}
    initial="initial"
    animate="animate"
    exit="initial"
    className=""
  >
    <Card cardData={CommencerCards[currentCardIndex]} />
  </motion.div>
  )
};

export default SixthPhase;
