import { CommencerDataSets } from "@/lib/data";
import ChoicesList from "../ChoicesList";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

interface FourthSetProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
  setShowLeft: (show: boolean) => void;
}

const FourthSet = ({ setScreenIndex, setLeftText, setShowLeft }: FourthSetProps) => {
  const t = useTranslations("commencer.commencerDataSets.2");
  useEffect(() => {
    setShowLeft(true);
    setLeftText(t("question")); 
  }, [setShowLeft, setLeftText]);

  const handleReplySelect = (reply: string) => {
    setLeftText(reply);
    
    setTimeout(() => {
      setScreenIndex(5);
    }, 7000);
  };

  const translatedAnswers = CommencerDataSets[2].answers.map((answer, index) => ({
    ...answer,
    text: t(`answers.${index}.text`),
    reply: t(`answers.${index}.reply`),
  }));

  return <ChoicesList data={translatedAnswers} onSelect={handleReplySelect} />;
};

export default FourthSet;
