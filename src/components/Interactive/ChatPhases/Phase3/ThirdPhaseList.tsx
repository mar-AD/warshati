import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import { ThirdPhaseData } from "@/lib/data";
import Image from "next/image";

interface ThirdChoicesProps {
    onSelect: (index: number) => void;
}

const ThirdChoices = ({ onSelect }: ThirdChoicesProps) => {
    return (
        <motion.div
        variants={FadeUp(2)}
        initial="initial"
        animate="animate"
        exit="initial"
        className=""
        >
        <div className="flex flex-col gap-4">
            {ThirdPhaseData.choices.slice(1).map((item, index) => {
            const actualIndex = index + 1;

            return (
                <motion.div
                key={actualIndex}
                className={`flex items-center justify-between gap-4 p-4 border rounded-3xl transition-all duration-300 hover:cursor-pointer
                    border-[#A678E3] hover:bg-[#A678E3]/30 hover:border-[#A678E3]
                `}
                onClick={() => onSelect(actualIndex)}
                whileTap={{ scale: 0.95 }}
                >
                <p className="font-bold lg:text-[18px] md:text-[15px] sm:text-[15px] xm:text-[15px]">{item.text}</p>
                {item.nextCard && (
                    <Image className="lg:w-[50px] lg:h-[50px] max-md:w-8 max-md:h-8" src={item.nextCard.image} alt={item.text} width={50} height={50} />
                )}
                </motion.div>
            );
            })}
        </div>
        </motion.div>
    );
};

export default ThirdChoices;
