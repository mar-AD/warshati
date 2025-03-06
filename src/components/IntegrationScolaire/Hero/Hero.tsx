"use client"
import Image from "next/image"
import lines from "/public/images/IntegrationScolaire/hero/Lines.png"
import HeroImage from "./HeroImage"
import { motion } from "framer-motion"
import {  FadeUp } from "@/lib/animations"
import { IoFlash } from "react-icons/io5"
const Hero = () => {
    return (
        <div
            className="bg-light-gray px-3 pb-20">
            {/* Hero Section */}
            <div className="pt-56 relative">
                <div className="flex flex-col items-center justify-center relative gap-y-3">
                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        animate="animate"
                        className="flex !items-center gap-x-2 relative bg-white p-5 border justify-center rounded-xl">
                    <Image src={lines} className="absolute -left-9 -top-8" alt=""                           />
                        <div className=" bg-violet-700/20 p-2 rounded-lg flex items-center">
                            <IoFlash className="size-7 fill-violet-700" />
                        </div>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center font-Vazirmatn">
                            <span className="text-violet-800">Intégrez</span> STEAM & AI</h1>
                    </motion.div>
                    <motion.h1
                        variants={FadeUp(.5)}
                        initial="initial"
                        animate="animate" className="font-Poppins lg:max-w-[965px] md:max-w-[650px] max-w-[550px] text-center lg:text-[38px] md:text-2xl text-lg font-medium  !leading-relaxed">
                            dans vos écoles avec <span className="text-violet-800">Warshati Labs</span>
                        </motion.h1>
                    <motion.p
                        variants={FadeUp(.6)}
                        initial="initial"
                        animate="animate" className="font-Poppins lg:max-w-[965px] md:max-w-[650px] max-w-[550px] text-center lg:text-[22px] md:text-lg text-sm font-medium  !leading-relaxed">
                            Avec <b>Warshati</b>, transformez vos salles de classe en laboratoires d’apprentissage modernes grâce à
nos STEAM Labs et AI Labs, language Labs, etc. .<b>Vous souhaitez intégrer nos STEAM & AI Labs dans votre établissement ?</b>
                        </motion.p>
                    <motion.div
                        variants={FadeUp(.7)}
                        initial="initial"
                        animate="animate" className="flex max-lg:flex-col md:gap-x-14 gap-y-8 mt-10">
                        <button className="btn !h-16 !rounded-lg btn-violet">Réserver une démonstration gratuite </button>
                        <button className="btn !h-16 !rounded-lg">Découvrir nos solutions Labs</button>
                    </motion.div>
                </div>
            </div>
            <HeroImage />
        </div>
    )
}

export default Hero