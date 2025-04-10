"use client"
import { QFPData } from "@/lib/data"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import QFPCard from "./QFPCard"
import LastPart from "./LastPart"
const QFP = () => {

    return (
        <>
        <div className="bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-4xl text-2xl text-center !leading-tight">Questions fréquemment posées</motion.h1>
                
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 space-y-5">
                    {QFPData.slice(0, 5).map((faq, index) => (
                        <QFPCard key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </div>
        <LastPart/>
        </>
    )
}

export default QFP