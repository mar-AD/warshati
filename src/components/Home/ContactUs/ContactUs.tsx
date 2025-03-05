"use client"
import Link from "next/link"
import { contacts, socials } from "@/lib/data"
import ContactForm from "./ContactForm"
import { FadeOut, FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
const ContactUs = () => {
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative bg-light-gray">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-extrabold lg:text-[82px] md:text-4xl text-2xl text-center">Contactez nous</motion.h1>
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Entrez vos coordonnées, nous vous contacterons pour répondre à vos besoins.
                </p>
            </motion.div>
            <motion.div
            variants={FadeOut(.3)}
                initial="initial"
                whileInView="animate"
            className="bg-white p-3 flex max-lg:flex-col gap-5 items-start justify-center lg:w-[90%] place-self-center border shadow-2xl shadow-black/30 rounded-3xl relative">
                {/* contact information */}
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
                {/* contact form */}
                <ContactForm />
            </motion.div>
        </div>
    )
}

export default ContactUs