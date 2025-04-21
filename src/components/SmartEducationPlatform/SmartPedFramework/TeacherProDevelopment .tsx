"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {  FadeLeft, FadeRight } from "@/lib/animations"
import image_1 from "/public/images/Blog/articles/article_7.jpg"
import shape from "/public/images/SmartEducationPlatform/SmartEducationPlatform-27.png";
import flight from "/public/images/Home/hero/flight.png";
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

const TeacherProDevelopment  = () => {
    const t = useTranslations("smartEducationPlatform.teacher")
    return (
        <div className="bg-white  pb-16 md:pb-24 lg:pb-36 pt-24 md:pt-32  lg:pt-56">
            <div className="relative  px-5 sm:px-14 md:px-14 lg:px-44">
            <Image src={flight} alt="" className=" absolute -top-10 md:-top-20 lg:-top-40 -right-0 w-[2.3rem] sm:w-[6rem] md:w-[10rem] lg:w-72 scale-x-[-1]"/>
                <div className=" flex flex-col 2xl:flex-row justify-between items-end 2xl:gap-36">
                    <motion.div
                    variants={FadeRight(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full 2xl:w-1/2 relative flex items-center justify-start mb-10 2xl:mb-0"
                    >
                        <Image
                        src={image_1}
                        alt=""
                        className="rounded-[44px] w-full 2xl:w-[512px] 2xl:h-[384px]  z-10"
                        />
                        <Image
                        src={shape}
                        alt=""
                        className="absolute -top-0 md:-top-16 lg:-top-40 left-[-52px] w-full  z-0"
                        />
                    </motion.div>

                    
                    <div className="w-full 2xl:w-1/2 2xl:text-left flex flex-col justify-between">
                        <div className="lg:mt-10">
                            <motion.h1
                            variants={FadeLeft(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="relative text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-bold font-Poppins leading-tight lg:leading-[1.2]"
                            >
                                
                                {t.rich('title', {
                                    highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                                })} 
                            </motion.h1>

                            <motion.div
                                variants={FadeLeft(0.2)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="relative text-base sm:text-lg md:text-xl lg:text-[24px] text-stone-500 font-Poppins mt-4 leading-tight lg:leading-[1.5]"
                            >
                                <p>
                                    {t('text')}
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={FadeLeft(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="mt-6 2xl:mt-10"
                        >
                            <button className="btn btn-violet bg-white/90 text-violet-800 transition-all duration-300 px-6 sm:px-8 md:px-8 lg:px-6 py-4 sm:py-5 md:py-6 lg:py-7 !rounded-full !font-normal text-base sm:text-base md:text-lg lg:text-[16px] flex items-center justify-center gap-2">
                                {t('conn_btn')}
                                <ArrowRight />
                            </button>
                        </motion.div>
                    </div>
                </div>            
            </div>
            
        </div>

    )
}

export default TeacherProDevelopment 