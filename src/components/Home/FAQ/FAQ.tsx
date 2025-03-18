"use client"
import { FAQData } from "@/lib/data"
import FAQCard from "./FAQCard"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
const FAQ = () => {

    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-4xl text-2xl text-center !leading-tight">Questions fréquemment posées</motion.h1>
                
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 space-y-5">
                    {FAQData.slice(0, 5).map((faq, index) => (
                        <FAQCard key={index} faq={faq} index={index} />
                    ))}
                </div>

                <div className="flex-1 space-y-5">
                    {FAQData.slice(5, 10).map((faq, index) => (
                        <FAQCard key={index + 5} faq={faq} index={index + 5} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default FAQ