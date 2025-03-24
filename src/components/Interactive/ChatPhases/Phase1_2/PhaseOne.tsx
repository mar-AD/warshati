import { CommencerDataSets } from "@/lib/data";
import ChoicesList from "../ChoicesList";

interface SetOneProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
}

const SetOne = ({ setScreenIndex, setLeftText }: SetOneProps) => {
  const handleReplySelect = (reply: string) => {
    setLeftText(reply);
    setTimeout(() => {
      setLeftText(CommencerDataSets[1].question);
      setScreenIndex(2);
    }, 7000);
  };

  return <ChoicesList data={CommencerDataSets[0].answers} onSelect={handleReplySelect} />;
};

export default SetOne;
