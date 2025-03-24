import { useEffect } from "react";

interface SeventhPhaseProps {
  setLeftText: (text: string) => void;
}

const SeventhPhase = ({ setLeftText }: SeventhPhaseProps) => {
  useEffect(() => {
    setLeftText("Your Personalized Learning path is ready.");
  }, [setLeftText]);

  return (
    <div className="flex flex-col items-center gap-4">
      <button className="bg-violet-700 text-white px-6 py-5 rounded-3xl font-bold text-[22px] w-[25rem] hover:bg-violet-800 transition">
        Create a free account
      </button>
      <button className="border border-violet-700 text-violet-700 px-6 py-5 rounded-3xl font-bold text-[22px] w-[25rem] hover:bg-violet-50  transition">
        Try a Lesson first
      </button>
    </div>
  );
};

export default SeventhPhase;
