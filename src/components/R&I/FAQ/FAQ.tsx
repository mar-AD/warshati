"use client"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
const FAQ = () => {
    return (
        <div className="lg:px-10 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 bg-light-gray grid grid-cols-2 items-start">
            <div className="space-y-6">
                <motion.h1
                    variants={FadeUp(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="font-semibold lg:text-[62px] md:text-3xl text-2xl !leading-tight">Questions<br /> fréquemment posées
                </motion.h1>
                <motion.p
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}>Vous avez encore des questions ? Contactez notre équipe<br /> via warshaticg@gmail.com
                </motion.p>
                <motion.button
                    variants={FadeUp(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="btn btn-violet">Voir toutes les FAQ <ArrowRight /></motion.button>
            </div>
            <div className="bg-white rounded-xl">
s
            </div>
        </div>
    )
}

export default FAQ