"use client"
import Thematique from "./Thematique/Thematique";
import Curricula from "./Curricula/Curricula";
import Pedagogy from "./Pedagogy/Pedagogy";
import WorkShopCard from "./WorkShopCard";
import Parcours from "./Parcours/Parcours";
import Niveaux from "./Niveaux/Niveaux";
import { ageGroups } from "@/lib/data";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
const WorkShop = () => {

    return (
        <div className="">
            <div className="lg:px-20 py-20 px-5 space-y-44">
                <motion.div
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                    <h1 className="font-Poppins font-extrabold lg:text-[82px] md:text-5xl text-3xl !leading-tight lg:max-w-[70rem] md:max-w-[41rem] max-w-[26rem] text-center">Smart Workshops Program <span className="text-violet-800">Âge</span></h1>
                </motion.div>
                <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-x-6 gap-y-32">
                    {ageGroups.map((group, index) => (
                        <WorkShopCard delay={group.delay} image={group.image + index + ".png"} ageRange={group.ageRange} description={group.description} key={index} />
                    ))}
                </div>
            </div>
            <Pedagogy />
            <Curricula />
            <Thematique />
            <Parcours />
            <Niveaux />
        </div>
    )
}

export default WorkShop