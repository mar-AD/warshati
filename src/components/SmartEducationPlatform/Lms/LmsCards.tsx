import Image from "next/image";
import { cn } from "@/lib/utils";
import { LmsDataType } from "@/lib/types";
import { FadeRight, FadeUp } from "@/lib/animations";
import { motion } from "framer-motion";

const LmsCards = ({ item }: { item: LmsDataType }) => {
  return (
    <motion.div
  variants={FadeUp(0.2)}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className={cn(
    "flex flex-col text-center items-center gap-y-10 lg:gap-y-20 sm:gap-y-20 md:gap-y-20 relative rounded-3xl py-6 px-3 shadow-xl shadow-black/5  bg-white cursor-pointer",
    "w-full sm:w-[250px] md:w-[300px] lg:w-[253px] lg:h-[362px] flex-grow-0"
  )}
>
  <div
    className={cn("rounded-xl overflow-hidden")}
    style={{ backgroundColor: item.color }}
  >
    <Image
      src={item.image}
      alt=""
      className="w-[70px] sm:w-[90px] md:w-[110px] lg:w-24 object-cover p-5"
    />
  </div>

  <p className={cn("text-base sm:text-base md:text-lg lg:text-[20px] text-stone-500 ")}>
    {item.text}
  </p>
</motion.div>

  );
};

export default LmsCards;
