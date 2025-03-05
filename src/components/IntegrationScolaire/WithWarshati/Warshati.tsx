"use client"
import { motion } from "framer-motion"
import WarshatiCards from "./WarshatiCards"
import { FadeUp } from "@/lib/animations"
const Warshati = () => {
    return (
        <div className="font-Poppins md:py-20 py-10 md:px-10 px-5 space-y-8">
            <div className="space-y-3">
                <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                className="lg:text-[60px] md:text-5xl text-3xl font-bold text-violet-800">Avec Warshati</motion.h1>
                <motion.p
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                className="w-[40rem] text-stone-500 font-semibold md:text-base text-sm">
                    Nous proposons une intégration fluide et
                    enrichissante qui stimule la créativité, l’innovation et la maîtrise des technologies de pointe
                </motion.p>
            </div>
            {/* Cards */}
            <WarshatiCards />
        </div>
    )
}

export default Warshati