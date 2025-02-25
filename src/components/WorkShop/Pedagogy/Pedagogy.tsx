import { PedagogyData } from "@/lib/data"
import PedagogyCard from "./PedagogyCard"

const Pedagogy = () => {

    return (
        <div className="bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Pédagogie</h1>
            <div className="flex justify-center">
                <p className="text-center font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem]">Chez Warshati, nous avons conçu une approche unique pour permettre aux enfants de découvrir les sciences et technologies tout en développant leur créativité et leurs compétences sociales.</p>
            </div>
            <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-6 items-start">
                {PedagogyData.map((card, index) => (
                    <PedagogyCard key={index} item={card} />
                ))}
            </div>
        </div>
    )
}

export default Pedagogy