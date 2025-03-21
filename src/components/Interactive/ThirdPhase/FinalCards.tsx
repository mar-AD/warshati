import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import Image, { StaticImageData } from "next/image";

interface FinalCardsProps {
  cards: { text: string; icon: StaticImageData }[];
}

const FinalCards = ({ cards }: FinalCardsProps) => {
  return (
    <motion.div
      variants={FadeUp(2)}
      initial="initial"
      animate="animate"
      exit="initial"
      className="absolute top-[10rem] "
    >
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-start gap-4 p-4 border rounded-3xl border-[#A678E3] hover:bg-[#A678E3]/30 transition-all duration-300 w-[14rem]"
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-bold text-[16px]">{card.text}</p>
            <Image src={card.icon} alt={card.text} width={50} height={50} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FinalCards;
