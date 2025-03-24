import { useState, useEffect } from "react";
import { ThirdPhaseData } from "@/lib/data";
import Card from "../Cards";
import ThirdPhaseList from "./ThirdPhaseList";
import SelectedTopics from "./SelectedTopics";
import { StaticImageData } from "next/image";

interface ThirdPhaseProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
  setShowLeft: (show: boolean) => void;
  setOverflowVisible: (visible: boolean) => void;
}

interface ChoiceType {
  text: string;
  nextCard: {
    leftText: string;
    cardText: string;
    icon: StaticImageData;
    image: StaticImageData;
    timeout: number;
    finalCards: {
      text: string;
      icon: StaticImageData;
    }[];
  };
}

const ThirdPhase = ({ setScreenIndex, setLeftText, setShowLeft, setOverflowVisible }: ThirdPhaseProps) => {
  const [step, setStep] = useState<number>(0);
  const [selectedChoice, setSelectedChoice] = useState<ChoiceType | null>(null);

  useEffect(() => {
    if (step === 0) {
      setShowLeft(true);
      setLeftText(ThirdPhaseData.firstCard.leftText || "");
      setOverflowVisible(true);
      setTimeout(() => setStep(1), ThirdPhaseData.firstCard.timeout);
    }

    if (step === 1) {
      setLeftText("Let’s create a personalized learning journey just for you!");
    }

    if (step === 2) {
      setOverflowVisible(true); 
    }

    if (step === 3) {
      setShowLeft(false); 
      setOverflowVisible(false);
      setTimeout(() => {
        setScreenIndex(4);
      }, 7000);
    }
  }, [step, setScreenIndex, setLeftText, setShowLeft, setOverflowVisible]);

  const handleChoiceSelect = (choiceIndex: number) => {
    console.log("Selected Index:", choiceIndex);

    const choice = ThirdPhaseData.choices[choiceIndex];

    if (!choice || !choice.nextCard) return;

    setSelectedChoice(choice as ChoiceType);
    setLeftText(choice.nextCard.leftText || "");
    setStep(2);

    setTimeout(() => setStep(3), choice.nextCard.timeout);
  };

  return (
    <>
      {step === 0 && <Card cardData={ThirdPhaseData.firstCard} />}
      {step === 1 && <ThirdPhaseList onSelect={handleChoiceSelect} />}
      {step === 2 && selectedChoice && <Card cardData={selectedChoice.nextCard} />}
      {step === 3 && selectedChoice && <SelectedTopics cards={selectedChoice.nextCard.finalCards} />}
    </>
  );
};

export default ThirdPhase;
