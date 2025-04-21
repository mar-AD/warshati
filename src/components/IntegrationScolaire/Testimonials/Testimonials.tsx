"use client"

import { FadeRight, FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { testimonialsData } from "@/lib/data"
import { TestimonialsType } from "@/lib/types"


const Testimonials = () => {
    const t = useTranslations("integrationScolaire.testimonials")

    const merged = t.raw("cards").map((description: string, i: number) => ({
        description,
        ...testimonialsData[i]
    }))

    return (
        <div className="font-Poppins md:py-20 py-10 md:px-10 px-5 space-y-8 bg-light-gray">
        <div className="flex justify-between items-center">
            <div className="space-y-5">
            <motion.h1
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:text-[60px] md:text-5xl text-3xl font-bold text-violet-800"
            >
                {t("heading")}
            </motion.h1>
            <motion.p
                variants={FadeUp(0.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-[40rem] text-stone-500 font-semibold md:text-base text-sm"
            >
                {t("description")}
            </motion.p>
            </div>
            <motion.button
            variants={FadeRight(0.4)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="btn btn-violet !rounded-lg !font-medium"
            >
            {t("button")}
            </motion.button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
            {merged.map((item:TestimonialsType , index:number) => (
            <motion.div
                key={index}
                variants={FadeRight(item.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="border rounded-xl bg-white"
            >
                <div className="p-10 border-b">
                <q>{item.description}</q>
                </div>
                <div className="flex items-center justify-between p-10">
                <div className="flex gap-x-3 items-center">
                    <Image src={item.image} alt="" />
                    <h2 className="font-semibold">{item.name}</h2>
                </div>
                <button className="btn !bg-violet-600/20 text-violet-800 !rounded-lg !font-medium">
                    {t("cardButton")}
                </button>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
    )
}

export default Testimonials
