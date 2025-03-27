import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import image_4 from "/public/images/Home/digitalLab/image_4.png";
import image_5 from "/public/images/Home/digitalLab/image_5.png";
import arrow from "/public/images/Home/digitalLab/arrow.png";
import useMediaQuery from "@/lib/UseMediaQuery";

interface CardProps {
  cardData: {
    leftText: string;
    cardText: string;
    icon: StaticImageData;
  };
}

const Card = ({ cardData }: CardProps) => {
  return (
    <motion.div
      variants={FadeUp(2)}
      initial="initial"
      animate="animate"
      exit="initial"
      className="relative flex justify-center lg:mt-[6rem] mt-[3rem] max-md:mt-5 z-50"
    >
      {useMediaQuery("(min-width: 1410px)") && (
      <>
        <Image className="absolute top-[3rem] right-[-4rem] w-8 z-50" src={arrow} alt="Arrow" />
        <Image className="absolute top-[8rem] left-[-.5rem] w-10 z-50" src={arrow} alt="Arrow" />
      </>
    )}

      <div
        className={cn(
          "relative rounded-xl flex flex-col justify-center items-center pt-0 pb-8 font-Poppins text-center shadow-2xl shadow-black/30 space-y-6 border border-violet-900",
          "w-[35rem] lg:w-[30rem] md:w-[26rem] sm:w-[22rem] xs:w-[18rem]",
          "lg:px-8 md:px-5 sm:px-5",
          "lg:text-2xl md:text-xl sm:text-lg xs:text-base",
          "lg:ml-16 md:ml-4 sm:ml-0"
        )}
      >
        <Image className="absolute -left-12 -top-14" src={image_4} alt="Image 4" />
        <Image className="absolute top-[-48px] right-[-30px]" src={image_5} alt="Image 5" />

        <div className="flex flex-col items-center gap-2 font-bold w-96 lg:w-80 md:w-72 sm:w-60">
          <Image className="w-20 sm:w-16" src={cardData.icon} alt="Card Icon" />
        </div>

        <div className="lg:text-lg md:text-base sm:text-sm xs:text-xs">
          <p className="text-stone-600 font-bold lg:text-[18px] max-lg:text-sm max-md:text-xs">{cardData.cardText}</p>
        </div>
      </div>
    </motion.div>

  );
};

export default Card;
