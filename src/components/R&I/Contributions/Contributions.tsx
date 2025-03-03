"use client"
import { FadeUp } from "@/lib/animations"
import { contributionsData } from "@/lib/data"
import { motion } from "framer-motion"
import ContributionCard from "./ContributionCard"
const Contributions = () => {
  return (
    <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <div className="space-y-5">
                <motion.h1
                    variants={FadeUp(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="font-bold lg:text-[70px] md:text-3xl text-2xl text-center !leading-tight text-violet-800">Nos contributions scientifiques</motion.h1>
                <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="flex justify-center">
                    <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Retrouvez ici les études, publications, et résultats marquants de nos recherches :</p>
                </motion.div>
            </div>
            <div className="flex items-start flex-wrap gap-10 justify-center">
                {
                    contributionsData.map((contribution, index) => (
                        <ContributionCard key={index} contribution={contribution} />
                    ))
                }
            </div>
    </div>
  )
}

export default Contributions