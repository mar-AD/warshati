import { CommencerDataSets } from "@/lib/data";
import CommencerList from "./CommencerList";

interface SetOneProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
}

const SetOne: React.FC<SetOneProps> = ({ setScreenIndex, setLeftText }) => {
  const handleReplySelect = (reply: string) => {
    setLeftText(reply);
    setTimeout(() => {
      setLeftText(CommencerDataSets[1].question);
      setScreenIndex(2);
    }, 7000);
  };

  return <CommencerList data={CommencerDataSets[0].answers} onSelect={handleReplySelect} />;
};

export default SetOne;
