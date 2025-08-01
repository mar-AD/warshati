import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import style_1 from "/public/images/Dashboard/style_2.png";
import style_2 from "/public/images/Dashboard/style_3.png";
import style_3 from "/public/images/Dashboard/style_4.png";

export interface FeatureCardProps {
    title: string;
    icon: StaticImageData;
    bgColor: string;
}

export default function FeatureCard({ title, icon, bgColor }: FeatureCardProps) {
    return (
        <div className={` relative p-4 rounded-2xl flex flex-col items-start gap-2 overflow-hidden h-full`} style={{ backgroundColor: bgColor }}>
            <Image className=" absolute top-0 right-0 w-[130px] h-[65px]" src={style_1} alt="style"/>
            <Image className=" absolute right-0 bottom-0 w-[130px] h-[65px]" src={style_2} alt="style"/>
            <Image className=" absolute right-[10%] top-0 w-[200px] h-[80px]" src={style_3} alt="style"/>
            <h3 className="text-[19px] font-semibold text-white">
                {title}
            </h3>
            <div className={` rounded-full w-[55px]`}>
                <Image className=" w-[33px] h-[33px]" src={icon} alt="Logo"/>
            </div>
        </div>
    );
}
