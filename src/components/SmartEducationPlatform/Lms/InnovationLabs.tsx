"use client"
import Image from "next/image"

import { motion } from "framer-motion"
import {  FadeLeft, FadeRight } from "@/lib/animations"
import VideoSlider from "@/components/VideoSlider"
import { ArrowRight } from "lucide-react"
import green_cercle from "/public/images/SmartEducationPlatform/green.png";
import violet_cercle from "/public/images/SmartEducationPlatform/violet.png";
import green_rec from "/public/images/SmartEducationPlatform/green-rec.png";
import violet_rec from "/public/images/SmartEducationPlatform/violet-rec.png";
import { useTranslations } from "next-intl"

const InnovationLabs = () => {
    const t=  useTranslations('smartEducationPlatform.innovationLabs')
    return (
        <div className=" px-5 sm:px-14 md:px-14 lg:px-44 pb-20 pt-20">
            <div className="flex flex-col 2xl:flex-row items-stretch justify-between 2xl:gap-x-20 gap-x-10 2xl:gap-y-0 gap-y-10 px-4">
                <div className="w-full 2xl:w-1/2 2xl:text-left flex flex-col justify-between">
                    <div className="lg:mt-10">
                        <motion.h1
                        variants={FadeRight(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="relative text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-bold font-Poppins leading-tight lg:leading-[1.2]"
                        >
                            <span className="inline-block">
                                <Image
                                src={green_cercle}
                                alt=""
                                className="absolute top-[-9px] left-[-22px] w-[2rem] sm:w-[2rem] md:w-[2rem] lg:w-[4rem]  pointer-events-none select-none"
                                />
                                <span className="relative z-10">{t("first_litter")}</span> 
                            </span>
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-violet-800">{chunks}</span>,
                                br: () => <br />
                            })}
                            
                        </motion.h1>

                        <motion.div
                            variants={FadeRight(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="relative text-base sm:text-lg md:text-xl lg:text-[24px] text-stone-500 font-Poppins mt-4 leading-tight lg:leading-[1.5]"
                        >
                            <Image src={violet_cercle} alt="" className=" absolute bottom-[50%] -right-0 sm:-right-0 md:-right-0 lg:right-[-23px] w-[1rem] sm:w-[1rem] md:w-[2rem] lg:w-[2rem] "/>
                            <p>
                                {t("description")}
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={FadeRight(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="mt-6 xl:mt-10"
                    >
                        <button className="btn btn-violet bg-white/90 text-violet-800 transition-all duration-300 px-6 sm:px-8 md:px-8 lg:px-6 py-4 sm:py-5 md:py-6 lg:py-7 !rounded-full !font-normal text-base sm:text-base md:text-lg lg:text-[16px] flex items-center justify-center gap-2">
                            {t("btn")}
                            <ArrowRight />
                        </button>
                    </motion.div>
                </div>
                    
                <motion.div
                    variants={FadeLeft(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full 2xl:w-1/2 relative flex items-center justify-center mt-6 2xl:mt-0"
                >
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:w-[705px] lg:h-[471px]">
                        <VideoSlider videoIndex={2} />
                        <Image src={green_rec} alt="" className=" absolute -top-5 -left-5 w-[4rem] sm:w-[4rem] md:w-[6rem] lg:w-[8rem] -z-10"/>
                        <Image src={violet_rec} alt="" className=" absolute -bottom-5 -right-5 w-[5rem] sm:w-[5rem] md:w-[10rem] lg:w-[14rem] -z-10"/>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default InnovationLabs