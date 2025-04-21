"use client"
import Image from "next/image"
import lines from "/public/images/IntegrationScolaire/hero/Lines.png"
import { motion } from "framer-motion"
import {  FadeLeft, FadeRight, FadeUp } from "@/lib/animations"
import image_1 from "/public/images/SmartWorkshopsProgram/SmartWProgram-1.png"
import image_3 from "/public/images/SmartWorkshopsProgram/arrow-3.png"
import flight from "/public/images/Home/hero/flight.png";
import image_2 from "/public/images/Blog/articles/article_4.jpg";
import { SmartWorkshopsProgramData } from "@/lib/data";
import { useTranslations } from "next-intl"

const Hero = () => {
    const t = useTranslations("smartWorkshopsProgram.hero")
    return (
        <div className="bg-light-gray px-5 sm:px-14 md:px-14 lg:px-14 pb-14 max-md:pb-7">
            <div className="pt-56 relative">
                <div className="flex flex-col items-center justify-center relative gap-y-3">
                    <Image src={flight} alt="" className=" absolute top-5 -left-4 sm:-left-14 md:-left-14 lg:-left-14 w-[2.3rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/>    

                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex !items-center gap-x-2 relative bg-white p-3 lg:px-5 border justify-center rounded-xl max-w-[90%]">
                        <Image src={lines} className="absolute -left-9 -top-8" alt=""/>
                        <div className=" bg-violet-700/20 p-2 rounded-lg flex items-center">
                            <Image className="size-6 lg:size-9 fill-violet-700" src={image_1} alt="" />
                        </div>
                        <h1 className={`text-violet-800 font-bold text-center font-Vazirmatn 
                            lg:text-5xl md:text-3xl text-xl`}>
                            {t("page_title")}
                        </h1>
                    </motion.div>
                    <motion.h1
                        variants={FadeUp(.5)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }} className="font-Poppins lg:max-w-[965px] md:max-w-[650px] max-w-[550px] text-center lg:text-[38px] md:text-2xl text-lg font-medium  !leading-relaxed">
                            {t("page_subTitle")}
                    </motion.h1>
                    <motion.div
                        variants={FadeUp(.7)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }} className="flex max-lg:flex-col md:gap-x-14 gap-y-8">
                        <button className="btn !h-16 !rounded-lg btn-violet">{t("btn")}</button>
                    </motion.div>
                    
                </div>

                <div className="flex flex-col pt-40 max-md:pt-20 gap-5 md:flex-row w-full items-stretch min-h-[1px]">
                    <motion.div
                        variants={FadeRight(0.8)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="w-full md:w-[40%] flex justify-center items-center md:h-auto h-full"
                    >
                        <Image className="w-full h-[240px] sm:md:h-full  md:h-full lg:h-full rounded-tr-[4rem] rounded-bl-[4rem] sm:rounded-bl-[6rem] sm:rounded-tr-[6rem] md:rounded-bl-[6rem] md:rounded-tr-[6rem] lg:rounded-tr-[10rem] lg:rounded-bl-[10rem]" src={image_2} alt="" />
                    </motion.div>

                    <motion.div
                    variants={FadeLeft(0.9)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full md:w-[60%] flex flex-col justify-center h-full"
                    >
                        <h1 className="font-extrabold font-Poppins lg:text-6xl md:text-4xl text-2xl pb-5">
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                            })}
                            
                        </h1>
                        <p className="font-Poppins text-[18px] sm:text-[18px] md:text-[22px] lg:text-[29px] font-normal !leading-relaxed">
                            {t("subTitle")}
                        </p>

                        <ul className="relative">
                        <Image src={image_3} alt="" className=" absolute top-16 right-16 w-[3.5rem] lg:w-44 "/> 
                            {SmartWorkshopsProgramData.map((item, i) => (
                                <li className="flex items-center justify-start gap-x-2 my-7 text-[18px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium" key={i}>
                                    <div className="bg-violet-800 rounded-lg min-w-14 min-h-14 p-3"><Image className=" size-8 lg:size-8" src={item.image} alt="" /></div>
                                    
                                    <div>
                                        <div className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[29px] font-semibold">{t(`list.${i}.title`)}</div>
                                        <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[22px] w- auto lg:max-w-[500px] text-slate-600">{t(`list.${i}.text`)}</div>
                                    </div>
                                    
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero