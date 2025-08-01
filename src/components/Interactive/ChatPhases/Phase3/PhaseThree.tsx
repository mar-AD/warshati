"use client";

import { useState, useEffect } from "react";
import { ThirdPhaseData } from "@/lib/data";
import Card from "../Cards";
import ThirdPhaseList from "./ThirdPhaseList";
import SelectedTopics from "./SelectedTopics";
import { useTranslations } from "next-intl";
import { ChoiceType_2, FinalCardType, MergedCard } from "@/lib/types";

interface ThirdPhaseProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
  setShowLeft: (show: boolean) => void;
  setOverflowVisible: (visible: boolean) => void;
}

const ThirdPhase = ({
  setScreenIndex,
  setLeftText,
  setShowLeft,
  setOverflowVisible,
}: ThirdPhaseProps) => {
  const t = useTranslations("commencer.thirdPhaseData");
  const [step, setStep] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<MergedCard | null>(null);

  const mergedChoices = t
    .raw("choices")
    .map((choice: ChoiceType_2, i: number) => {
      const visual = ThirdPhaseData.choices[i];
      const finalCards =
        choice?.nextCard?.finalCards?.map((fc: FinalCardType, j: number) => ({
          text: fc.text,
          icon: visual?.nextCard?.finalCards[j].icon,
        })) || [];

      return {
        text: choice.text,
        leftText: choice.leftText,
        nextCard: visual?.nextCard
          ? {
              leftText: choice.nextCard.leftText,
              cardText: choice.nextCard.cardText,
              icon: visual.nextCard.icon,
              image: visual.nextCard.image,
              timeout: visual.nextCard.timeout,
              finalCards,
            }
          : null,
      };
    });

  const firstCard = {
    leftText: t("firstCard.leftText"),
    cardText: t("firstCard.cardText"),
    icon: ThirdPhaseData.firstCard.icon,
    image: ThirdPhaseData.firstCard.image,
    timeout: ThirdPhaseData.firstCard.timeout,
    finalCards: [],
  };

  useEffect(() => {
    if (step === 0) {
      setShowLeft(true);
      setLeftText(firstCard.leftText);
      setOverflowVisible(true);
      setTimeout(() => setStep(1), firstCard.timeout);
    }

    if (step === 1) {
      setLeftText(mergedChoices[0].leftText);
    }

    if (step === 2) {
      setOverflowVisible(true);
    }

    if (step === 3) {
      setShowLeft(false);
      setOverflowVisible(false);
      setTimeout(() => {
        setScreenIndex(4);
      }, 10000);
    }
  }, [step]);

  const handleChoiceSelect = (choiceIndex: number) => {
    const choice = mergedChoices[choiceIndex];
    if (!choice || !choice.nextCard) return;

    setSelectedChoice(choice.nextCard);
    setLeftText(choice.nextCard.leftText);
    setStep(2);

    setTimeout(() => setStep(3), choice.nextCard.timeout);
  };

  return (
    <>
      {step === 0 && <Card cardData={firstCard} />}
      {step === 1 && (
        <ThirdPhaseList onSelect={handleChoiceSelect} choices={mergedChoices} />
      )}
      {step === 2 && selectedChoice && <Card cardData={selectedChoice} />}
      {step === 3 && selectedChoice && (
        <SelectedTopics cards={selectedChoice.finalCards} />
      )}
    </>
  );
};

export default ThirdPhase;
