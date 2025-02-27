"use client"
import Link from "next/link"
import logo_white from "/public/images/logos/white_logo.png"
import { contacts, links, socials } from "@/lib/data"
import { motion } from "framer-motion"
import { FadeRight, FadeUp } from "@/lib/animations"
const Footer = () => {
    return (
        <div className="bg-[#011C2A] text-white sm:p-16 p-8 font-Poppins space-y-8">
            <div className="flex items-start md:justify-between justify-start flex-wrap md:gap-16 gap-y-8">
                <motion.img
                variants={FadeRight(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} src={logo_white.src} alt="" className="" />
                <motion.div
                variants={FadeRight(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="max-w-80 text-slate-200">
                    Plateforme éducative ludique et innovante offrant des laboratoires digitaux STEAM & AI, des maquettes interactives, des ateliers de coding et des prototypes, pour réinventer l’apprentissage, stimuler la créativité et préparer à exceller dans le monde de demain.
                </motion.div>
                <motion.div
                variants={FadeRight(.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="space-y-5">
                    <h1 className="font-semibold capitalize">liens rapides</h1>
                    <div className="flex flex-col gap-y-4">
                        {links.map((link, index) => (
                            <Link key={index} className="text-slate-400 hover:text-white duration-500" href={link.link}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                variants={FadeRight(.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="space-y-5">
                    <h1 className="font-semibold capitalize">Nous contacter</h1>
                    <div className="space-y-10">
                        {
                            contacts.map(({ Icon, value }, index) => (
                                <div className="flex items-center gap-5" key={index}>
                                    <Icon className="size-4" />
                                    <p className="max-w-72 text-slate-400 hover:text-white duration-500">{value}</p>
                                </div>
                            ))
                        }
                    </div>
                </motion.div>
                <motion.div
                variants={FadeRight(.6)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="space-y-5 bg-black/50 h-fit p-5 rounded-xl">
                    <h1 className="font-semibold capitalize">Inscrivez-vous à notre newsletter</h1>
                    <div className="flex flex-wrap gap-4">
                        <input className="bg-transparent placeholder:text-xs outline-none" type="text" placeholder="Votre adresse e-mail" />
                        <button className="bg-slate-950 p-2 rounded-lg">s&apos;abonner</button>
                    </div>
                    <p className="text-xs text-slate-400 max-w-96">* Vous enverra des mises à jour hebdomadaires pour une meilleure gestion de vos outils.</p>
                </motion.div>
            </div>
            <motion.div
                variants={FadeUp(.7)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="place-self-end col-span-5 space-y-6">
                    <p className="text-slate-400">&copy; Warshati. Tous droits réservés - warshati {new Date().getFullYear()}</p>
                    <div className="flex gap-8 flex-wrap justify-end">
                        {
                            socials.map(({ Icon, link }, index) => (
                                <Link href={link} className="bg-slate-800 p-2 rounded-full hover:bg-slate-100 hover:text-slate-900 duration-500 z-10" key={index} target="_blank">
                                    <Icon className="size-4" />
                                </Link>
                            ))
                        }
                    </div>
                </motion.div>
        </div>
    )
}

export default Footer