import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

export interface FeatureCardProps {
    title: string;
    icon: StaticImageData;
    bgColor: string;
    iconBgColor: string
}

export default function FeatureCard({ title, icon, bgColor, iconBgColor }: FeatureCardProps) {
    return (
        <div className={`p-6 rounded-2xl flex flex-col items-start gap-4 h-full`} style={{ backgroundColor: bgColor }}>
            <div className={`p-3 rounded-full w-[55px] h-[55px]`} style={{ backgroundColor: iconBgColor }}>
                <Image className=" w-[33px] h-[33px]" src={icon} alt="Logo"/>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
                {title}
            </h3>
        </div>
    );
}
