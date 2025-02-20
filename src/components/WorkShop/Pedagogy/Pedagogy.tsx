import PedagogyCard from "./PedagogyCard"
import pedagogy_1 from "/public/images/pedagogy_1.png"
import pedagogy_2 from "/public/images/pedagogy_2.png"
import pedagogy_3 from "/public/images/pedagogy_3.png"
import pedagogy_4 from "/public/images/pedagogy_4.png"
const Pedagogy = () => {
    const CardsData = [
        {
            title: "Découverte Ludique",
            description: "Entre dans un monde d’amusement et de découverte ! Avec nos jeux et activités, apprendre les sciences devient un plaisir",
            image: pedagogy_1
        },
        {
            title: "Apprentissage Progressif",
            description: "Pas à pas, découvre les bases des sciences et technologies : coder, construire, comprendre le monde... tout devient facile avec Warshati !",
            image: pedagogy_2
        },
        {
            title: "Créativité et Exploration",
            description: "Libère ton imagination ! Crée des inventions uniques, explore de nouvelles idées et deviens un innovateur en herbe.",
            image: pedagogy_3
        },
        {
            title: "Collaboration et Partage",
            description: "Apprends avec tes amis et partage tes idées ! Chez Warshati, le travail en équipe est la clé pour réaliser de grandes choses.",
            image: pedagogy_4
        }
    ]
    return (
        <div className="bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Pédagogie</h1>
            <div className="flex justify-center">
                <p className="text-center font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem]">Chez Warshati, nous avons conçu une approche unique pour permettre aux enfants de découvrir les sciences et technologies tout en développant leur créativité et leurs compétences sociales.</p>
            </div>
            <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-6 items-start">
                {CardsData.map((card, index) => (
                    <PedagogyCard key={index} item={card} />
                ))}
            </div>
        </div>
    )
}

export default Pedagogy