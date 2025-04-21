"use client"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { FadeRight } from "@/lib/animations"

const WarshatiCards = () => {
    const t = useTranslations("integrationScolaire.withWarshati")
    const cards = t.raw("cards") as any[]

    return (
        <div className="flex flex-wrap gap-4">
        {cards.map((card, idx) => {
            const isEven = idx % 2 !== 0
            const bg = isEven ? "bg-white" : "bg-violet-600/20"
            const justify = isEven ? "justify-end" : "justify-center"
            const rotate =
            isEven ? "-rotate-45 -scale-x-100" : "rotate-45"

            return (
            <motion.div
                key={idx}
                variants={FadeRight(0.4 + idx * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={`flex justify-start flex-col items-start gap-5 p-4 border ${bg} rounded-xl w-full md:w-[37rem]`}
            >
                <div className={`relative flex items-center ${justify}`}>
                <div
                    className={`md:w-8 md:h-14 w-5 h-12 rounded-l-full bg-violet-800/20 ${rotate} absolute`}
                ></div>
                <h1 className="font-Inter font-medium md:text-4xl text-3xl text-violet-600">
                    {card.number}
                </h1>
                </div>
                <h1 className="font-bold md:text-2xl text-lg text-violet-800">
                {card.title}
                </h1>
                <div>
                <b className="md:text-base text-sm">{card.subtitle}</b>
                {card.content && (
                    <p className="mt-5">
                    {card.content}
                    {!card.list && (
                        <button className="text-violet-800 font-bold ml-2">
                        {card.button}
                        </button>
                    )}
                    </p>
                )}
                {card.list && (
                    <ul className="list-decimal list-inside">
                    {card.list.map((item: string, i: number) => (
                        <li key={i}>
                        <b>{item.split(":")[0]} :</b>{" "}
                        {item.split(":").slice(1).join(":")}
                        <button className="text-violet-800 font-bold ml-2">
                            {card.button}
                        </button>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            </motion.div>
            )
        })}
        </div>
    )
}

export default WarshatiCards
