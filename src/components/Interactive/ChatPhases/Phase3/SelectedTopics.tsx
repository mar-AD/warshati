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
      className="flex justify-center mt-[6rem] max-md:mt-5 w-full"
    >
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-sm:gap-6 w-full max-w-[42rem] mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between gap-4 p-4 border-2 rounded-3xl border-violet-800 w-full max-w-[20rem] h-[8rem] mx-auto max-sm:h-[5rem]"
            whileTap={{ scale: 0.95 }}
          >
            <p className="font-bold lg:text-[23px] md:text-[19px] sm:text-[18px] xm:text-[17px] text-violet-800 text-left break-words">
              {card.text.includes(" ") ? (
                <>
                  {card.text.split(" ").slice(0, -1).join(" ")}
                  <br />
                  {card.text.split(" ").slice(-1)}
                </>
              ) : (
                card.text
              )}
            </p>

            <div className="bg-violet-800 rounded-full duration-500 w-11 h-11 flex items-center justify-center">
              <Image className="object-contain" src={card.icon} alt={card.text} width={30} height={30}/>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

  );
};

export default FinalCards;
