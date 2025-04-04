import { ObjectifDuProgrammeDataType } from "@/lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeLeft } from "@/lib/animations";
import arrow from "/public/images/Formation/formation-arrow.png"
import useMediaQuery from "@/lib/UseMediaQuery";


const ProgramCard = ({ item, isLast, isSecond, isBlackText, arrowStyles, arrowSize}: { item: ObjectifDuProgrammeDataType, isLast: boolean, isSecond: boolean, isBlackText: boolean, arrowStyles: string, arrowSize: string }) => {
    const isScreen = useMediaQuery("(min-width: 1440px)");
    return (
        <motion.div
            variants={FadeLeft(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: item.delay }}
            className={` relative flex flex-col sm:flex-row items-center bg-white p-4 rounded-xl shadow-lg border border-violet-800 w-full max-w-[500px] min-h-[118px] ${isLast ? 'ml-auto' : ''} ${isSecond ? 'ml-auto mr-auto' : ''}`}
        >
            <div className="mb-4 sm:mb-0 flex justify-center p-4 rounded-xl" style={{ backgroundColor: `#${item.color}` }}>
            <Image
                src={item.image}
                alt={item.text}
                className="w-10 h-8 rounded-lg"
            />
            </div>
    
            <div className="pl-0 sm:pl-6 text-center sm:text-left">
                <h3 className={`text-xl lg:text-[20px] font-semibold ${isBlackText ? 'text-black' : 'text-violet-800'}`}>{item.text}</h3>
                {item.discreption && (
                    <p className="mt-2 text-sm lg:text-base text-gray-600">{item.discreption}</p>
                )}
            </div>
            {isLast && isScreen &&  (
                <div className={`absolute ${arrowStyles}`}>
                <Image src={arrow} alt="Arrow" className={`${arrowSize}`} />
                </div>
            )}
        </motion.div>
    );
};

export default ProgramCard;
