"use client"
import Thematique from "./Thematique/Thematique";
import Curricula from "./Curricula/Curricula";
import Pedagogy from "./Pedagogy/Pedagogy";
import WorkShopCard from "./WorkShopCard";
import Parcours from "./Parcours/Parcours";
import Niveaux from "./Niveaux/Niveaux";
import { ageGroups } from "@/lib/data";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import pen_line from "/public/images/Home/hero/pen_line.png";
import victore_1 from "/public/images/Home/age/victore_1.png";
import Image from "next/image";
import Formation from "./Formation/Formation";
import { useTranslations } from "next-intl";
const WorkShop = () => {
    const  t  = useTranslations("home.Warshati_Pedagogical_Framework");
    return (
        <div className="">
            <div className="lg:px-20 py-20 px-5">
                <motion.div
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                    <h1 className="font-Poppins font-extrabold lg:text-[82px] md:text-5xl text-3xl !leading-tight lg:max-w-[90rem] md:max-w-[41rem] max-w-[26rem] text-center">{t("title")}</h1>
                </motion.div>
                <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-start gap-3 mt-28 sm:mt-20 max-sm:mt-16"
                >
                    <div className="relative flex items-start gap-5 lg:pl-32 md:pl-20 sm:pl-10 max-sm:pl-5 max-w-[61rem]">
                        <div className="flex flex-col items-start">
                            <h1 className="text-[32px] lg:text-[32px] md:text-[28px] sm:text-[24px] max-sm:text-[20px] font-bold text-start text-muted-foreground">
                            {t("subtitle")}
                            </h1>
                            <Image 
                                className="w-[200px] md:w-[180px] sm:w-[160px] max-sm:w-[140px] lg:w-[220px]" 
                                draggable={false} 
                                src={pen_line} 
                                alt="Pen Line Image" 
                            />
                        </div>

                        <Image 
                            className="absolute left-full top-[44px] lg:w-[290px] md:w-[180px] lg:h-[270px] max-sm:hidden" 
                            draggable={false} 
                            src={victore_1} 
                            alt="Line Image" 
                        />
                    </div>
                </motion.div>

                <div className="grid grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] gap-x-6 gap-y-32 mt-[18.5rem] max-md:mt-36 md:mt-[18.5rem] lg:mt-[18.5rem]">

                    {/* {ageGroups.map((group, index) => (
                        <WorkShopCard delay={group.delay} image={group.image + index + ".png"} ageRange={group.ageRange} description={group.description} key={index} />
                    ))} */}

                    {ageGroups.map((group, index) => (
                        <WorkShopCard
                            key={index}
                            delay={group.delay}
                            image={group.image + index + ".png"}
                            ageRange={t(`ageGroups.${index}.ageRange`)}
                            description={t(`ageGroups.${index}.description`)}
                        />
                    ))}
                </div>
            </div>
            <Pedagogy />
            <Parcours />
            <Niveaux />
            <Curricula />
            <Thematique />
            <Formation />
        </div>
    )
}

export default WorkShop
