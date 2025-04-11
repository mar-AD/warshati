import Image from "next/image"
import { cn } from "@/lib/utils";
import { ComposantesDuProgrammeDataType } from "@/lib/types";
import { FadeRight } from "@/lib/animations";
import { motion } from "framer-motion";

const ComposantesDuProgrammeCard = ({ item }: { index: number, item: ComposantesDuProgrammeDataType }) => {
    return (
        <motion.div
        variants={FadeRight(item.delay!)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={cn(
            "flex flex-col text-center items-center gap-y-5 relative p-6 transition-all duration-300 group w-96  cursor-pointer",
            "flex-basis-100 sm:flex-basis-48 md:flex-basis-48 lg:flex-basis-32 overflow-hidden"
        )}
        >


            <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: item.color }}
            >
            <Image
                src={item.image}
                alt={item.title}
                className="w-[80px] sm:w-[100px] md:w-[110px] lg:w-[120px] object-cover p-6"
            />
            </div>

            <h3 className={cn("text-lg sm:text-xl md:text-2xl lg:text-[30px] font-bold ")}>
            {item.title}
            </h3>

            <p className={cn("text-sm sm:text-base md:text-lg lg:text-[24px] text-stone-500 ")}>
            {item.description}
            </p>

        </motion.div>
    )
}

export default ComposantesDuProgrammeCard