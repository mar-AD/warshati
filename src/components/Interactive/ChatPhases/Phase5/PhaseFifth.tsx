import { CommencerDataSets } from "@/lib/data";
import { useEffect } from "react";
import FifthPhaseList from "./FifthPhaseList";

interface FifthSetProps {
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
}

const FifthSet = ({ setScreenIndex, setLeftText }: FifthSetProps) => {
  useEffect(() => {
    setLeftText(CommencerDataSets[2].question);
  }, [setLeftText]);

  const handleReplySelect = (reply: string) => {
    setLeftText(reply);
    
    setTimeout(() => {
      setScreenIndex(6);
    }, 7000);
  };

  return <FifthPhaseList data={CommencerDataSets[3].answers} onSelect={handleReplySelect} />;
};

export default FifthSet;
