import Image from "next/image";
import { cn } from "@/lib/utils";
import { LmsDataType } from "@/lib/types";
import { FadeUp } from "@/lib/animations";
import { motion } from "framer-motion";

const LabsCards = ({ item }: { item: LmsDataType }) => {
  return (
    <motion.div
      variants={FadeUp(0.2)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn(
        "flex flex-col text-center items-center relative rounded-3xl py-6 px-3 shadow-xl shadow-black/5 bg-white cursor-pointer",
        "w-full lg:w-[450px] lg:h-[351px] pt-16"
      )}
    >
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div
          className={cn("rounded-full overflow-hidden shadow-md")}
          style={{ backgroundColor: item.color }}
        >
          <Image
            src={item.image}
            alt=""
            className="w-[80px] sm:w-[100px] md:w-[110px] lg:w-24 object-cover p-5"
          />
        </div>
      </div>

      <p className={cn(
        "text-base sm:text-lg md:text-xl lg:text-[30px] text-[#2F327D] mt-8 lg:mt-16 font-medium  !leading-relaxed",
        "w-full px-4 lg:px-8" 
      )}>
        {item.text}
      </p>
    </motion.div>
  );
};

export default LabsCards;