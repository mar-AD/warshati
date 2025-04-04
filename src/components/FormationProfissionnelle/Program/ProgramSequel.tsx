"use client"
import Image from "next/image"
import flight from "/public/images/Home/hero/flight.png";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import { objectifDuProgrammeData, programmesDeFormationData } from "@/lib/data";
import ProgramCard from "./ProgramCards";
import Checkbox from "/public/images/Home/digitalLab/Checkbox.png"

const ProgramSequel = () => {
    return (
        <div className=" relative  px-14 pt-12 pb-[5.75rem] max-md:pb-7">
        
            
            {/* section3-------------- */}
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full px-0 md:px-12 lg:px-28">
                <div className="w-full lg:w-1/2 ">
                    <h1 className=" text-slate-600 font-semibold text-[22px] sm:text-[22px] md:text-[20px] lg:text-[26px]">Coaching et <span className="text-violet-500">Mentorat</span> (Exemples ) </h1>

                    <ul className="space-y-9 pt-10">
                    {programmesDeFormationData[2].map((item, i) => (
                        <li
                        key={i}
                        className="flex gap-x-3  text-[18px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium text-gray-800"
                        >
                        <Image className="size-5 lg:size-8" src={Checkbox} alt="Checkbox" />
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="w-full lg:w-1/2 gap-12 flex flex-col sm:flex-row flex-wrap">
                    {objectifDuProgrammeData[2].map((item, i) => (
                        <ProgramCard 
                        key={i} 
                        item={item} 
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
                        item={item} 
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
                    Ressources et <span className="text-violet-500">Outils Pédagogiques</span> (Exemples )
                    </h1>

                    <ul className="space-y-9 pt-10">
                    {programmesDeFormationData[3].map((item, i) => (
                        <li
                        key={i}
                        className="flex gap-x-3 text-[18px] sm:text-[18px] md:text-[22px] lg:text-[28px] font-medium text-gray-800"
                        >
                        <Image className="size-5 lg:size-8" src={Checkbox} alt="Checkbox" />
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default ProgramSequel