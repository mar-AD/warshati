"use client"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import flight from "/public/images/Home/hero/flight.png";
import Image from "next/image"
import FirstSectionCards from "./1stSectionCards";
import SecondSectionCards from "./2ndSectionCards";
import { useTranslations } from "next-intl";

const ConceptDuProgramme = () => {
    const t = useTranslations("smartWorkshopsProject.concepts")
    return (
        <div className=" relative bg-white px-5 sm:px-14 md:px-14 lg:px-14 py-20 max-md:py-10">
            <Image src={flight} alt="" className=" absolute top-5 -left-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/>    
            <motion.h1
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center font-extrabold font-Poppins lg:text-6xl md:text-4xl text-2xl">
                {t("title")}
            </motion.h1>
            <motion.p
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-purple-800 font-semibold font-Poppins text-center text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] !leading-relaxed pt-3"
            >
                {t("subTitle")}
            </motion.p>

            <FirstSectionCards/>

            <motion.p
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=" text-slate-600 font-semibold font-Poppins text-center text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] !leading-relaxed mt-14"
            >
                {t.rich('subSubTitle', {
                    highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                })}
            </motion.p>

            <SecondSectionCards/>

        </div>
    )
}
export default ConceptDuProgramme