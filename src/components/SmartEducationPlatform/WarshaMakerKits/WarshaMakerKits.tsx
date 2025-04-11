"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {  FadeLeft, FadeRight } from "@/lib/animations"
import image_1 from "/public/images/Blog/hero_bg.jpg"
import green_cercle from "/public/images/SmartEducationPlatform/tow-green-cer.png";
import violet_cercle from "/public/images/SmartEducationPlatform/tow-violet-cer.png";
import { WarshaMakerKitsData } from "@/lib/data"
import flight from "/public/images/Home/hero/flight.png";

const WarshaMakerKits = () => {
    return (
        <div className="bg-white  pb-16 md:pb-24 lg:pb-36 pt-24 md:pt-32  lg:pt-40">
            <div className="relative  px-5 sm:px-14 md:px-14 lg:px-44">
            <Image src={flight} alt="" className=" absolute -top-20 -right-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 scale-x-[-1]"/>
                <div className=" flex flex-col lg:flex-row justify-between items-center lg:gap-36">
                    <motion.div
                    variants={FadeRight(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full lg:w-2/3 relative flex items-center justify-center mb-10 lg:mb-0"
                    >
                        <Image
                        src={image_1}
                        alt=""
                        className="rounded-[44px] w-full lg:w-[829px] lg:h-[467px] object-cover z-10"
                        />
                        <Image
                        src={green_cercle}
                        alt=""
                        className="absolute -top-8 md:-top-16 lg:-top-16 left-0 w-[4rem] sm:w-[4rem] md:w-[6rem] lg:w-[8rem] z-0"
                        />
                        <Image
                        src={violet_cercle}
                        alt=""
                        className="absolute -bottom-8 md:-bottom-20 lg:-bottom-20 right-7 w-[5rem] sm:w-[5rem] md:w-[10rem] lg:w-[14rem] z-0"
                        />
                    </motion.div>

                    <motion.div
                        variants={FadeLeft(0.9)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="w-full lg:w-3/5 flex flex-col justify-center"
                    >
                        <h1 className="font-extrabold font-Poppins lg:text-5xl md:text-4xl text-2xl pt-5 md:pt-0 lg:pt-0 lg:pb-5 text-center lg:text-left">
                            <span className="text-violet-800">WarshaMaker</span> Kits
                        </h1>

                        <ul className="relative">
                        {WarshaMakerKitsData.map((item, i) => (
                            <li
                            key={i}
                            className="flex items-center justify-start gap-x-6 sm:gap-x-10 lg:gap-x-14 my-5 text-[18px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium"
                            >
                                <div className="rounded-full flex justify-center items-center shadow-lg shadow-black/10 min-w-14 min-h-14 md:min-w-16 md:min-h-16 lg:min-w-20 lg:min-h-20 p-3">
                                    <Image className="size-8 lg:size-10" src={item.image} alt="" />
                                </div>
                                <div className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[22px] lg:max-w-[500px] text-slate-600 font-normal">
                                    {item.text}
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

export default WarshaMakerKits