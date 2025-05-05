"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import icon_1 from "/public/images/Dashboard/image_2.png";
import icon_2 from "/public/images/Dashboard/rocket.png";
import icon_3 from "/public/images/Dashboard/g-design.png";
import icon_4 from "/public/images/Dashboard/sittings.png";
import FeatureCard from "./FeatureCrads";
import { comingSoonData, teachableAICardData } from "@/lib/data";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Cards from "./Cards";
import Card from "../../SectionCards";
import { useTranslations } from "next-intl";

function AppliedAI() {
    const [api, setApi] = useState<CarouselApi>();

    const t = useTranslations("dashboard.applied_ai")

    useEffect(() => {
        if (!api) return;
        const interval = setInterval(() => {
        api.scrollNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [api]);

    return (
        <div className="flex flex-col flex-1 overflow-y-auto">
            <div className="flex flex-col md:flex-row w-full relative overflow-hidden px-6 md:px-[30px] py-6 font-Poppins gap-4">
                <div className="relative w-full md:w-1/2 flex flex-col gap-4 md:flex-col items-start justify-between rounded-[20px] h-auto md:h-auto overflow-hidden py-4 px-6 md:px-8 bg-violet-100 dark:bg-violet-400">
                    <div className="relative flex-1 flex flex-col">
                        <h2 className="font-extrabold text-[24px] sm:text-[26px] md:text-[28px] lg:text-[33px] mt-6">
                            {t.rich('title', {
                                highlight: (chunks) => <span className="text-violet-800 dark:text-gray-800">{chunks}</span>
                            })}
                        </h2>
                        <p className="font-thin text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] leading-snug">
                            {t.rich('description', {
                                br: () => <br/>
                            })}
                        </p>
                    </div>

                    <div className="relative flex gap-2 md:gap-4 mt-4 overflow-y-auto">
                        <button className="text-[10px] sm:text-[12px] md:text-[14px] font-Inter flex items-center gap-2 bg-violet-800 text-white px-6 sm:px-10 py-2 rounded-full font-medium shadow hover:brightness-95 transition">
                            {t("get_started")} <ArrowRight size={20} />
                        </button>
                        <button className="text-[10px] sm:text-[14px] md:text-[14px] font-Inter flex items-center gap-2 border border-violet-800 bg-white text-violet-800 px-6 sm:px-7 py-2 rounded-full font-medium hover:bg-white/20 dark:hover:bg-white/80 transition">
                            {t("learn_more")} <Plus size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full md:w-1/2 mt-6 md:mt-0">
                    <div>
                        <FeatureCard
                        title={t("my_ai_models")}
                        icon={icon_1}
                        bgColor="#7a40f2"
                        />
                    </div>
                    <div>
                        <FeatureCard
                        title={t("my_projects")}
                        icon={icon_3}
                        bgColor="#f4c427"
                        />
                    </div>
                    <div>
                        <FeatureCard
                        title={t("tools")}
                        icon={icon_2}
                        bgColor="#ff9060"
                        />
                    </div>
                    <div>
                        <FeatureCard
                        title={t("setting")}
                        icon={icon_4}
                        bgColor="#3acbe9"
                        />
                    </div>
                </div>
            </div>

            <div className="pb-6 pl-6 md:pl-[30px] font-Poppins">
                <Carousel
                opts={{
                    loop: true,
                    slidesToScroll: 1,
                    align: "start",
                }}
                setApi={setApi}
                >
                <CarouselContent className="flex gap-4 md:gap-6 px-6">
                    {teachableAICardData.map((card, index) => (
                        <CarouselItem
                            className="md:basis-[36%] lg:basis-[26%] basis-[90%]"
                            key={index}
                        >
                            <Cards
                            title={t(`teachable_ai_cards.${index}.title`)}
                            description={t(`teachable_ai_cards.${index}.description`)}
                            backgroundImage={card.image}
                            href={card.href}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
            </div>

            <div className="px-6 md:px-8 pb-8">
                <h1 className="font-Poppins text-base mb-4">{t("coming_soon")}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {comingSoonData.map((card, index) => (
                        <div key={index}>
                            <Card data={{
                                ...card,
                                title: t(`coming_soon_cards.${index}.title`),
                                description: t(`coming_soon_cards.${index}.description`)
                                }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AppliedAI;
