"use client"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import QuestionCard from "./QuestionCard"
import { questionsData } from "@/lib/data"
const FAQ = () => {
    return (
        <div className="lg:px-10 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 bg-light-gray grid lg:grid-cols-2 items-center">
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
            <motion.div
                variants={FadeUp(.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }
                }
                className="bg-white rounded-xl border lg:p-7 p-4">
                {
                    questionsData.map((question, index) => (
                        <QuestionCard key={index} question={question} />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default FAQ