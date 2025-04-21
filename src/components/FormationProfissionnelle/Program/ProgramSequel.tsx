"use client"
import Image from "next/image"
import { objectifDuProgrammeData, programmesDeFormationData } from "@/lib/data";
import ProgramCard from "./ProgramCards";
import Checkbox from "/public/images/Home/digitalLab/Checkbox.png"
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "@/lib/animations";
import { useTranslations } from "next-intl";

const ProgramSequel = () => {
    const t = useTranslations('formationProfessionnelle.program');
    return (
        <div className=" relative px-5 sm:px-14 md:px-14 lg:px-14 pt-12 pb-[5.75rem] max-md:pb-7">
        
            
            {/* section3-------------- */}
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full px-0 md:px-12 lg:px-28">
                <div className="w-full lg:w-1/2 ">
                    <h1 className=" text-slate-600 font-semibold text-[22px] sm:text-[22px] md:text-[20px] lg:text-[26px]">
                        {t.rich('title_3', {
                            highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                        })}
                    </h1>

                    <motion.ul
                    variants={FadeRight(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="space-y-9 pt-10">
                        {t.raw('groups.3.content').map((item:string, i:number) => (
                            <li
                            key={i}
                            className="flex gap-x-3  text-[18px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium text-gray-800"
                            >
                            <Image className="size-5 lg:size-8" src={Checkbox} alt="Checkbox" />
                            {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <div className="w-full lg:w-1/2 gap-12 flex flex-col sm:flex-row flex-wrap">
                    {objectifDuProgrammeData[2].map((item, i) => (
                        <ProgramCard 
                        key={i} 
                        item={{
                            ...item, 
                            text: t.raw('cards.2')[i]
                        }} 
                        isLast={i === 1} 
                        isSecond={i === 1}
                        isBlackText={false}
                        arrowStyles="-bottom-48 -left-[10.5rem]"
                        arrowSize="w-64 h-[15.5rem]"
                        />
                    ))}
                </div>
            </div>
            {/* section4-------------- */}

            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full px-0 md:px-12 lg:px-28 pt-[5.75rem]">
                <div className="w-full lg:w-1/2 gap-5 flex flex-col sm:flex-row flex-wrap order-2 lg:order-1">
                    {objectifDuProgrammeData[3].map((item, i) => (
                    <ProgramCard 
                        key={i} 
                        item={{
                            ...item, 
                            text: t.raw('cards.3')[i]
                        }}  
                        isLast={i === objectifDuProgrammeData[3].length - 1} 
                        isSecond={i === 1}
                        isBlackText={true}
                        arrowStyles="hidden"
                        arrowSize=""
                    />
                    ))}
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <h1 className="text-slate-600 font-semibold text-[22px] sm:text-[22px] md:text-[20px] lg:text-[26px]">
                        {t.rich('title_4', {
                            highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                        })}
                    </h1>

                    <motion.ul
                    variants={FadeLeft(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="space-y-9 pt-10">
                        {t.raw('groups.4.content').map((item:string, i:number) => (
                            <li
                            key={i}
                            className="flex gap-x-3 text-[18px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium text-gray-800"
                            >
                            <Image className="size-5 lg:size-8" src={Checkbox} alt="Checkbox" />
                            {item}
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>

        </div>
    )
}
export default ProgramSequel