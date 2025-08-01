"use client"

import React, { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import image from "/public/images/Dashboard/image.png";
import icon_1 from "/public/images/Dashboard/folder.png";
import icon_2 from "/public/images/Dashboard/image (1).png";
import icon_3 from "/public/images/Dashboard/laptop.png";
import icon_4 from "/public/images/Dashboard/download.png";
import image_1 from "/public/images/Dashboard/style.png";
import FeatureCard from "../Programs/FeatureCrads";
import Carousel from "../Programs/Carousel";
import InfoDataPanel from "./Carousel";
import InfoPanel2 from "../../ComingSoon/ComingSoon";
import InfoPanel3 from "../../ComingSoon/ComingSoon";
import InfoPanel4 from "../../ComingSoon/ComingSoon";
import { useTranslations } from "next-intl";

function Programs() {
    const t = useTranslations("dashboard.digital_literacy");
    const [selected, setSelected] = useState("infoData");

    const features = [
        {
            key: "infoData",
            title: t("infoData"),
            icon: icon_1,
            bgColor: "#ffe2e5",
            iconBgColor: "#fa5a7d",
            panel: <InfoDataPanel />,
        },
        {
            key: "staySafe",
            title: t("staySafe"),
            icon: icon_3,
            bgColor: "#fff4de",
            iconBgColor: "#ff947a",
            panel: <InfoPanel2 />,
        },
        {
            key: "creatDegCon",
            title: t("creatDegCon"),
            icon: icon_2,
            bgColor: "#dcfce7",
            iconBgColor: "#3cd856",
            panel: <InfoPanel3 />,
        },
        {
            key: "connectColab",
            title: t("connectColab"),
            icon: icon_4,
            bgColor: "#f3e8ff",
            iconBgColor: "#bf83ff",
            panel: <InfoPanel4 />,
        },
    ];

    const selectedFeature = features.find((f) => f.key === selected);

    return (
        <div className="flex flex-col flex-1 min-h-0 lg:overflow-hidden">
            <div className="relative overflow-hidden px-6 md:px-[30px] py-6 font-Poppins">
                <div className="relative bg-violet-800 flex flex-col gap-10 md:flex-row items-start md:items-center justify-between rounded-[38px] h-auto md:h-[164px] overflow-hidden py-4 pl-6 md:pl-8 lg:pl-8 pr-8  md:pr-16 lg:pr-16">
                    <div
                        className="absolute top-0 right-0 w-[30%] h-full z-0"
                        style={{
                            opacity: 0.10,
                            maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
                        }}
                    >
                        <Image className="w-full h-full object-cover" src={image_1} alt="Background" style={{ filter: "grayscale(100%)" }} />
                    </div>

                    <div className="relative flex-1 flex flex-col gap-2 text-white">
                        <p className="font-thin text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-snug">
                            {t.rich('description', {
                                br: () => <br />
                            })}
                        </p>
                        <h2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[33px]">
                            {t.rich('title', {
                                bold: (chunks) => <span className="font-extrabold">{chunks}</span>
                            })}
                            <span className="inline-block align-middle pl-2">
                                <Image className="w-11 " src={image} alt="Digital Literacy" />
                            </span>
                        </h2>
                    </div>

                    <div className="relative flex flex-row lg:flex-row gap-2 md:flex-col md:gap-4 mt-0 md:mt-4 ">
                        <button className="text-[10px] sm:text-[12px] md:text-[14px] font-Inter flex items-center gap-2 bg-white text-violet-800 px-4 sm:px-10 py-2 rounded-full font-medium shadow hover:brightness-95 transition">
                            {t("get_started")} <ArrowRight size={20} />
                        </button>
                        <button className="text-[10px] sm:text-[12px] md:text-[14px] font-Inter flex items-center gap-2 border border-white text-white px-4 sm:px-7 py-2 rounded-full font-medium hover:bg-white/20 transition">
                            {t("learn_more")} <Plus size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12 min-h-[184px]">
                    {features.map((f) => (
                        <button key={f.key} className="text-left focus:outline-none" onClick={() => setSelected(f.key)}>
                            <FeatureCard
                                title={f.title}
                                icon={f.icon}
                                bgColor={f.bgColor}
                                iconBgColor={f.iconBgColor}
                            />
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-6">
                {selectedFeature ? selectedFeature.panel : <Carousel />}
            </div>
        </div>
    );
}

export default Programs;