import { CommencerDataSets } from "@/lib/data";
import ChoicesList from "../ChoicesList";
import { useTranslations } from "next-intl";

interface SetOneProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
}

const SetOne = ({ setScreenIndex, setLeftText }: SetOneProps) => {
  const t = useTranslations("commencer.commencerDataSets.0");
  const tt = useTranslations("commencer.commencerDataSets.1");
  const handleReplySelect = (reply: string) => {
    setLeftText(reply);
    setTimeout(() => {
      setLeftText(tt("question"));
      setScreenIndex(2);
    }, 7000);
  };
  
  const translatedAnswers = CommencerDataSets[0].answers.map((answer, index) => ({
    ...answer,
    text: t(`answers.${index}.text`),
    reply: t(`answers.${index}.reply`),
  }));
  
  return <ChoicesList data={translatedAnswers} onSelect={handleReplySelect} />;
};

export default SetOne;

