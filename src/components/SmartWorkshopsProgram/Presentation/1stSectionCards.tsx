
import Image from "next/image";
import { presontationData1_1 } from "@/lib/data";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";

const FirstSectionCards = () => {
    return (
        <motion.div
        variants={FadeUp(.6)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} 
        className="bg-violet-900 py-10 px-6 sm:py-12 sm:px-12 md:py-14 md:px-16 lg:py-16 lg:px-20 xl:px-28 rounded-2xl mt-10 sm:mt-12 md:mt-16 z-10">
            <motion.div
            variants={FadeUp(.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                {presontationData1_1.map((item, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-6 bg-transparent">

                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 rounded-2xl bg-white/20 p-2 sm:p-3">
                    <Image src={item.image} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>

                    <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{item.text}</h2>
                    <p className="text-white/70 text-base mt-1 sm:mt-2 font-Inter">{item.discreption}</p>
                    </div>
                </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default FirstSectionCards;
