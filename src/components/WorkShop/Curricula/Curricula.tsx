import { Atom, BrainCircuit, Cpu, Plus, SquareCode } from "lucide-react"
import CurriculaCard from "./CurriculaCard"
import curricula_1 from "/public/images/curricula_1.svg"
import curricula_2 from "/public/images/curricula_2.svg"
import curricula_3 from "/public/images/curricula_3.svg"
import curricula_4 from "/public/images/curricula_4.svg"

const Curricula = () => {
    const CardsData = [
        {
            title: "STEAM",
            description: "Projets pratiques axés sur les défis contemporains, mettant en avant la collaboration, la gestion de projet et l’innovation.Exploration des opportunités dans les domaines STEAM .",
            image: <Atom />
        },
        {
            title: "AI & ML",
            description: "Développement des compétences avancées , avec une introduction aux technologies émergentes.Participation à des projets complexes encourageant l’analyse et la pensée critique.",
            image: <BrainCircuit />
        },
        {
            title: "Computational Thing",
            description: "Renforcement des compétences en littératie et numératie grâce à des approches interactives. Exploration des notions scientifiques et technologiques à travers des projets collaboratifs favorisant.",
            image: <Cpu />
        },
        {
            title: "Coding  Text & Block",
            description: "Projets pratiques axés sur les défis contemporains, mettant en avant la collaboration, la gestion de projet et l’innovation. Exploration des opportunités dans les domaines STEAM et de l’intelligence artificielle.",
            image: <SquareCode />
        }
    ]
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Curricula</h1>
            <div className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Les parcours éducatifs innovants de Warshati, spécialement conçus pour accompagner les élèves de 6 à 18 ans dans leur apprentissage et leur développement.</p>
            </div>
            <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-6 items-start">
                {CardsData.map((card, index) => (
                    <CurriculaCard key={index} item={card} />
                ))}
            <button className="!w-fit btn btn-violet-outline">
                <Plus /> Savoir
            </button>
            </div>
        </div>
    )
}

export default Curricula