"use client"
import { useEffect, useState } from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel"
import useMediaQuery from "@/lib/UseMediaQuery"
import PartenariatCard from "./PartenariatCard"
import { cn } from "@/lib/utils"

const Partenariat = () => {
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
    }, [api,slidesToScroll])
  return (
    <div className="bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <h1 className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">Partenariat</h1>
            {/* <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-6 items-start"> */}
            <Carousel
                opts={{
                    loop: true,
                    slidesToScroll: slidesToScroll

                }}
                className=""
                setApi={setApi}>

                <CarouselContent>

                    {Array.from({length:15}).map((card, index) => (
                        <CarouselItem className="xl:basis-1/4 md:basis-1/2  md:pl-6" key={index}>
                            <PartenariatCard  />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center mt-10 max-md:hidden">
                    {Array.from({ length: count }).map((_, index) => (
                        <div onClick={()=>api?.scrollTo(index)}
                            key={index}
                            className={cn(
                                "p-1 mx-1 rounded-full h-4 transition-all duration-300 cursor-pointer", // Common classes
                                current== index+1  ? "w-16 bg-violet-700" : "w-4 bg-black/20 hover:bg-black/50" // Conditional classes
                            )}
                        ></div>
                    ))}
                </div>
            </Carousel>
            {/* </div> */}
        </div>
  )
}

export default Partenariat