"use client"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import QuestionCard from "./QuestionCard"
import { questionsData } from "@/lib/data"
import { useTranslations } from "next-intl"
const FAQ = () => {
    const t = useTranslations("r&i.faq")
    return (
        <div className="lg:px-10 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 bg-light-gray grid lg:grid-cols-2 items-center">
            <div className="space-y-6">
                <motion.div
                    variants={FadeUp(.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} >
                        <h1
                            className="font-semibold lg:text-[62px] md:text-3xl text-2xl !leading-tight"
                            dangerouslySetInnerHTML={{ __html: t("title") }}
                        />
                </motion.div>
                <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}>
                        <p
                            dangerouslySetInnerHTML={{ __html: t("subtitle") }}
                        />
                </motion.div>
                <motion.button
                    variants={FadeUp(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }} className="btn btn-violet">{t("button")} <ArrowRight /></motion.button>
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
                        <QuestionCard 
                        key={index} 
                        question={{
                            question: t(`items.${index}.question`),
                            answer: t(`items.${index}.answer`),
                        }} />
                    ))
                }
            </motion.div>
        </div>
    )
}

export default FAQ