"use client"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import flight from "/public/images/Home/hero/flight.png";
import Image from "next/image"
import PresentationCards from "./PresentationCard";

const Presentation = () => {
    return (
        <div className=" relative bg-white px-14 py-20 max-md:py-10">
            <Image src={flight} alt="" className=" absolute top-5 -left-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-40"/>    
            <motion.h1
            variants={FadeUp(.5)}
            initial="initial"
            animate="animate"
            className="font-Poppins text-center font-bold  lg:text-5xl md:text-3xl text-2xl">
                Présentation de la Formation
            </motion.h1>
            <motion.p
            variants={FadeUp(.5)}
            initial="initial"
            animate="animate"
            className="font-Poppins text-center text-[18px] sm:text-[18px] md:text-[22px] lg:text-[22px] font-medium !leading-relaxed"
            >
                <span className="text-purple-800">Pourquoi</span> suivre une formation continue avec <span className="text-purple-800"> Warshati ?</span>
            </motion.p>
            <PresentationCards/>

        </div>
    )
}
export default Presentation