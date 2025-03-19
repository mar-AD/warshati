"use client"
import { useEffect, useState } from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../../../ui/carousel"
import useMediaQuery from "@/lib/UseMediaQuery"
import PedagogyCard from "./PedagogyCard"
import { PedagogyData } from "@/lib/data"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"
import Image from "next/image"
import pen_line from "/public/images/Home/hero/pen_line.png"
import victore_2 from "/public/images/Home/pedagogy/victore_2.png"

const Pedagogy = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const isSmallScreen = useMediaQuery("(max-width: 780px)")
    const isMediumScreen = useMediaQuery("(max-width: 1400px)")

    const slidesToScroll = isSmallScreen ? 1 : isMediumScreen ? 2 : 4

    useEffect(() => {
        if (!api) return

        setCount(Math.ceil(api.scrollSnapList().length))
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api, slidesToScroll])

    return (
        <div className="relative bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <Image 
                className="absolute top-0 right-[35rem] lg:right-[25rem] md:right-[10rem] sm:right-[5rem] max-sm:right-[15rem] lg:w-[280px] md:w-[180px] sm:w-[140px] max-sm:w-[140px]"
                draggable={false} 
                src={victore_2} 
                alt="Line Image" 
            />
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                animate="animate"
                className="flex flex-col items-end gap-3 mt-16 !sm:mt-0 !max-sm:mt-0"
            >
                <div className="flex flex-col items-end pr-32 md:pr-20 sm:pr-10 max-sm:pr-5 max-w-[61rem]">
                    <h1 className="text-[32px] lg:text-[32px] md:text-[28px] sm:text-[24px] max-sm:text-[20px] font-bold text-end text-muted-foreground">
                        21st century skills
                    </h1>
                    <Image 
                        className="w-[200px] md:w-[200px] sm:w-[170px] max-sm:w-[150px] lg:w-[250px]" 
                        draggable={false} 
                        src={pen_line} 
                        alt="Pen Line Image" 
                    />
                </div>
            </motion.div>

            <Carousel
                opts={{
                    loop: true,
                    slidesToScroll: slidesToScroll
                }}
                setApi={setApi}
            >
                <CarouselContent className="min-h-[18rem]">
                    {PedagogyData.map((card, index) => (
                        <CarouselItem className="xl:basis-1/4 md:basis-1/2 md:pl-6" key={index}>
                            <PedagogyCard item={card} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="flex justify-center mt-10">
                    {Array.from({ length: count }).map((_, index) => (
                        <div
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={cn(
                                "mx-1 rounded-full md:h-4 h-2 transition-all duration-300 cursor-pointer",
                                current == index + 1 ? "md:w-16 w-8 bg-violet-700" : "md:w-4 w-2 bg-black/20 hover:bg-black/50"
                            )}
                        ></div>
                    ))}
                </div>
            </Carousel>
        </div>
    )
}

export default Pedagogy
