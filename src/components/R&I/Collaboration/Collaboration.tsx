"use client"
import {  FadeUp } from "@/lib/animations"
import { collaborationData } from "@/lib/data"
import { motion } from "framer-motion"
import CollaborationCard from "./CollaborationCard"
import { useTranslations } from "next-intl"
const Collaboration = () => {
    const t = useTranslations("r&i.collaboration")
    return (
        <div className="lg:px-10 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 bg-light-gray">
            <div className="space-y-5">
                <motion.h1
                    variants={FadeUp(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="font-bold lg:text-[70px] md:text-3xl text-2xl text-center !leading-tight text-violet-800">{t("title")}</motion.h1>
                <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="flex justify-center">
                    <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">{t("subtitle")}</p>
                </motion.div>
            </div>
            <div className="flex items-start gap-20 justify-center flex-wrap">
                {
                    collaborationData.map((item, index) => (
                        <CollaborationCard 
                        key={index} 
                        item={{
                            ...item,
                            title: t(`items.${index}.title`),
                            description: t(`items.${index}.description`),
                        }}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Collaboration