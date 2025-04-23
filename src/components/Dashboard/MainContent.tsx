import React from "react";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import image from "/public/images/Dashboard/image.png";
import icon_1 from "/public/images/Dashboard/folder.png";
import icon_2 from "/public/images/Dashboard/image (1).png";
import icon_3 from "/public/images/Dashboard/laptop.png";
import icon_4 from "/public/images/Dashboard/download.png";
import image_1 from "/public/images/Dashboard/style.png";
import FeatureCard from "./FeatureCrads";
import Carousel from "./Carousel";

export default function MainContent() {
    return (
        <div className="flex flex-col flex-1 min-h-0 lg:overflow-hidden">
        <div className="relative overflow-hidden px-[30px] py-6 font-Poppins">
            <div className="relative bg-violet-800 flex flex-col gap-10 md:flex-row items-start md:items-center justify-between rounded-[38px] h-auto md:h-[164px] overflow-hidden py-4 pl-8 md:pl-8 lg:pl-8 pr-8  md:pr-16 lg:pr-16">
                <div
                    className="absolute top-0 right-0 w-[30%] h-full z-0"
                    style={{
                        opacity: 0.10,
                        maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
                    }}
                >
                    <Image className="w-full h-full object-cover" src={image_1} alt="Background"  style={{ filter: "grayscale(100%)" }} />
                </div>

                <div className="relative flex-1 flex flex-col gap-2 text-white z-10">
                    <p className="font-thin text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-snug">
                        Learn to navigate, evaluate and create in the digital world <br /> with confidence
                    </p>
                    <h2 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[33px]">
                        Digital{" "}
                        <span className="font-extrabold">Literacy</span>{" "}
                        <span className="inline-block align-middle">
                            <Image className="w-11" src={image} alt="Digital Literacy" />
                        </span>
                    </h2>
                </div>

                <div className="relative z-10 flex flex-row lg:flex-row gap-2 md:flex-col md:gap-4 mt-0 md:mt-4 ">
                    <button className="text-[12px] sm:text-[14px] md:text-[14px] font-Inter flex items-center gap-2 bg-white text-violet-800 px-8 sm:px-10 py-2 rounded-full font-medium shadow hover:brightness-95 transition">
                        Get Started <ArrowRight size={20} />
                    </button>
                    <button className="text-[12px] sm:text-[14px] md:text-[14px] font-Inter flex items-center gap-2 border border-white text-white px-6 sm:px-7 py-2 rounded-full font-medium hover:bg-white/20 transition">
                        Learn More <Plus size={20} />
                    </button>
                </div>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12 min-h-[184px]">
                <FeatureCard
                    title="Information & Data"
                    icon={icon_1}
                    bgColor="#ffe2e5"
                    iconBgColor= '#fa5a7d'
                />
                <FeatureCard
                    title="Staying Safe Online"
                    icon={icon_3}
                    bgColor="#fff4de"
                    iconBgColor="#ff947a"
                />
                <FeatureCard
                    title="Creating Digital Content"
                    icon={icon_2}
                    bgColor="#dcfce7"
                    iconBgColor="#3cd856"
                />
                <FeatureCard
                    title="Connected & Collaborative"
                    icon={icon_4}
                    bgColor="#f3e8ff"
                    iconBgColor="#bf83ff"
                />
            </div>

        </div>
        <div className="flex-1 min-h-0 pl-[30px] overflow-y-auto lg:overflow-y-auto overflow-visible">

                    <Carousel />
            </div>

        </div>
    );
}
