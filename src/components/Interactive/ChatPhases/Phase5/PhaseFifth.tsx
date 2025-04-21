import { CommencerDataSets } from "@/lib/data";
import { useEffect } from "react";
import FifthPhaseList from "./FifthPhaseList";
import { useTranslations } from "next-intl";

interface FifthSetProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
}

const FifthSet = ({ setScreenIndex, setLeftText }: FifthSetProps) => {
  const t = useTranslations("commencer.commencerDataSets.3");
  useEffect(() => {
    setLeftText(t("question"));
  }, [setLeftText]);

  const handleReplySelect = (reply: string) => {
    setLeftText(reply);
    
    setTimeout(() => {
      setScreenIndex(6);
    }, 7000);
  };

  const translatedAnswers = CommencerDataSets[3].answers.map((answer, index) => ({
    ...answer,
    text: t(`answers.${index}.text`),
    reply: t(`answers.${index}.reply`),
  }));

  return <FifthPhaseList data={translatedAnswers} onSelect={handleReplySelect} />;
};

export default FifthSet;
