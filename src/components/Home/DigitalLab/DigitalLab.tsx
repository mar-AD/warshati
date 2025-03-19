"use client"
import Image from "next/image"
import circles from "/public/images/Home/digitalLab/circles.png"
import Checkbox from "/public/images/Home/digitalLab/Checkbox.png"
import { ArrowRight, Plus } from "lucide-react"
import DigitalLabCard from "./DigitalLabCard"
import image_4 from "/public/images/Home/digitalLab/image_4.png"
import image_5 from "/public/images/Home/digitalLab/image_5.png"
import image_3 from "/public/images/Home/digitalLab/image_3.png"
import image_9 from "/public/images/Home/digitalLab/image_9.png"
import ai_image from "/public/images/Home/digitalLab/ai_image.png"
import arrow_yellow from "/public/images/Home/digitalLab/arrow_yellow.png"
import arrow from "/public/images/Home/digitalLab/arrow.png"
import robot from "/public/images/Home/digitalLab/robot1.png"
import bubble from "/public/images/Home/digitalLab/bubble.png"
import { DigitalLabData } from "@/lib/data"
import { motion } from "framer-motion"
import { FadeLeft, FadeRight, FadeUp } from "@/lib/animations"
const DigitalLab = () => {
    return (
        <div className="lg:px-20 py-20 px-5 relative pt-20 overflow-hidden">
            <Image className="absolute -left-20 -z-10 -top-[8rem] w-56" src={circles} alt="" />
            <Image className="absolute w-[30rem] right-[-6rem] bottom-[-4.75rem] -z-10"  src={circles} alt="" />
            <motion.h1
                variants={FadeUp(.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">Warshati Smart Education Platform</motion.h1>
            <div className="flex items-start gap-20 md:gap-12 sm:gap-0 max-sm:gap-0 max-md:flex max-[800px]:flex-col-reverse max-md:items-center text-center ">


                <div className="w-full lg:w-1/2 flex flex-col items-start text-left max-[800px]:items-center max-[800px]:text-center">
                    <div className="flex max-xl:flex-col-reverse justify-between items-center mt-20 lg:gap-40 gap-20 w-full">
                        {/* Card */}
                        <motion.div
                            variants={FadeRight(.2)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }} 
                            className="relative flex justify-center items-center flex-1 min-w-[300px] max-w-[500px]">
                            <Image className="absolute -left-12 -top-14" src={image_4} alt="" />
                            <Image className="absolute -right-10 -top-7" src={image_5} alt="" />
                            <Image className="absolute -right-16 max-xl:hidden" src={arrow_yellow} alt="" />
                            <DigitalLabCard 
                                image={ai_image} 
                                title="Découvre le monde magique de l'IA" 
                                content="AI-Kids Lab est un espace éducatif innovant dédié à l’initiation des enfants à l’intelligence artificielle et aux technologies du futur et de la pensée algorithmique." 
                            />
                        </motion.div>
                    </div>

                    <div className="flex max-xl:flex-col items-center mt-20 2xl:translate-x-60 gap-20 w-full">
                        <Image className="absolute max-xl:hidden bottom-110 -scale-x-100 -left-32 -rotate-12" src={arrow} alt="" />
                        {/* Card */}
                        <motion.div
                            variants={FadeRight(.3)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }} 
                            className="relative flex justify-center items-center flex-1 min-w-[300px] max-w-[500px]">
                            <Image className="absolute -left-12 -top-14 " src={image_4} alt="" />
                            <Image className="absolute -right-10 -top-7" src={image_5} alt="" />
                            <Image className="absolute -right-16 -rotate-180 lg:w-[40px] max-xl:hidden" src={arrow} alt="" />
                            <DigitalLabCard 
                                image={image_9} 
                                title="Au-delà de la technologie, cultive la Digital Literacy" 
                                content="Warshati Digital Lab est un espace interactif où les enfants explorent le numérique, adoptent les bonnes pratiques et deviennent des acteurs responsables et éclairés du monde connecté."
                                hasBorder
                                textViolet
                            />
                        </motion.div>
                    </div>

                    <div className="flex max-xl:flex-col-reverse justify-between items-center mt-20 lg:gap-40 gap-20 w-full">
                        {/* Card */}
                        <motion.div
                            variants={FadeRight(.3)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }} 
                            className="relative flex justify-center items-center flex-1 min-w-[300px] max-w-[500px]">
                            <Image className="absolute bottom-20 max-xl:hidden -right-20 rotate-[80deg] z-30 lg:w-[50px]" src={arrow_yellow} alt="" />
                            <Image className="absolute -right-12 -top-14 -scale-x-100" src={image_4} alt="" />
                            <Image className="absolute -left-10 -scale-x-100 -top-7" src={image_5} alt="" />
                            <Image className="absolute -left-2 rotate-180 -top-20 lg:w-[50px] max-xl:hidden" src={arrow_yellow} alt="" />
                            <DigitalLabCard 
                                image={image_3} 
                                title="Imagine, crée et joue avec STEAM" 
                                content="Warshati STEAM Lab est un espace d’apprentissage interactif, conçu pour stimuler la créativité, la pensée critique et l'innovation, il propose des ateliers pratiques et des projets expérimentaux." 
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <motion.div
                    variants={FadeLeft(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="font-Poppins font-medium space-y-8 mb-5 mt-16">
                        <h1 className="font-bold lg:text-[39px] md:text-2xl text-xl">Plateforme <span className="text-violet-700">éducative intégrant</span></h1>
                        <ul>
                            {DigitalLabData.map((item, i) => (
                                <li className="flex gap-x-2 my-7 text-[28px] md:text-[24px] sm:text-[20px] max-sm:text-[16px]" key={i}>
                                    <Image className="lg:size-8 size-5" src={Checkbox} alt="" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-5">
                            <button className="btn btn-violet !rounded-full">Se Connecter <ArrowRight /></button>
                            <button className="btn btn-violet-outline !rounded-full">Savoir <Plus /></button>
                        </div>
                    </motion.div>


                    <motion.div
                        variants={FadeLeft(.4)}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="font-Poppins font-medium space-y-8 relative flex items-center justify-center mt-16"
                    >
                        <Image 
                        className="max-w-none w-[240px] sm:w-[240px] md:w-[280px] lg:w-[381px]" 
                        src={robot} 
                        alt="" 
                        />

                        <Image 
                        className="absolute top-[-45px] left-[70%] 
                                    sm:top-[-40px] sm:left-[70%] 
                                    md:top-[-50px] md:left-[70%] 
                                    lg:-top-10 lg:left-72 
                                    w-[150px] sm:w-[150px] md:w-[180px] lg:w-[220px]" 
                        src={bubble} 
                        alt="" 
                        />

                    </motion.div>
                </div>
            </div>
            {/* <DigitalLabExp /> */}
        </div>
    )
}

export default DigitalLab