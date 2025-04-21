"use client"
import { QFPData_2 } from "@/lib/data"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import QFPCard from "./QFPCard"
import LastPart from "./LastPart"
import { useTranslations } from "next-intl"
const QFP = () => {
    const t = useTranslations("smartWorkshopsProgram.faq")
    return (
        <>
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-4xl text-2xl text-center !leading-tight">{t("title")}</motion.h1>
                
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1 space-y-5">
                    {QFPData_2.slice(0, 5).map((faq, index) => (
                        <QFPCard 
                        key={index} 
                        faq={{
                            ...faq,
                            title:t(`items.${index}.title`),
                            content:t(`items.${index}.content`)
                        }} 
                        index={index} />
                    ))}
                </div>
            </div>
        </div>
        <LastPart/>
        </>
    )
}

export default QFP