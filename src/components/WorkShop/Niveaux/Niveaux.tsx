import image_1 from '/public/images/niveaux/award_1.png';
import num_1 from '/public/images/niveaux/1.png';
import image_2 from '/public/images/niveaux/award_2.png';
import num_2 from '/public/images/niveaux/2.png';
import image_3 from '/public/images/niveaux/award_3.png';
import num_3 from '/public/images/niveaux/3.png';
import image_4 from '/public/images/niveaux/award_4.png';
import num_4 from '/public/images/niveaux/4.png';
import image_5 from '/public/images/niveaux/award_5.png';
import num_5 from '/public/images/niveaux/5.png';
import NiveauxCard from './NiveauxCard';
const Niveaux = () => {
    const data = [
        {
            title: "Découverte",
            description: "Exploration du matériel et concepts technologiques",
            image: image_1,
            num: num_1
        },
        {
            title: "Initiation",
            description: "Introduction aux Principes de Base et Pratiques Fondamentales",
            image: image_2,
            num: num_2
        },
        {
            title: "Développement",
            description: "Approfondissement des Compétences et Techniques Avancées",
            image: image_3,
            num: num_3
        },
        {
            title: "Application",
            description: "Mise en Pratique des Connaissances à travers des Projets Réels",
            image: image_4,
            num: num_4
        },
        {
            title: "Maîtrise",
            description: "Perfectionnement et Innovation dans des Contextes Complexes",
            image: image_5,
            num: num_5
        }
    ]
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative bg-light-gray">
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Niveaux</h1>
            <div className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Chaque concept est répartis en cinq niveaux pour guider les apprenants dans l&apos;acquisition progressive des connaissances et compétences nécessaires.</p>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-12 place-content-center xl:!mt-40'>

                {
                    data.map((item, index) => (
                        <NiveauxCard index={index} item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Niveaux