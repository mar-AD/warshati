import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import image_4 from "/public/images/Home/digitalLab/image_4.png";
import image_5 from "/public/images/Home/digitalLab/image_5.png";
import arrow from "/public/images/Home/digitalLab/arrow.png";

interface FirstCardProps {
  cardData: {
    leftText: string;
    cardText: string;
    icon: StaticImageData;
    image: StaticImageData;
  };
}

const FirstCard = ({ cardData }: FirstCardProps) => {
  return (
    <motion.div
      variants={FadeUp(2)}
      initial="initial"
      animate="animate"
      exit="initial"
      className="relative flex justify-center  "
    >
      <Image className="absolute top-[-20px] right-[-20px] w-16" src={arrow} alt="Arrow" />
      <Image className="absolute top-[-10px] right-[10px] w-12" src={image_5} alt="Image 5" />

      <div
        className={cn(
          "relative rounded-xl lg:w-[35rem] w-[23rem] flex flex-col justify-center items-center lg:p-3 p-2 pt-0 font-Poppins text-center shadow-2xl shadow-black/30 space-y-6",
          "border border-violet-900"
        )}
      >
        <Image className="absolute -left-12 -top-14" src={image_4} alt="Image 4" />
        <Image className="absolute top-[-20px] left-[-20px] w-16" src={arrow} alt="Arrow" />
        <div className="flex flex-col items-center gap-2 font-bold lg:text-2xl text-lg w-96">
          <Image className="w-16" src={cardData.icon} alt="Card Icon" />
        </div>
        
        <p className="text-stone-600 max-md:text-xs">{cardData.cardText}</p>
      </div>
    </motion.div>
  );
};

export default FirstCard;
