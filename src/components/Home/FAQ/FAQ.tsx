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
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Sont les questions les plus fréquentes mais n’hésitez pas à nous contactez pour en savoir plus.</p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-5 items-start">
                {FAQData.map((faq, index) => (
                    <FAQCard key={index} faq={faq} index={index}/>
                ))}
            </div>
        </div>
    )
}

export default FAQ