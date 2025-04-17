"use client"
import { FadeOut, FadeUp } from "@/lib/animations"
import { prioritairesData } from "@/lib/data"
import { motion } from "framer-motion"
import prioritaires from "/public/images/R&I/prioritaires/prioritaires_1.png"
import { useTranslations } from "next-intl"
const Prioritaires = () => {
    const t = useTranslations("r&i.prioritaires")
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
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
            <div className="relative flex justify-center items-start">
                <motion.img
                    variants={FadeOut(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    loading="lazy" src={prioritaires.src} className="absolute max-lg:hidden" alt="" />
                <div className="grid lg:grid-cols-2 place-self-center gap-x-80 lg:gap-y-20 gap-y-10 overflow-hidden">
                    {
                        prioritairesData.map((item, index) => (
                            <motion.div
                                variants={FadeUp(item.delay)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                key={index} className="space-y-2 overflow-hidden w-fit">
                                <h1 className="font-semibold lg:text-[40px] text-2xl 2xl:text-nowrap leading-tight">{t(`items.${index}.title`)}</h1>
                                <p className="text-slate-500 max-w-96 max-lg:text-sm">{t(`items.${index}.description`)}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Prioritaires