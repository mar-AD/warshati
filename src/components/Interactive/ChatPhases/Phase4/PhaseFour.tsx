import { CommencerDataSets } from "@/lib/data";
import ChoicesList from "../ChoicesList";
import { useEffect } from "react";

interface FourthSetProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
  setShowLeft: (show: boolean) => void;
}

const FourthSet = ({ setScreenIndex, setLeftText, setShowLeft }: FourthSetProps) => {
  useEffect(() => {
    setShowLeft(true);
    setLeftText(CommencerDataSets[2].question); 
  }, [setShowLeft, setLeftText]);

  const handleReplySelect = (reply: string) => {
    setLeftText(reply);
    
    setTimeout(() => {
      setScreenIndex(5);
    }, 7000);
  };

  return <ChoicesList data={CommencerDataSets[2].answers} onSelect={handleReplySelect} />;
};

export default FourthSet;
