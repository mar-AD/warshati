"use client";
import Image from "next/image";
import Checkbox from "/public/images/Home/digitalLab/Checkbox.png";
import ProgramCard from "./ProgramCards";
import { nosProgrammesData } from "@/lib/data";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "@/lib/animations";

const ProgramSection = ({
    index,
    reverse,
    bgColor,
    title,
    subtitle,
    key_1,
    key_2,
    objectiveText,
    activities,
    }: {
    index: number;
    reverse?: boolean;
    bgColor?: string;
    title: ReactNode;
    subtitle: ReactNode;
    key_1: string;
    key_2: string;
    objectiveText: string;
    activities: { number: number; text: string }[];
    }) => {
        const arrowStyles = [
            "lg:-bottom-28 lg:left-[10%] z-0",
            "lg:-bottom-[60%] lg:right-[-14rem] scale-x-[-1]",
            "lg:-bottom-[50%] lg:left-[5rem] rotate-[-25deg]"
        ];
        
        const arrowSizes = [
            "lg:w-48 lg:h-[12rem]",
            "lg:w-80 lg:h-[15rem]",
            "lg:w-48 lg:h-[10rem]"
        ];
    return (
        <div className={`${bgColor || "bg-light-gray"} px-4 md:px-12 lg:px-28 py-12`}>
        <div
            className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-8 lg:gap-12 items-center`}
        >

            <motion.div
            variants={reverse? FadeLeft(0.2): FadeRight(0.2) }
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
            >
                <h1 className="text-center md:text-left text-2xl lg:text-[52px] font-bold mb-4">
                    {title}
                </h1>
                <p className="text-center md:text-left text-lg lg:text-[26px] font-semibold text-slate-600 mb-6">
                    {subtitle}
                </p>


                <h3 className="flex items-center gap-x-2 font-semibold text-xl lg:text-2xl">
                    <Image className="size-5 lg:size-8" src={Checkbox} alt="Checkbox" />
                    <span className="font-bold lg:text-[28px]">{key_1}</span>
                </h3>
                <p className="text-[16px] lg:text-[28px] font-medium pt-3">
                    {objectiveText}
                </p>


                <h2 className="flex items-center gap-x-2 font-semibold text-xl lg:text-2xl pt-5">
                    <Image className="size-5 lg:size-8" src={Checkbox} alt="Checkbox" />
                    <span className="font-bold lg:text-[28px]">{key_2}</span>
                </h2>

                <ul className="space-y-6 pt-8">
                    {activities.map((activity, i) => (
                    <li
                        key={i}
                        className="flex gap-x-3 text-[16px] lg:text-[28px] font-medium"
                    >
                        {activity.number}. {activity.text}
                    </li>
                    ))}
                </ul>
            </motion.div>


            <div className=" relative w-full lg:w-1/2 lg:min-h-[308px]">
            <ProgramCard 
                item={nosProgrammesData[index]}
                arrowStyles={arrowStyles[index]}
                arrowSize={arrowSizes[index]}
                isReverse={reverse}
            />
            </div>
        </div>
        </div>
    );
    };

export default ProgramSection;  



    export const styleVioletText = (text: string, wordsToHighlight: string[]) => {
        const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");
    return text.split(regex).map((part, index) => {
        if (wordsToHighlight.some((word) => word.toLowerCase() === part.toLowerCase())) {
        return (
            <span key={index} className="text-violet-800">
            {part}{" "}
            </span>
        );
        }
        return part + " ";
    });
    };
    


