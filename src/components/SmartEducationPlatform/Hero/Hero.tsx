"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {  FadeLeft, FadeRight, FadeUp } from "@/lib/animations"
import flight from "/public/images/Home/hero/flight.png";
import image_2 from "/public/images/Blog/articles/article_4.jpg";
import image_3 from "/public/images/Blog/articles/article_1.jpg";
import green_cercle from "/public/images/SmartEducationPlatform/green.png";
import violet_cercle from "/public/images/SmartEducationPlatform/violet.png";

const Hero = () => {
    return (
        <div className="px-5 sm:px-14 md:px-14 lg:px-14 pb-28 max-md:pb-14">
            <div className="pt-56 relative">
                <div className="flex flex-col items-center justify-center relative gap-y-3">
                    <Image src={flight} alt="" className=" absolute top-5 -right-4 sm:-right-14 md:-right-14 lg:-right-14 w-[2.3rem] sm:w-[5rem] md:w-[10rem] lg:w-72 scale-x-[-1] "/>
                    <Image src={green_cercle} alt="" className=" absolute -top-5 -left-4 sm:-left-4 md:-left-4 lg:left-32 w-[3.5rem] sm:w-[4rem] md:w-[5rem] lg:w-[7rem] -z-10"/>
                    <Image src={violet_cercle} alt="" className=" absolute -bottom-[4rem] lg:-bottom-[23rem] -left-4 sm:-left-14 md:-left-14 lg:left-32 w-[1rem] sm:w-[1rem] md:w-[2rem] lg:w-[3rem]"/>   

                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="lg:mb-4 mb-2">
                        <h1 className={`text-[#2F327D] font-bold text-center font-Vazirmatn 
                            lg:text-[2.75rem] md:text-3xl text-xl`}>
                            Warshati Smart Education Platform
                        </h1>
                    </motion.div>
                    <motion.h1
                        variants={FadeUp(.5)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }} className="text-slate-600 font-Poppins  text-center lg:text-[24px] md:text-[20px] text-[16px] font-bold  !leading-relaxed">
                            Un Écosystème d&apos;Apprentissage Numérique Innovant
                    </motion.h1>
                    
                </div>

                <div className="flex flex-col pt-24 gap-8 md:gap-20 lg:gap-20 md:flex-row w-full justify-center items-center">
                    <motion.div
                        variants={FadeRight(0.8)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="relative flex h-[400px] justify-center items-center"
                    >
                        <Image
                        className="lg:w-[600px] w-full h-full object-cover rounded-[20px]"
                        src={image_3}
                        alt=""
                        />

                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-[20px]">
                        <button className="btn text-white bg-transparent hover:bg-white/10 transition-all duration-300 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-9 !font-thin !rounded-full text-base sm:text-lg md:text-xl lg:text-[22px] mt-20">
                            Se Connecter
                        </button>
                        </div>
                    </motion.div>


                    <motion.div
                        variants={FadeLeft(0.9)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="relative flex h-[400px] justify-center items-center"
                    >
                        <Image
                        className="lg:w-[600px] w-full h-full object-cover rounded-[20px]"
                        src={image_2}
                        alt=""
                        />

                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-[20px]">
                        <button className="btn btn-violet bg-white/90 text-violet-800 transition-all duration-300 px-6 sm:px-8 md:px-10 lg:px-7 py-4 sm:py-5 md:py-6 lg:py-9 !font-thin !rounded-full text-base sm:text-lg md:text-xl lg:text-[22px] mt-20">
                            Inscrivez-vous maintenant
                        </button>
                        </div>
                    </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Hero