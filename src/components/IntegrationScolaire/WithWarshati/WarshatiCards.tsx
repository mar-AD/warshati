"use client"
import { FadeRight } from "@/lib/animations"
import { motion } from "framer-motion"

const WarshatiCards = () => {
    return (
        <div className="flex flex-wrap gap-4">
            <motion.div
            variants={FadeRight(.4)}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            className="flex justify-start flex-col items-start gap-5 p-4 border bg-violet-600/20 rounded-xl w-full md:w-[37rem]">
                <div className="relative flex items-center justify-center">
                    <div className="md:w-8 md:h-14 w-5 h-12 rounded-l-full bg-violet-800/20 rotate-45 absolute"></div>
                    <h1 className="font-Inter font-medium md:text-4xl text-3xl text-violet-600">01</h1>
                </div>
                <h1 className="font-bold md:text-2xl text-lg text-violet-800">Qu’est-ce qu’un AI Lab ?</h1>
                <div>
                    <b className="md:text-base text-sm">Apprendre l’intelligence artificielle dès aujourd’hui pour façonner demain.</b>
                    <p>
                        Un AI Lab est un espace pédagogique où les élèves explorent l’intelligence artificielle de manière interactive. Grâce à des activités pratiques, ils découvrent :...
                        <button className="text-violet-800 font-bold">En savoir plus</button>
                    </p>
                </div>
            </motion.div>
            <motion.div
            variants={FadeRight(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            className="flex justify-start flex-col items-start gap-5 p-4 border bg-white rounded-xl w-full md:w-[37rem]">
                <div className="relative flex items-center justify-end">
                    <div className="md:w-8 md:h-14 w-5 h-12 rounded-l-full bg-violet-800/20 -rotate-45 -scale-x-100 absolute"></div>
                    <h1 className="font-Inter font-medium md:text-4xl text-3xl text-violet-600">02</h1>
                </div>
                <h1 className="font-bold md:text-2xl text-lg text-violet-800">Avantages des STEAM et AI Labs ?</h1>
                <div>
                    <b className="md:text-base text-sm">Préparez vos élèves aux compétences du futur.</b>
                    <p className="mt-5">
                        Les STEAM Labs et AI Labs offrent une expérience immersive qui:
                    </p>
                    <ul className="list-decimal list-inside">
                        <li>
                            <b>Stimule la pensée critique :</b> Les élèves apprennent à résoudre des problèmes complexes...
                            <button className="text-violet-800 font-bold">En savoir plus</button>
                        </li>
                    </ul>

                </div>
            </motion.div>
            <motion.div
            variants={FadeRight(.6)}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            className="flex justify-start flex-col items-start gap-5 p-4 border bg-violet-600/20 rounded-xl w-full md:w-[37rem]">
                <div className="relative flex items-center justify-center">
                    <div className="md:w-8 md:h-14 w-5 h-12 rounded-l-full bg-violet-800/20 rotate-45 absolute"></div>
                    <h1 className="font-Inter font-medium md:text-4xl text-3xl text-violet-600">03</h1>
                </div>
                <h1 className="font-bold md:text-2xl text-lg text-violet-800"> Formation des enseignants pour les AI Labs</h1>
                <div>
                    <b className="md:text-base text-sm">Donnez à vos enseignants les moyens d’exceller dans l’enseignement de l’IA</b>
                    <p>
                        Nous formons vos enseignants à utiliser les Warshati Digtal Labs de manière optimale :
                    </p>
                    <ul className="list-decimal list-inside">
                        <li>
                            <b>Introduction aux concepts : Formation ...</b>
                            <button className="text-violet-800 font-bold">En savoir plus</button>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <motion.div
            variants={FadeRight(.7)}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            className="flex justify-start flex-col items-start gap-5 p-4 border bg-white rounded-xl w-full md:w-[37rem]">
                <div className="relative flex items-center justify-end">
                    <div className="md:w-8 md:h-14 w-5 h-12 rounded-l-full bg-violet-800/20 -rotate-45 -scale-x-100 absolute"></div>
                    <h1 className="font-Inter font-medium md:text-4xl text-3xl text-violet-600">04</h1>
                </div>
                <h1 className="font-bold md:text-2xl text-lg text-violet-800">Contenu des STEAM & AI Labs</h1>
                <div>
                    <b className="md:text-base text-sm">Des laboratoires équipés pour stimuler l’apprentissage</b>
                    <p className="">
                        Nos STEAM Labs et AI Labs comprennent :
                    </p>
                    <ul className="list-decimal list-inside">
                        <li>
                            <b>Matériel interactif:</b> Maquettes d’apprentissage, prototype projets,...
                            <button className="text-violet-800 font-bold">En savoir plus</button>
                        </li>
                    </ul>

                </div>
            </motion.div>
            <motion.div
            variants={FadeRight(.8)}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            className="flex justify-start flex-col items-start gap-5 p-4 border bg-violet-600/20 rounded-xl w-full md:w-[37rem]">
                <div className="relative flex items-center justify-center">
                    <div className="md:w-8 md:h-14 w-5 h-12 rounded-l-full bg-violet-800/20 rotate-45 absolute"></div>
                    <h1 className="font-Inter font-medium md:text-4xl text-3xl text-violet-600">05</h1>
                </div>
                <h1 className="font-bold md:text-2xl text-lg text-violet-800"> Une intégration méthodique et réussie</h1>
                <div>
                    <b className="md:text-base text-sm">Un processus en 4 étapes</b>
                    <ul className="list-decimal list-inside">
                        <li>
                            <b>Audit initial :</b> Compréhension des besoins de l’école et des niveaux des élèves.
                        </li>
                        <li>
                            <b>Installation des Labs :</b> Mise en place des...
                            <button className="text-violet-800 font-bold">En savoir plus</button>
                        </li>
                    </ul>
                </div>
            </motion.div>
            <motion.div
            variants={FadeRight(.9)}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            className="flex justify-start flex-col items-start gap-5 p-4 border bg-white rounded-xl w-full md:w-[37rem]">
                <div className="relative flex items-center justify-end">
                <div className="md:w-8 md:h-14 w-5 h-12 rounded-l-full bg-violet-800/20 -rotate-45 -scale-x-100 absolute"></div>
                <h1 className="font-Inter font-medium md:text-4xl text-3xl text-violet-600">06</h1>
                </div>
                <h1 className="font-bold md:text-2xl text-lg text-violet-800">Avantages des STEAM et AI Labs ?</h1>
                <div>
                    <b className="md:text-base text-sm">Des bénéfices mesurables pour élèves et enseignants</b>
                    <ul className="list-decimal list-inside">
                        <li>
                            <b>Augmentation de l’intérêt pour les STEM :</b> +40 % d’engagement des élèves.
                        </li>
                        <li>
                            <b>Compétences numériques renforcées :</b> ST, IA...
                            <button className="text-violet-800 font-bold">En savoir plus</button>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default WarshatiCards