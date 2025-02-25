import Image from "next/image"
import circles from "/public/images/circles.png"
import Checkbox from "/public/images/Checkbox.png"
import { ArrowRight, Plus } from "lucide-react"
import DigitalLabCard from "./DigitalLabCard"
import image_4 from "/public/images/image_4.png"
import image_5 from "/public/images/image_5.png"
import image_3 from "/public/images/image_3.png"
import ai_image from "/public/images/ai_image.png"
import arrow_yellow from "/public/images/arrow_yellow.png"
import arrow from "/public/images/arrow.png"
import robot from "/public/images/robot.png"
import bubble from "/public/images/bubble.png"
import DigitalLabExp from "./DigitalLabExp"
import { DigitalLabData } from "@/lib/data"
const DigitalLab = () => {
    return (
        <div className="relative pt-20 overflow-hidden">
            <Image className="absolute -left-20 -z-10 -top-20 w-56" src={circles} alt="" />
            <h1 className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">Warshati Digital Lab</h1>
            <div className="flex max-xl:flex-col-reverse justify-between items-center mt-16 lg:mx-44 lg:gap-40 gap-20">
                {/* Card */}
                <div className="relative flex  justify-center items-center">
                    <Image className="absolute -left-12 -top-14" src={image_4} alt="" />
                    <Image className="absolute -right-10 -top-7" src={image_5} alt="" />
                    <Image className="absolute -right-16" src={arrow_yellow} alt="" />
                    <DigitalLabCard image={ai_image} title="Découvre le monde magique de l'IA" content="Apprends à créer des robots intelligents, des jeux interactifs et des projets amusants grâce à l’intelligence artificielle. Deviens un petit génie de la technologie tout en t’amusant !" />
                </div>
                <div className="font-Poppins font-medium space-y-8 mb-5">
                    <h1 className="font-bold lg:text-[28px] md:text-2xl text-xl">Plateforme <span className="text-violet-700">éducative intégrant</span></h1>
                    <ul>
                        {DigitalLabData.map((item, i) => (
                            <li className="flex gap-x-2 my-7 lg:text-lg" key={i}><Image className="lg:size-8 size-5" src={Checkbox} alt="" />
                                {item}</li>
                        ))}
                    </ul>
                    <div className="flex gap-5">
                        <button className="btn btn-violet">Se Connecter <ArrowRight /></button>
                        <button className="btn btn-violet-outline">Savoir <Plus /></button>
                    </div>
                </div>
            </div>
            <div className="flex max-xl:flex-col items-center mt-16 xl:mx-44 mx-20 xl:translate-x-96 gap-20">
            <Image className="absolute max-xl:hidden bottom-72 -left-72" src={arrow} alt="" />
                {/* Card */}
                <div className="relative flex  justify-center items-center">
                    <Image className="absolute bottom-20 max-xl:hidden -right-32 -rotate-90 z-30" src={arrow} alt="" />
                    <Image className="absolute -right-12 -top-14 -scale-x-100" src={image_4} alt="" />
                    <Image className="absolute -left-10 -scale-x-100 -top-7" src={image_5} alt="" />
                    <DigitalLabCard image={image_3} title="Imagine, crée et joue avec 
STEAM" content=" Construis des robots, invente des gadgets et explore les sciences en t’amusant. Avec STEAM, apprendre devient une aventure incroyable pleine de découvertes !" />
                </div>
                <div className="font-Poppins font-medium space-y-8 relative flex items-start justify-center">
                    <Image src={robot} alt="" />
                    <Image className="lg:absolute -top-10 left-72" src={bubble} alt="" />

                </div>
            </div>
            <DigitalLabExp />
        </div>
    )
}

export default DigitalLab