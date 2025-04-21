import { CommencerDataSets } from "@/lib/data";
import ChoicesList from "../ChoicesList";
import { useTranslations } from "next-intl";

interface SetTwoProps {
    setScreenIndex: (index: number) => void;
    setLeftText: (text: string) => void;
  }
  
  const SetTwo = ({ setScreenIndex, setLeftText }: SetTwoProps) => {
    const t = useTranslations("commencer.commencerDataSets.1");
    const handleReplySelect = (reply: string) => {
      setLeftText(reply);
      setTimeout(() => {
        setScreenIndex(3);
      }, 7000);
    };

    const translatedAnswers = CommencerDataSets[1].answers.map((answer, index) => ({
      ...answer,
      text: t(`answers.${index}.text`),
      reply: t(`answers.${index}.reply`),
    }));
  
    return <ChoicesList data={translatedAnswers} onSelect={handleReplySelect} />;
  };
  
  export default SetTwo;
  