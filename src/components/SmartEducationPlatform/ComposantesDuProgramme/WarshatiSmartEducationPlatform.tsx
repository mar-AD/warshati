"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {  FadeLeft, FadeRight } from "@/lib/animations"
import VideoSlider from "@/components/VideoSlider"
import green_cercle from "/public/images/SmartEducationPlatform/green.png";
import violet_cercle from "/public/images/SmartEducationPlatform/violet.png";
import green_rec from "/public/images/SmartEducationPlatform/green-rec.png";
import violet_rec from "/public/images/SmartEducationPlatform/violet-rec.png";

const WarshatiSmartEducationPlatform = () => {
    return (
        <div className=" bg-light-gray px-5 sm:px-14 md:px-14 lg:px-44 pb-20 pt-20">
            <div className="flex flex-col xl:flex-row items-stretch justify-between xl:gap-x-20 gap-x-10 xl:gap-y-0 gap-y-10 px-8">
                <div className=" w-full xl:w-1/2 xl:text-left flex flex-col justify-between">
                    <div className="lg:mt-10">
                        <motion.h1
                        variants={FadeRight(0.2)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="relative text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-bold font-Poppins leading-tight lg:leading-[1.2]"
                        >
                            <span className="inline-block ">
                                <Image
                                src={green_cercle}
                                alt=""
                                className="absolute top-[-9px] left-[-22px] w-[2rem] sm:w-[2rem] md:w-[2rem] lg:w-[4rem]  pointer-events-none select-none"
                                />
                                <span className="relative z-10">W</span>
                                
                            </span>
                            arshati Smart<span className="text-violet-800"> Education Platform</span>
                        </motion.h1>

                        <motion.div
                            variants={FadeRight(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="relative text-base sm:text-lg md:text-xl lg:text-[24px] text-stone-500 font-Poppins mt-4 leading-tight lg:leading-[1.5]"
                        >
                            <Image src={violet_cercle} alt="" className=" absolute bottom-[65%] -right-0 sm:-right-0 md:-right-0 lg:right-[-23px] w-[1rem] sm:w-[1rem] md:w-[2rem] lg:w-[2rem] "/>
                            <p>
                                La Warshati Smart Education Platform est une solution complète et innovante qui prépare les élèves
                                et enseignants à un avenir numérique en constante évolution. Grâce à une intégration fluide des
                                technologies éducatives, elle révolutionne l'apprentissage et offre une expérience à la fois immersive
                                et enrichissante.
                            </p>
                        </motion.div>
                    </div>
                </div>
                    
                <motion.div
                    variants={FadeLeft(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full xl:w-1/2 relative flex items-center justify-center mt-6 xl:mt-0"
                >
                    <div className="relative w-full lg:w-[705px] lg:h-[471px]">
                    <div className="relative z-10 lg:h-[471px]">
                    <VideoSlider videoIndex={3} />
                        </div>
                        <Image src={green_rec} alt="" className=" absolute -top-5 -left-5 w-[4rem] sm:w-[4rem] md:w-[6rem] lg:w-[8rem] "/>
                        <Image src={violet_rec} alt="" className=" absolute -bottom-5 -right-5 w-[5rem] sm:w-[5rem] md:w-[10rem] lg:w-[14rem] "/>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WarshatiSmartEducationPlatform