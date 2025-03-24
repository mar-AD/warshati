import { CommencerDataSets } from "@/lib/data";
import ChoicesList from "../ChoicesList";

interface SetTwoProps {
    setScreenIndex: (index: number) => void;
    setLeftText: (text: string) => void;
  }
  
  const SetTwo = ({ setScreenIndex, setLeftText }: SetTwoProps) => {
    const handleReplySelect = (reply: string) => {
      setLeftText(reply);
      setTimeout(() => {
        setScreenIndex(3);
      }, 7000);
    };
  
    return <ChoicesList data={CommencerDataSets[1].answers} onSelect={handleReplySelect} />;
  };
  
  export default SetTwo;
  