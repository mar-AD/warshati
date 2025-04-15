"use client"
import Image from "next/image"
import lines from "/public/images/IntegrationScolaire/hero/Lines.png"
import { motion } from "framer-motion"
import {  FadeDown, FadeRight, FadeUp } from "@/lib/animations"
import image_1 from "/public/images/SmartWorkshopsProject/smartWorkshopsProject-1.png"
import image_3 from "/public/images/SmartWorkshopsProgram/arrow-3.png"
import useMediaQuery from "@/lib/UseMediaQuery"
import flight from "/public/images/Home/hero/flight.png";
import hero_img_0 from "/public/images/Blog/articles/article_2.jpg"
import hero_img_1 from "/public/images/Blog/articles/article_10.jpg"
import HeroCard from "./HeroCards"

const Hero = () => {
    const isScreen = useMediaQuery("(max-width: 1280px) and (min-width: 1024px)")
    const isScreen_2 = useMediaQuery("(min-width: 1765px)")
    return (
        <div className="bg-light-gray px-5 sm:px-14 md:px-14 lg:px-36 pb-24">
            <div className="pt-56 relative">
                <div className="flex flex-col items-center justify-center relative gap-y-3">
                    <Image
                        src={flight}
                        alt=""
                        className="absolute top-5 -right-4 sm:-right-14 md:-right-14 lg:-right-36 w-[2.3rem] sm:w-[6rem] md:w-[10rem] lg:w-72 scale-x-[-1]"
                    />

                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex !items-center gap-x-2 relative bg-white p-3 lg:px-5 border justify-center rounded-xl max-w-[90%]"
                    >
                        <Image src={lines} className="absolute -left-9 -top-8" alt="" />
                        <div className="bg-violet-700/20 p-2 rounded-lg flex items-center">
                            <Image className="size-6 lg:size-9 fill-violet-700" src={image_1} alt="" />
                        </div>
                        <h1 className={`text-violet-800 font-bold text-center font-Vazirmatn 
                            ${isScreen ? "text-[2.5rem]" : "lg:text-5xl md:text-3xl text-xl"}`}>
                            Smart Workshops Project
                        </h1>
                    </motion.div>

                    <motion.h1
                        variants={FadeUp(.5)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="font-Poppins lg:max-w-[965px] md:max-w-[650px] max-w-[550px] text-center lg:text-[38px] md:text-2xl text-lg font-medium !leading-relaxed"
                    >
                        Relève des défis, résous des problèmes réels et façonne le futur avec nos Smart Workshops
                        Projects !
                    </motion.h1>

                    <motion.div
                        variants={FadeUp(.7)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="flex max-lg:flex-col md:gap-x-14 gap-y-8"
                    >
                        <button className="btn !h-16 !rounded-lg btn-violet">Inscrivez-vous maintenant</button>
                    </motion.div>
                </div>

                <div className="pt-14 md:pt-24 lg:pt-32 relative">
                    <div className={`h-full flex items-center gap-16 ${isScreen_2 ? "flex-col-reverse lg:flex-row" : "flex-col-reverse"}`}>
                        <div className={`${isScreen_2 ?"lg:w-[45%] pb-12": "w-full"} h-full}`}>
                            <div className="relative">
                                <motion.h1
                                    variants={FadeDown(.3)}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    className="pb-12 md:pb-16 lg:pb-20 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[3.35rem] font-Poppins"
                                >
                                    <span className="text-violet-800">Objectif </span>du Programme
                                </motion.h1>
                                <Image
                                    src={image_3}
                                    alt=""
                                    className={`${isScreen_2 ?"lg:w-44": "hidden"} absolute top-0 -right-52  scale-x-[-1]`}
                                />
                            </div>
                            <HeroCard />
                        </div>

                        <motion.div
                        variants={FadeRight(.2)}
                        initial="initial"
                        animate="animate"
                        className={`${isScreen_2 ?"lg:w-[55%]": "w-full"} relative flex max-lg:flex-col gap-4 items-center justify-center w-full h-full  mb-auto`}>

                        
                        <div className={`${isScreen_2 ? "absolute -left-[1rem] top-[14rem]" : "relative "} flex justify-center items-center z-10`}>
                            <Image
                            className="lg:h-[454px] lg:w-[606px] rounded-tr-[4rem] rounded-bl-[4rem] sm:rounded-bl-[6rem] sm:rounded-tr-[6rem] md:rounded-bl-[6rem] md:rounded-tr-[6rem] lg:rounded-tr-[6rem] lg:rounded-bl-[6rem]"
                            src={hero_img_1}
                            alt=""
                            />
                        </div>
                        <div className={`${isScreen_2 ? "ml-auto" : " "} flex justify-items-end items-center `}>
                            <Image
                            className="lg:h-[454px] lg:w-[606px] rounded-tr-[4rem] rounded-bl-[4rem] sm:rounded-bl-[6rem] sm:rounded-tr-[6rem] md:rounded-bl-[6rem] md:rounded-tr-[6rem] lg:rounded-tr-[6rem] lg:rounded-bl-[6rem]"
                            src={hero_img_0}
                            alt=""
                            />
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero