import Image from "next/image";
import { cn } from "@/lib/utils";
import { FormationType } from "@/lib/types";
import { FadeRight } from "@/lib/animations";
import { motion } from "framer-motion";

const ExempleDeProjets2ndCard = ({ index, item }: { index: number, item: FormationType }) => {
    const cardColors = [
        "bg-customCard-card1",
        "bg-customCard-card2",
        "bg-customCard-card3",
    ];

    // Get the color for the current index
    const bgColor = cardColors[index % cardColors.length];

    return (
        <motion.div
        variants={FadeRight(item.delay!)}
        initial="initial"
        whileInView="animate"
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        className={cn(
            " bg-white flex flex-col items-center  relative border rounded-3xl place-self-center w-96 shadow-2xl shadow-black/5 duration-300 group lg:h-[464px] lg:min-h-[368px] cursor-pointer" 
        )}
        >
        <div
            className={cn(
            "w-full h-[50%] rounded-2xl overflow-hidden flex justify-center items-center p-4",
            bgColor
            )}
        >
            <Image
            src={item.image}
            alt={item.title}
            className="w-[100px] sm:w-[120px] md:w-[135px] lg:w-[150px] object-cover"
            />
        </div>

        <div className="text-center h-[50%] pb-5 px-10 pt-5 bg-white rounded-b-3xl w-full">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold pb-3">{item.title}</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-stone-500">{item.description}</p>
        </div>
        </motion.div>

    );
};

export default ExempleDeProjets2ndCard;
