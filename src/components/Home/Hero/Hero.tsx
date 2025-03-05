"use client"
import Image from "next/image"
import flight from "/public/images/Home/hero/flight.png"
import pen_line from "/public/images/Home/hero/pen_line.png"
import { Play } from "lucide-react"
import HeroImage from "./HeroImage"
import { motion } from "framer-motion"
import { FadeOut, FadeUp } from "@/lib/animations"
const Hero = () => {
    return (
        <div
            className="bg-light-gray px-3 pb-10">
            {/* Hero Section */}
            <div className="pt-56 relative">
                <motion.img
                    variants={FadeOut(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="absolute left-0 max-lg:hidden"
                    loading="lazy"
                    src={flight.src}
                    alt="" />
                <div className="flex flex-col items-center justify-center relative gap-y-3">
                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        animate="animate"
                        className="">
                        <h1 className="place-self-center lg:text-[96px] md:text-6xl text-4xl font-bold md:max-w-[61rem] max-w-96 text-center font-Vazirmatn lg:leading-[112.5px] md:!leading-tight leading-normal">Là où <span className="text-violet-800">l’avenir</span> se construit aujourd’hui !</h1>
                        <Image className="lg:place-self-end md:place-self-center place-self-end lg:-translate-y-7 md:-translate-y-5 lg:w-[57%] w-[39%] md:w-[36%] -translate-y-4 max-md:-translate-x-20" draggable={false} width={900} src={pen_line} alt="" />
                    </motion.div>
                    <motion.p
                        variants={FadeUp(.5)}
                        initial="initial"
                        animate="animate" className="font-Poppins lg:max-w-[850px] md:max-w-[650px] max-w-[550px] text-center lg:text-[22px] md:text-lg text-sm font-semibold text-stone-500">Plateforme éducative ludique et innovante offrant des laboratoires digitaux STEAM & AI, des maquettes interactives, des ateliers de coding et des prototypes</motion.p>
                    <motion.div
                        variants={FadeUp(.6)}
                        initial="initial"
                        animate="animate" className="flex max-lg:flex-col md:gap-x-14 gap-y-8 mt-10">
                        <button className="btn btn-violet">Commencer</button>
                        <button className="btn !font-Vazirmatn !border-none gap-x-4"><Play className="bg-violet-300 text-transparent fill-white md:p-2.5 p-1 md:size-max size-7 rounded-full" /> Regarder la vidéo</button>
                    </motion.div>
                </div>
            </div>
            <HeroImage />
        </div>
    )
}

export default Hero