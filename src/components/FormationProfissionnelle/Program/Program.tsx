"use client"
import Image from "next/image"
import flight from "/public/images/Home/hero/flight.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "@/lib/animations";
import { objectifDuProgrammeData, programmesDeFormationData } from "@/lib/data";
import ProgramCard from "./ProgramCards";
import Checkbox from "/public/images/Home/digitalLab/Checkbox.png"
import ProgramSequel from "./ProgramSequel";
import { useTranslations } from "next-intl";

const Program = () => {
  const t = useTranslations('formationProfessionnelle.program');
    return (
      <>
        <div className=" relative bg-light-gray px-5 sm:px-14 md:px-14 lg:px-14 pt-[4.5rem] pb-9 max-md:pb-7">
            <Image src={flight} alt="" className="  absolute top-5 right-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 translate scale-x-[-1]"/> 
            <motion.h1
            variants={FadeUp(.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} 
            className=" font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-Poppins"
            > 
                {t.rich('section_title', {
                  highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                })}
            </ motion.h1>
            <div className="pt-32 px-0 md:px-12 lg:px-28">
                <motion.h1
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} 
                className=" font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[3.35rem] font-Poppins"
                > 
                    {t.rich('sub', {
                      highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                    })}
                </ motion.h1>
            </div>
            {/* section1-------------- */}
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full px-0 md:px-12 lg:px-28 pt-10">
                <div className="w-full lg:w-1/2">
                <h1 className=" text-slate-600 font-semibold text-[22px] sm:text-[22px] md:text-[20px] lg:text-[26px]">
                  {t.rich('title_1', {
                    highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                  })}
                </h1>

                    <motion.ul
                    variants={FadeRight(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="space-y-9 pt-10">
                    {t.raw('groups.1.content').map((item:string, i:number) => (
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

                <div className="w-full lg:w-1/2 gap-5 flex flex-col sm:flex-row flex-wrap">
                    {objectifDuProgrammeData[0].map((item, i) => (
                        <ProgramCard 
                        key={i} 
                        item={{
                          ...item, 
                          text: t.raw('cards.0')[i].title,
                          discreption: t.raw('cards.0')[i].text
                        }} 
                        isLast={i === objectifDuProgrammeData[0].length - 1} 
                        isSecond={i === 1}
                        isBlackText={false}
                        arrowStyles="-bottom-40 -left-[14.5rem]"
                        arrowSize="lg:w-60 lg:h-[13.5rem]"
                        />
                    ))}
                </div>
            </div>
            {/* section2-------------- */}

            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full px-0 md:px-12 lg:px-28 pt-48">
              <div className="w-full lg:w-1/2 gap-5 flex flex-col sm:flex-row flex-wrap order-2 lg:order-1">
                {objectifDuProgrammeData[1].map((item, i) => (
                  <ProgramCard 
                    key={i} 
                    item={{
                      ...item, 
                      text: t.raw('cards.1')[i]
                    }} 
                    isLast={i === objectifDuProgrammeData[1].length - 1} 
                    isSecond={i === 1}
                    isBlackText={true}
                    arrowStyles="-bottom-20 -right-[10rem] scale-x-[-1]"
                    arrowSize="w-40 h-[10.5rem]"
                  />
                ))}
              </div>

              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <h1 className="text-slate-600 font-semibold text-[22px] sm:text-[22px] md:text-[20px] lg:text-[26px]">
                {t.rich('title_2', {
                    highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                  })}
                </h1>

                <motion.ul
                variants={FadeLeft(0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-9 pt-10">
                  {t.raw('groups.2.content').map((item:string, i:number) => (
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
        <ProgramSequel/>
        </>
    )
}
export default Program