"use client"
import Image from "next/image"
import flight from "/public/images/Home/hero/flight.png"
import pen_line from "/public/images/Home/hero/pen_line.png"
import HeroImage from "./HeroImage"
import { motion } from "framer-motion"
import { FadeOut, FadeUp } from "@/lib/animations"
import VideoModal from "./VideoModal"
import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation"
const Hero = () => {
    const  t  = useTranslations('home');
    return (
        <div
            className="bg-light-gray px-3 pb-32">
            {/* Hero Section */}
            <div className="pt-56 relative">
                <motion.img
                    variants={FadeOut(.4)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="absolute left-0 max-lg:hidden"
                    loading="lazy"
                    src={flight.src}
                    alt="" />
                <div className="flex flex-col items-center justify-center relative gap-y-7">
                    <motion.div
                        variants={FadeUp(.3)}
                        initial="initial"
                        animate="animate"
                        className="">
                        <h1 className="place-self-center lg:text-[96px] md:text-6xl text-4xl font-bold md:max-w-[61rem] max-w-96 text-center font-Vazirmatn lg:leading-[112.5px] md:!leading-tight leading-normal">
                            {t.rich('page_title', {
                                highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                            })}
                        </h1>
                        <Image className="lg:place-self-end md:place-self-center place-self-end lg:-translate-y-7 md:-translate-y-5 lg:w-[57%] w-[39%] md:w-[36%] -translate-y-4 max-md:-translate-x-20" draggable={false} width={900} src={pen_line} alt="" />
                    </motion.div>
                    <motion.div
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"
                    className="flex items-center justify-center gap-x-4 overflow-x-auto mt-10 whitespace-nowrap"
                    >
                        <Link href="/Commencer">
                            <button className="btn btn-violet text-sm sm:text-base md:text-lg min-w-fit">
                            {t("start_button")}
                            </button>
                        </Link>

                        <VideoModal/>
                        
                    </motion.div>

                </div>
            </div>
            <HeroImage />
        </div>
    )
}

export default Hero