import { Presentation1Type } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "@/lib/animations";
import arrow from "/public/images/Formation/formation-arrow.png"
import useMediaQuery from "@/lib/UseMediaQuery";


const ProgramCard = ({isReverse, item, arrowStyles, arrowSize}: { item: Presentation1Type,isReverse?: boolean, arrowStyles: string, arrowSize: string }) => {
    const isScreen = useMediaQuery("(min-width: 1440px)");
    return (
        <motion.div
            variants={isReverse? FadeRight(0.2): FadeLeft(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={` relative rounded-xl lg:w-[35rem] w-full lg:h-[308px] md:w-[23rem] flex flex-col justify-center items-center lg:p-6 p-3 font-Poppins  text-center shadow-2xl shadow-black/30 space-y-6 border border-violet-900 z-20`}
        >
            <div className="flex flex-col items-center gap-2 font-bold lg:text-2xl text-lg w-full">
                <Image className="w-16" src={item.image} alt="" />
                <h1 className= "text-violet-800 lg:text-[24px]">{item.text} </h1>
            </div>
            <p className="text-stone-600 max-md:text-xs lg:text-[16px]">{item.discreption}
            </p>
            {isScreen &&  (
                <div className={`absolute ${arrowStyles} z-0`}>
                <Image src={arrow} alt="Arrow" className={`${arrowSize}`} />
                </div>
            )}
        </motion.div>
    );
};

export default ProgramCard;
