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
import Image from "next/image"
import robot_2 from "/public/images/Home/curricula/robot_2.png"
import image_4 from "/public/images/Home/curricula/image_4.png"
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
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">Smart Workshops Project</motion.h1>
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
                <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-start gap-3"
                >
                    <div className="flex md:flex-row flex-col-reverse justify-between items-center md:items-end w-full gap-6 px-5 max-w-[100vw]">
                        <button className="!w-fit btn btn-violet-outline mt-6 md:mt-0 mx-auto md:mx-0">
                            Savoir <Plus className="ml-2"/>
                        </button>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                            <Image
                            className="w-[200px] md:w-[180px] sm:w-[160px] max-sm:w-[140px] lg:w-[220px]"
                            draggable={false}
                            src={robot_2}
                            alt="Pen Line Image"
                            />

                            <div className="relative w-fit">
                            <Image className="absolute -right-8 -top-8 w-[60px]" src={image_4} alt="" />
                            <h1 className="border-4 border-violet-800 rounded-full max-w-[650px] w-full px-6 py-2 text-center text-muted-foreground
                                text-[0.75rem] sm:text-sm md:text-base lg:text-[1.019rem] font-bold">
                                Une série de 10 à 20 Smart Workshops, axée sur la réalisation d&apos;un projet concret inspiré par un thème spécifique
                            </h1>
                            </div>
                        </div>
                    </div>
                </motion.div>
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
        </div >
    )
}

export default Thematique