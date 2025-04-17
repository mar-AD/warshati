import Image from "next/image";
import { cn } from "@/lib/utils";
import { FormationType } from "@/lib/types";
import { FadeRight } from "@/lib/animations";
import { motion } from "framer-motion";

const FormationCard = ({ index, item }: { index: number, item: FormationType }) => {
    const cardColors = [
        "bg-customCard-card1",
        "bg-customCard-card2",
        "bg-customCard-card3",
        "bg-customCard-card4"
    ];

    // Get the color for the current index
    const bgColor = cardColors[index % cardColors.length];

    return (
        <motion.div
            variants={FadeRight(item.delay!)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} 
            className={cn(
                "flex flex-col items-center gap-y-5 relative border rounded-3xl place-self-center sm:w-96 h-[388px] shadow-2xl shadow-black/5 duration-300 group",
            )}
        >
            <div className={cn("w-full rounded-2xl overflow-hidden flex justify-center items-center p-4", bgColor)}>
                <Image 
                    src={item.image} 
                    alt={item.title} 
                    className="w-[150px] h-auto object-cover"
                />
            </div>

            <div className="text-center pb-5 px-10 bg-white rounded-b-3xl w-full">
                <h3 className="text-xl font-bold pb-3">{item.title}</h3>
                <p className=" text-stone-500">{item.description}</p>
            </div>
        </motion.div>
    );
};

export default FormationCard;
