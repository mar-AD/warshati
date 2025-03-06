"use client"
import { FadeUp } from "@/lib/animations"
import IntScolaireCard from "./IntScolaireCard"
import { IntScolaireData } from "@/lib/data"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import Link from "next/link"
const IntScolaire = () => {

    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">Intégration Scolaire</motion.h1>
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Méthodiquement structuré pour faciliter une intégration fluide et enrichissante de STEAM & AI dans le programme scolaire.</p>
            </motion.div>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8 place-content-center lg:!mt-40 mx-10'>
                {
                    IntScolaireData.map((item, index) => (
                        <IntScolaireCard key={index} item={item} />
                    ))
                }
            <Link href={"/Integration-Scolaire"} className="place-self-end col-span-3  btn btn-violet-outline !gap-x-3">
                savoir <Plus />
            </Link>
            </div>
        </div>
    )
}

export default IntScolaire