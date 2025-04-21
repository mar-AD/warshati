import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface SeventhPhaseProps {
  setLeftText: (text: string) => void;
}

const SeventhPhase = ({ setLeftText }: SeventhPhaseProps) => {
  const t = useTranslations("commencer")
  useEffect(() => {
    setLeftText(t("last"));
  }, [setLeftText]);

  return (
    <div className="flex flex-col items-center gap-4 max-md:mt-5">
      <button className="bg-violet-700 text-white px-6 py-5 rounded-3xl font-bold lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px]
        w-full max-w-[25rem] sm:max-w-[20rem] md:max-w-[22rem] 
        hover:bg-violet-800 transition">
        {t("create")}
      </button>
      
      <button className="border border-violet-700 text-violet-700 px-6 py-5 rounded-3xl font-bold lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] 
        w-full max-w-[25rem] sm:max-w-[20rem] md:max-w-[22rem] 
        hover:bg-violet-50 transition">
        {t("try")}
      </button>
    </div>
  );
  
};

export default SeventhPhase;
