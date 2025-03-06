"use client"
import Hero from "@/components/Blog/Hero/Hero"
import { articleData, socials } from "@/lib/data"
import Link from "next/link"
import { ReactNode } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import useMediaQuery from "@/lib/UseMediaQuery"
const BlogTemp = ({ children }: { children?: ReactNode }) => {
    const popularSubject = [
        "Smart Workshops",
        "STEAM",
        "Coding",
        "creditvité",
        "AI",
        "Maquettes interactives"
    ]
    const pathname = usePathname()
    const isMediumScreen = useMediaQuery("(max-width: 1000px)"); return (
        <div className="lg:px-14 md:px-16 px-10 pb-10 pt-[9.04rem] space-y-20 font-Poppins bg-light-gray">
            <Hero />
            <div className="font-Poppins flex max-lg:flex-col-reverse justify-end gap-x-10 relative">
                <div className="border w-fit lg:absolute lg:left-0 mx-5 px-2 py-3 rounded-lg bg-white hidden lg:flex lg:flex-col items-center justify-center">
                    {
                        socials.map(({ Icon, link, followers }, index) => (
                            <Link href={link} key={index} className="flex items-center gap-3 text-sm rounded-lg hover:bg-slate-100 p-3 duration-300">
                                <Icon className="size-4" />
                                <p className="text-xs font-bold">
                                    {followers}

                                </p>
                            </Link>
                        ))
                    }
                </div>
                <div className="space-y-8 lg:w-1/2">
                    <div className="space-y-6">
                        <h1 className="text-[32px] font-bold">Bienvenue sur le blog  !</h1>
                        <p className="border-l-2 border-black px-4 leading-normal">
                            Chez Warshati, nous croyons en l&apos;éducation comme levier fondamental pour préparer les générations futures aux défis du <b>21ᵉ siècle</b>. Notre plateforme intelligente marocaine propose des solutions innovantes, intégrant des programmes <b>STEAM et l’intelligence artificielle</b>, afin d’offrir une expérience d’apprentissage immersive et interactive.<br />
                            À travers ce blog, nous partageons des actualités, des ressources pédagogiques, et des insights sur l’éducation et la technologie. Découvrez comment nos laboratoires <b>(STEAM LAB, AI LAB, IoT LAB, etc.)</b>, nos outils d’évaluation et nos méthodologies d’enseignement personnalisées transforment l’apprentissage en une aventure passionnante.<br />
                            Restez connectés pour explorer des projets inspirants, des témoignages de nos utilisateurs, et des réflexions sur l’évolution des systèmes éducatifs. Ensemble, façonnons un avenir où créativité, collaboration et innovation sont au cœur de l’apprentissage !
                        </p>
                    </div>
                    {children}
                </div>
                <div className="lg:w-1/3">
                    <div className="space-y-4">
                        <h1 className="text-base font-medium">Sujets populaires :</h1>
                        <div className="flex flex-wrap items-start gap-3">
                            {
                                popularSubject.map((subject, index) => (
                                    <p key={index} className="text-[10px] bg-slate-100 py-2 px-4 w-fit rounded-lg">
                                        {subject}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="py-10">
                        <h1 className="lg:mb-7">Articles:</h1>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            orientation={isMediumScreen ? "horizontal" : "vertical"}
                            className="w-full lg:max-w-lg"
                        >
                            <CarouselPrevious className="max-lg:hidden bg-violet-800 text-white rounded-lg" />
                            <CarouselContent className="lg:h-[2340px] pt-5">
                                {
                                    articleData.map((article, index) => (
                                        pathname.split("/")[2] !== `article${index + 1}` &&
                                        <CarouselItem key={index} className={cn("pt-1 lg:basis-28 basis-full m-4 bg-white rounded-lg border",

                                        )}>
                                            <div className="p-3 space-y-3">
                                                <div className="rounded-lg xl:h-56 h-40 overflow-hidden">

                                                    <Image
                                                        src={`${article.image}${index + 1}.jpg`}
                                                        width={900}
                                                        height={900}
                                                        alt={article.name}
                                                    />
                                                </div>
                                                <p className="text-xs bg-violet-400/30 w-fit px-4 py-1 rounded-lg font-medium text-blue-800 capitalize" >{article.title} {index + 1}</p>
                                                <h1 className="font-semibold text-lg">{article.name}</h1>
                                                <div className="flex justify-between items-center">
                                                    <p className="text-xs text-slate-400">{article.date}</p>
                                                    <Link href={`/Blog/article${index + 1}`} className="btn !rounded-lg !text-xs !h-9 btn-violet-outline">savoir plus</Link>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            <CarouselNext className="bg-violet-800 text-white rounded-lg max-lg:hidden" />
                        </Carousel>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogTemp