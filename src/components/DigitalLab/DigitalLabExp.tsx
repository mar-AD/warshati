import Image from "next/image"
import Checkbox from "/public/images/Checkbox.png"
import image_8 from "/public/images/image_8.png"
import image_7 from "/public/images/image_7.png"
import { Play } from "lucide-react";
const DigitalLabExp = () => {
    const experienceData = [
        "La curiosité des enfants",
        "Développer leurs compétences pratiques",
        "Les préparer à exceller dans le monde de demain",
        "Tout en rassurant les parents sur leur avenir"
    ];

    const frameworkData = [
        "Apprentissage centré sur l’enfant",
        "Apprentissage personnalisé, progressif et adapté",
        "Apprentissage orienté Problème/Solution",
        "Apprentissage axé sur projet et cas réel",
        "Réinventer l’apprentissage",
        "Stimuler la créativité",
        "Préparer à exceller dans le monde de demain"
    ];
    return (
        <div className="min-h-screen bg-gray-100 py-28 space-y-16">
            <div className="flex max-xl:flex-col lg:justify-around justify-center items-center gap-16 mx-5">

                <div className=" space-y-7">
                    <h1 className="text-2xl font-bold font-Inter">Expérience <span className="text-violet-800">immersive unique, conçue pour éveiller</span></h1>
                    <div className="space-y-9">
                        {experienceData.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 font-Poppins font-medium">
                                <Image className="lg:size-8 size-5" src={Checkbox} alt="" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image  className="xl:w-fit md:w-96 w-fit rounded" src={image_7} alt="" />
                    <Play className="fill-transparent absolute text-white size-max bg-white/60 backdrop-blur-md p-4 cursor-pointer rounded-full" />
                </div>
            </div>
            <div className="flex max-xl:flex-col-reverse lg:justify-around justify-center items-center gap-16 mx-5">

                <div className="flex justify-center items-center">
                    <Image  className="xl:w-fit md:w-96 w-fit rounded" src={image_8} alt="" />
                    <Play className="fill-transparent absolute text-white size-max bg-white/60 backdrop-blur-md p-4 cursor-pointer rounded-full" />
                </div>
                <div className="space-y-7">
                    <h1 className="text-4xl font-bold font-Inter">Framework <span className="text-violet-800">Warshati</span></h1>
                    <div className="space-y-7">
                        {frameworkData.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 font-Poppins font-medium">
                                <Image className="lg:size-8 size-5" src={Checkbox} alt="" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DigitalLabExp