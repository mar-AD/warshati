import { motion } from "framer-motion";
import SetOne from "./First&secondPhases/FirstSet";
import SetTwo from "./First&secondPhases/SecondSet";
import { FadeUp } from "@/lib/animations";
import Image from "next/image";
import image from "../../../public/images/Commencer/image.png";

interface DynamicRightProps {
  screenIndex: number;
  setScreenIndex: (index: number) => void;
  setLeftText: (text: string) => void;
}

const DynamicRight = ({ screenIndex, setScreenIndex, setLeftText }: DynamicRightProps) => {
  return (
    <motion.div
      key={screenIndex}
      variants={FadeUp(2)}
      initial="initial"
      animate="animate"
      exit="initial"
      className="w-full h-full flex justify-center items-center"
    >
      {screenIndex === 0 && (
        <motion.div 
          variants={FadeUp(2)}
          initial="initial"
          animate="animate"
          exit="initial"
          className="absolute top-[10rem] right-[25rem] text-center w-[25rem] h-[36rem]"
        >
          <Image src={image} alt="Main Image" className="w-[35rem] h-36" />
          <p className="absolute inset-0 flex items-center justify-center text-violet-700 text-lg font-bold text-[30px]">
            Let’s build a learning path <br /> just for you
          </p>
        </motion.div>
      )}

      {screenIndex === 1 && <SetOne setScreenIndex={setScreenIndex} setLeftText={setLeftText} />}
      {screenIndex === 2 && <SetTwo setScreenIndex={setScreenIndex} setLeftText={setLeftText} />}
    </motion.div>
  );
};

export default DynamicRight;