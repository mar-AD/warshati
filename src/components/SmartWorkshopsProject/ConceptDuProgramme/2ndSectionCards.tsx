import Image from "next/image";
import { conceptDuProgrammesData_2 } from "@/lib/data";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import useMediaQuery from "@/lib/UseMediaQuery";

const SecondSectionCards = () => {
    const isScreen = useMediaQuery("(min-width: 1026px) and (max-width: 1430px)");
    return (
    <div className=" md:px-16 lg:px-28 rounded-2xl mt-16">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {conceptDuProgrammesData_2.map((item, index) => (
            <motion.div
                key={index}
                variants={FadeUp(.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group flex flex-col items-center shadow-2xl shadow-black/30 bg-transparent border border-violet-500 rounded-xl p-4 "
            >
                <div className="w-full h-auto flex justify-center mb-4">
                    <div className="w-16 sm:w-16 md:w-20 lg:w-32">
                        <Image
                            src={item.image}
                            alt={item.text}
                            className="w-full h-auto object-cover rounded-xl"
                        />
                    </div>
                </div>

                <div
                className={`bg-violet-700 text-white px-6 rounded-full w-full text-center font-bold transition-all duration-300 group-hover:bg-violet-900 h-[4.5rem] overflow-hidden flex items-center justify-center
                    ${isScreen ? 'text-[1rem] leading-[1.5rem]' : 'text-sm md:text-xl lg:text-2xl'}
                `}
                >
                    {item.text}
                </div>

            </motion.div>
            ))}
        </div>
        </div>
    );
};

export default SecondSectionCards;
