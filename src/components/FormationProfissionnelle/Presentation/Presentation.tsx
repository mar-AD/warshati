"use client"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import flight from "/public/images/Home/hero/flight.png";
import Image from "next/image"
import PresentationCards from "./1stSectionCards";
import FirstSectionCards from "./1stSectionCards";
import SecondSectionCards from "./2ndSectionCards";

const Presentation = () => {
    return (
        <div className=" relative bg-white px-14 py-20 max-md:py-10">
            <Image src={flight} alt="" className=" absolute top-5 -left-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/>    
            <motion.h1
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center font-extrabold font-Poppins lg:text-6xl md:text-4xl text-2xl">
                Présentation de la Formation
            </motion.h1>
            <motion.p
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-slate-600 font-semibold font-Poppins text-center text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] !leading-relaxed pt-3"
            >
                <span className="text-purple-800">Pourquoi</span> suivre une formation continue avec <span className="text-purple-800"> Warshati ?</span>
            </motion.p>

            <FirstSectionCards/>

            <motion.p
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=" text-slate-600 font-semibold font-Poppins text-center text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] !leading-relaxed mt-14"
            >
                Public <span className="text-purple-800"> concerné</span>
            </motion.p>

            <SecondSectionCards/>

        </div>
    )
}
export default Presentation