"use client"
import ThematiqueCard from "./ThematiqueCard"
import image_1 from '/public/images/thematique/image_1.png';
import image_2 from '/public/images/thematique/image_2.png';
import image_3 from '/public/images/thematique/image_3.png';
import image_4 from '/public/images/thematique/image_4.png';
import image_5 from '/public/images/thematique/image_5.png';
import image_6 from '/public/images/thematique/image_6.png';
import image_7 from '/public/images/thematique/image_7.png';
import image_8 from '/public/images/thematique/image_8.png';
import image_9 from '/public/images/thematique/image_9.png';
import image_10 from '/public/images/thematique/image_10.png';
import image_11 from '/public/images/thematique/image_11.png';
import image_12 from '/public/images/thematique/image_12.png';
import image_13 from '/public/images/thematique/image_13.png';
import image_14 from '/public/images/thematique/image_14.png';
import image_15 from '/public/images/thematique/image_15.png';
import image_16 from '/public/images/thematique/image_16.png';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/lib/UseMediaQuery";
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
    }, [api,slidesToScroll])
    const CardsData = [
        {
            title: "Voiture intelligente",
            description: "Une voiture qui se conduit toute seule, te parle et aide à éviter les accidents pour voyager en toute sécurité !",
            image: image_1, // Replace with actual image URL
            imageBgColor: "#FFD700" // Replace with actual background color
        },
        {
            title: "Ville intelligente",
            description: "L’enfant explore les tendances dû la technologie et leurs impacts sur sa ville. Par exemple, il découvre et programme sa première voiture autonome et contrôle les feux de signalisation.",
            image: image_2, // Replace with actual image URL
            imageBgColor: "#87CEEB" // Replace with actual background color
        },
        {
            title: "Maison intelligente",
            description: "L’enfant découvre les technologies de nouvelle génération qui sont installées dans la maison pour la rendre plus smart et plus sécurisées.",
            image: image_3, // Replace with actual image URL
            imageBgColor: "#90EE90" // Replace with actual background color
        },
        {
            title: "Usine intelligente",
            description: "L’enfant découvre les différentes utilisations de la robotique dans l’industrie en l’occurrence la chaîne automatique, le scanner, le bras qui déplace les objets, le chariot élévateurs, etc.",
            image: image_4, // Replace with actual image URL
            imageBgColor: "#FFA07A" // Replace with actual background color
        },
        {
            title: "Forêts connectées",
            description: "Apprendre à utiliser des capteurs pour surveiller les arbres et protéger la forêt.",
            image: image_5, // Replace with actual image URL
            imageBgColor: "#228B22" // Replace with actual background color
        },
        {
            title: "Santé connectée",
            description: "Découvrir comment la technologie peut aider à surveiller la santé.",
            image: image_6, // Replace with actual image URL
            imageBgColor: "#FF6347" // Replace with actual background color
        },
        {
            title: "Art numérique",
            description: "Créer des dessins et des objets à l'aide d'ordinateurs et d'imprimantes 3D.",
            image: image_7, // Replace with actual image URL
            imageBgColor: "#9370DB" // Replace with actual background color
        },
        {
            title: "Espace et astronomie",
            description: "Explorer les planètes et l'espace en construisant des maquettes et des robots.",
            image: image_8, // Replace with actual image URL
            imageBgColor: "#000080" // Replace with actual background color
        },
        {
            title: "Drones intelligents",
            description: "Apprendre comment les drones volent et prennent des photos pour surveiller les cultures et les forêts.",
            image: image_9, // Replace with actual image URL
            imageBgColor: "#1E90FF" // Replace with actual background color
        },
        {
            title: "Énergies renouvelables",
            description: "Construire des modèles qui fonctionnent avec l'énergie solaire et éolienne.",
            image: image_10, // Replace with actual image URL
            imageBgColor: "#FFD700" // Replace with actual background color
        },
        {
            title: "Climat et météo",
            description: "Comprendre le temps qu'il fait et créer des outils pour mesurer la pluie, le vent et le soleil.",
            image: image_11, // Replace with actual image URL
            imageBgColor: "#00CED1" // Replace with actual background color
        },
        {
            title: "Robots amusants",
            description: "Construire des petits robots qui bougent, parlent ou suivent des lignes.",
            image: image_12, // Replace with actual image URL
            imageBgColor: "#FF69B4" // Replace with actual background color
        },
        {
            title: "Jeux éducatifs",
            description: "Créer des jeux interactifs pour apprendre tout en s'amusant.",
            image: image_13, // Replace with actual image URL
            imageBgColor: "#FF4500" // Replace with actual background color
        },
        {
            title: "Agriculture intelligente",
            description: "Apprendre à utiliser des capteurs pour surveiller les plantes et améliorer les récoltes.",
            image: image_14, // Replace with actual image URL
            imageBgColor: "#8B4513" // Replace with actual background color
        },
        {
            title: "Oceans et protection",
            description: "Découvrir les secrets des océans et comment les protéger avec des outils simples.",
            image: image_15, // Replace with actual image URL
            imageBgColor: "#0000FF" // Replace with actual background color
        },
        {
            title: "Articulation artificielle",
            description: "Découvre comment la technologie aide à créer des bras, jambes ou autres parties du corps qui bougent, un peu comme des robots, pour aider les personnes à se déplacer.",
            image: image_16, // Replace with actual image URL
            imageBgColor: "#A9A9A9" // Replace with actual background color
        }
    ];
    return (
        <div className="bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Thématique</h1>
            <div className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Ensemble des thématiques et des axes en constante évolution, axé sur des projets et centré autour des concepts STEAM & AI.</p>
            </div>
            {/* <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-6 items-start"> */}
            <Carousel
                opts={{
                    loop: true,
                    slidesToScroll: slidesToScroll

                }}
                className=""
                setApi={setApi}>

                <CarouselContent>

                    {CardsData.map((card, index) => (
                        <CarouselItem className="xl:basis-1/4 md:basis-1/2  md:pl-6" key={index}>
                            <ThematiqueCard item={card} />
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

export default Thematique