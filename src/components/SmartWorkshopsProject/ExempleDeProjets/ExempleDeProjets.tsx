"use client"
import { FadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import flight from "/public/images/Home/hero/flight.png";
import Image from "next/image"
import ExempleDeProjets1stCard from "./ExempleDeProjets1stCard";
import { ExempleDeProjetsCardData, ExempleDeProjetsCardData_2 } from "@/lib/data";
import ExempleDeProjets2ndCard from "./ExempleDeProjets2ndCard";

const ExempleDeProjet = () => {
    return (
        <div className=" relative bg-light-gray px-5 sm:px-14 md:px-14 py-20 max-md:py-10 ">
            <Image src={flight} alt="" className=" absolute top-5 -right-0 sm:-right-0 md:right-0 lg:right-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 scale-x-[-1]"/>
            <motion.h1
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center font-extrabold font-Poppins lg:text-6xl md:text-4xl text-2xl">
                Exemples de Projets
            </motion.h1>
            <motion.p
            variants={FadeUp(.5)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-purple-800 font-semibold font-Poppins text-center text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] !leading-relaxed pt-3"
            >
                Véhicules Autonomes
            </motion.p>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-16 mt-10 sm:mt-12 md:mt-16 lg:mt-36">
                {
                    ExempleDeProjetsCardData[0].map((item, index) => (
                        <ExempleDeProjets1stCard index={index} item={item} key={index} />
                    ))
                }
            </div>

            <div className=" w-full relative">
                <Image src={flight} alt="" className=" absolute top-5 -left-5 md:-left-0 lg:-left-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/> 
                <motion.p
                variants={FadeUp(.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className=" text-purple-800 font-semibold font-Poppins text-center text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] !leading-relaxed mt-14"
                >
                    Maisons Intelligentes
                </motion.p>
            </div>
            

            <div className='flex flex-wrap justify-center gap-6 lg:gap-16 mt-10 sm:mt-12 md:mt-16 lg:mt-36'>
                {
                    ExempleDeProjetsCardData_2.map((item, index) => (
                        <ExempleDeProjets2ndCard index={index} item={item} key={index} />
                    ))
                }
            </div>

            <div className=" w-full relative">
                <Image src={flight} alt="" className=" absolute top-5 -right-4 sm:-right-14 md:-right-14 lg:-right-14 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 scale-x-[-1]"/>
                <motion.p
                variants={FadeUp(.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className=" text-purple-800 font-semibold font-Poppins text-center text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] !leading-relaxed mt-14"
                >
                    Énergies Durables
                </motion.p>
            </div>
            

            <div className='flex flex-wrap justify-center gap-6 lg:gap-16 mt-10 sm:mt-12 md:mt-16 lg:mt-36'>
                {
                    ExempleDeProjetsCardData[1].map((item, index) => (
                        <ExempleDeProjets1stCard index={index} item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
export default ExempleDeProjet