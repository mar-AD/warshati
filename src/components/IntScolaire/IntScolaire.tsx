import { cn } from "@/lib/utils"
import { GraduationCap, PenTool, PersonStanding } from "lucide-react"
import IntScolaireCard from "./IntScolaireCard"

const IntScolaire = () => {
    const data = [
        {
            title: "Accompagnement",
            icon: <GraduationCap />,
            description: "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
            bgColor:"bg-violet-600/40",
            textColor:"text-violet-900",
        },
        {
            title: "Complémentaire",
            icon:<PersonStanding />,
            description: "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
            bgColor:"bg-pink-600/40",
            textColor:"text-pink-900",
        },
        {
            title: "Outils",
            icon: <PenTool />,
            description: "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
            bgColor:"bg-slate-600/40",
            textColor:"text-slate-900",
        }
    ]
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <h1 className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">Intégration Scolaire</h1>
            <div className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Méthodiquement structuré pour faciliter une intégration fluide et enrichissante de STEAM & AI dans le programme scolaire.</p>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8 place-content-center lg:!mt-40 mx-10'>
                {
                    data.map((item, index) => (
                        <IntScolaireCard  key={index} item={item} index={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default IntScolaire