"use client"
import { contacts, socials } from "@/lib/data"
import { FadeOut, FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import InscriptionEtContactForm from "./InscriptionEtContactForm"
import Image from "next/image"
import flight from "/public/images/Home/hero/flight.png";
import contact from "/public/images/contact.png";
import useMediaQuery from "@/lib/UseMediaQuery"
import { Link } from "@/i18n/navigation"

const InscriptionEtContact = () => {
    const isScreen = useMediaQuery("(min-width: 1025px)");
    return (
        <div className="lg:px-20 py-[4.5rem] px-5 font-Poppins relative ">
            <Image src={flight} alt="" className=" absolute top-20 -right-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 translate scale-x-[-1]"/>    
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-extrabold lg:text-[60px] md:text-4xl text-2xl text-center"> <span className="text-violet-800">Inscription </span>et Contact</motion.h1>
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-muted-foreground lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center pt-7">Section avec <span className="text-violet-800">des témoignages d&apos;enseignants</span> ayant suivi nos formations.
                </p>
            </motion.div>
            <div className="flex justify-center items-center min-h-screen">
            <motion.div
            variants={FadeOut(.3)}
                initial="initial"
                whileInView="animate"
            className="bg-white p-3 flex max-lg:flex-col gap-5 items-start justify-center lg:w-[90%] place-self-center border shadow-2xl shadow-black/30 rounded-3xl relative mt-14 overflow-hidden">
                <div className="relative bg-[#011C2B] text-white font-Poppins rounded-xl h-full p-12 md:space-y-48 space-y-20 lg:w-1/2 w-full">
                    <div className="space-y-3">
                        <h1 className="text-[28px] font-semibold">Contact Information</h1>
                        <p className="text-lg max-w-96">Écrivez quelque chose pour démarrer une discussion !</p>
                    </div>
                    <div className="space-y-16">
                        {
                            contacts.map(({ Icon, value }, index) => (
                                <div className="flex items-center gap-5" key={index}>
                                    <Icon />
                                    <p className="max-w-72">{value}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex gap-8 flex-wrap">
                        {
                            socials.map(({ Icon, link }, index) => (
                                <Link href={link} className="bg-violet-800 p-2 rounded-full flex items-center hover:bg-violet-100 hover:text-violet-900 duration-500 z-10" key={index} target="_blank">
                                    <Icon className="max-md:size-4 size-6" />
                                </Link>
                            ))
                        }
                    </div>
                    <div className="bg-[#FFF9F921] rounded-full size-80 absolute -bottom-24 -right-32 z-0"></div>
                    <div className="bg-[#FFF9F921] size-32 absolute bottom-24 right-24 z-0 rounded-full"></div>
                </div>
                <InscriptionEtContactForm />
            <Image className= {`absolute -bottom-10 right-10  ${isScreen ?"": "hidden"}`} src={contact} alt="" />
            </motion.div>
            </div>
        </div>
    )
}

export default InscriptionEtContact