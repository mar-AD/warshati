"use client"
import { Plus } from "lucide-react"
import CurriculaCard from "./CurriculaCard"
import { CurriculaData } from "@/lib/data"
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"
const Curricula = () => {

    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Curricula</motion.h1>
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Les parcours éducatifs innovants de Warshati, spécialement conçus pour accompagner les élèves de 6 à 18 ans dans leur apprentissage et leur développement.</p>
            </motion.div>
            <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-6 items-start">
                {CurriculaData.map((card, index) => (
                    <CurriculaCard key={index} item={card} />
                ))}
                <button className="!w-fit btn btn-violet-outline">
                    <Plus /> Savoir
                </button>
            </div>
        </div>
    )
}

export default Curricula