"use client"
import { FadeRight, FadeUp } from "@/lib/animations"
import { projectsDomaineData } from "@/lib/data"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
const Domaine = () => {
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 bg-light-gray">
            <div className="space-y-5">
                <motion.h1
                    variants={FadeUp(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="font-bold lg:text-[70px] md:text-3xl text-2xl text-center !leading-tight text-violet-800">Projets R&I en cours</motion.h1>
                <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="flex justify-center">
                    <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Warshati concentre ses efforts sur les domaines :</p>
                </motion.div>
            </div>
            <div className="flex justify-center items-start gap-8 flex-wrap">
                {
                    projectsDomaineData.map((project, index) => (
                        <motion.div
                            variants={FadeRight(project.delay!)}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }} key={index} className="flex flex-col gap-5 items-start lg:w-96 w-56 group">
                            <div className="relative flex justify-end items-end">
                                <Image src={project.image} alt={project.title} className="w-80" />
                                <button className="bg-sky-950 absolute text-white group-hover:bg-violet-800 p-2.5 rounded-full duration-500">
                                    <ArrowRight className="-rotate-45 lg:size-16 size-9" />
                                </button>
                            </div>
                            <h2
                                className="text-sm text-center bg-slate-200 px-5 py-1.5 rounded-full w-fit group-hover:bg-violet-700 group-hover:text-white duration-500">
                                {project.title}
                            </h2>
                            <p>
                                {project.description}
                            </p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Domaine