"use client"
import ThematiqueCard from "./ThematiqueCard"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/lib/UseMediaQuery";
import { ThematiqueData } from "@/lib/data";
import { Plus } from "lucide-react";
import { FadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
const Thematique = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const isSmallScreen = useMediaQuery("(max-width: 780px)"); // Tailwind's `sm` breakpoint
    const isMediumScreen = useMediaQuery("(max-width: 1400px)"); // Tailwind's `md` breakpoint

    const slidesToScroll = isSmallScreen ? 1 : isMediumScreen ? 2 : 4;

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(Math.ceil(api.scrollSnapList().length))
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api, slidesToScroll])

    return (
        <div className="bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Thématique</motion.h1>
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Ensemble des thématiques et des axes en constante évolution, axé sur des projets et centré autour des concepts STEAM & AI.</p>
            </motion.div>
            <Carousel
                opts={{
                    loop: true,
                    slidesToScroll: slidesToScroll

                }}
                className=""
                setApi={setApi}>

                <CarouselContent className="py-14">

                    {ThematiqueData.map((card, index) => (
                        <CarouselItem className="xl:basis-1/4 md:basis-1/2  md:pl-6" key={index}>
                            <ThematiqueCard item={card} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center mt-10">
                    {Array.from({ length: count }).map((_, index) => (
                        <div onClick={() => api?.scrollTo(index)}
                            key={index}
                            className={cn(
                                "mx-1 rounded-full md:h-4 h-2 transition-all duration-300 cursor-pointer",
                                current == index + 1 ? "md:w-16 w-8 bg-violet-700" : "md:w-4 w-2 bg-black/20 hover:bg-black/50"
                            )}
                        ></div>
                    ))}
                </div>
            </Carousel>
            <button className="btn btn-violet-outline !gap-x-3">savoir <Plus /></button>
        </div >
    )
}

export default Thematique