import { CommencerDataSets } from "@/lib/data";
import CommencerList from "./CommencerList";

interface SetTwoProps {
    setScreenIndex: (index: number) => void;
    setLeftText: (text: string) => void;
  }
  
  const SetTwo: React.FC<SetTwoProps> = ({ setScreenIndex, setLeftText }) => {
    const handleReplySelect = (reply: string) => {
      setLeftText(reply);
      setTimeout(() => {
        setScreenIndex(3);
      }, 7000);
    };
  
    return <CommencerList data={CommencerDataSets[1].answers} onSelect={handleReplySelect} />;
  };
  
  export default SetTwo;
  