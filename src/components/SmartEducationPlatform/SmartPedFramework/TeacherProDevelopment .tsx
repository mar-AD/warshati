"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {  FadeLeft, FadeRight } from "@/lib/animations"
import image_1 from "/public/images/Blog/articles/article_7.jpg"
import green_cercle from "/public/images/SmartEducationPlatform/SmartEducationPlatform-266.png";
import flight from "/public/images/Home/hero/flight.png";
import { ArrowRight } from "lucide-react"

const TeacherProDevelopment  = () => {
    return (
        <div className="bg-white  pb-16 md:pb-24 lg:pb-36 pt-24 md:pt-32  lg:pt-56">
            <div className="relative  px-5 sm:px-14 md:px-14 lg:px-44">
            <Image src={flight} alt="" className=" absolute -top-40 -right-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 scale-x-[-1]"/>
                <div className=" flex flex-col lg:flex-row justify-between items-end lg:gap-36">
                    <motion.div
                    variants={FadeRight(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 relative flex items-center justify-start mb-10 lg:mb-0"
                    >
                        <Image
                        src={image_1}
                        alt=""
                        className="rounded-[44px] w-full lg:w-[512px] lg:h-[384px]  z-10"
                        />
                        <Image
                        src={green_cercle}
                        alt=""
                        className="absolute -top-0 md:-top-16 lg:-top-40 left-[-52px] w-full  z-0"
                        />
                    </motion.div>

                    
                    <div className="w-full xl:w-1/2 xl:text-left flex flex-col justify-between">
                        <div className="lg:mt-10">
                            <motion.h1
                            variants={FadeLeft(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="relative text-xl sm:text-2xl md:text-3xl lg:text-[48px] font-bold font-Poppins leading-tight lg:leading-[1.2]"
                            >
                                
                                Teacher Professional <span className="text-violet-800">Development</span>
                            </motion.h1>

                            <motion.div
                                variants={FadeLeft(0.2)}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="relative text-base sm:text-lg md:text-xl lg:text-[24px] text-stone-500 font-Poppins mt-4 leading-tight lg:leading-[1.5]"
                            >
                                <p>
                                    Un programme conçu pour renforcer les compétences des enseignants en intégrant les approches
                                    pédagogiques modernes dans l&apos;enseignement du STEAM, de l&apos;IA et de la littératie numérique.
                                </p>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={FadeLeft(0.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="mt-6 xl:mt-10"
                        >
                            <button className="btn btn-violet bg-white/90 text-violet-800 transition-all duration-300 px-6 sm:px-8 md:px-8 lg:px-6 py-4 sm:py-5 md:py-6 lg:py-7 !rounded-full !font-normal text-base sm:text-base md:text-lg lg:text-[16px] flex items-center justify-center gap-2">
                                Se Connecter
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