import FAQCard from "./FAQCard"

const FAQ = () => {
    const data = [
        {
            "title": "C’est quoi Warshati ?",
            "content": "Warshati est une plateforme éducative intelligente marocaine décidée à l’apprentissage des programmes STEMA (Science, Technologies, Ingénierie, Arts et Mathématiques) et de l’Intelligence Intellectuelle. Elle offre une approche immersive et interactive, visant à préparer les étudiants aux défis du 2e siècle en intégrant des compétences essentielles telles que la pensée critique, la collaboration, la créativité et la résolution de problèmes."
        },
        {
            "title": "Pourquoi choisir Warshati ?",
            "content": "Warshati se distingue par son approche innovante et sa capacité à personneliser l’apprentissage. Grâce à une méthodologie basée sur l’apprentissage par projet et la réflexion active, elle favorise le développement des compétences cognitives et socio-émotionnelles des étudiants. En outre, Warshati propose une plateforme interactive et accessible, adaptée aux besoins du système éducatif marocain et international."
        },
        {
            "title": "Comment se déroule Warshati ?",
            "content": "Warshati se déroule sous forme de programmes structurés et de parcours d’apprentissage qui combinent l’intérêt et pratique. Les étudiants travaillent au sein d’autres projets corrects dans des laboratoires thématiques (STEMA, M, IoT, etc.) et utilisent des outils numériques pour développer des compétences techniques et humaines. L’enseignement est structuré selon la méthode « 100, we do, you do », favorisant l’apprentissage collaboratif et l’autonomie."
        },
        {
            "title": "Qui délivre Warshati ?",
            "content": "Warshati est délivré par une équipe de formations spécialisées en pédagogie et en systèmes éducatifs, accompagnée de personnes accadémières et industrielles pour assurer la qualité et la pertinence des programmes proposés."
        },
        {
            "title": "Pour qui est destiné Warshati ?",
            "content": "Warshati s’adresse à tous les étudiants, du primaire au secondaire, ainsi qu’aux enseignants désireux de se perfectionner dans les domaines des sciences, de la technologie, de l’ingénierie, des arts et des mathématiques. Il est aussi conçu pour les établissements éducatifs qui souhaitent intégrer les compétences du 3e siècle dans leurs programmes."
        },
        {
            "title": "Où se déroule Warshati ?",
            "content": "Warshati se déploie à la fois en ligne et dans des ateliers physiques appelés « Smart Workshops ». Ces ateliers se trouvent dans différentes régions du Maroc et sont également accessibles à distance via la plateforme numérique."
        },
        {
            "title": "Quand puis-je commander Warshati ?",
            "content": "Vous pouvez commander Warshati à tout moment sur notre plateforme en ligne. Les programmes sont disponibles tout au long de l’année, et vous pouvez commencer dès que vous êtes prêt à vous inscrire."
        },
        {
            "title": "Quel est l’âge ciblé pour Warshati ?",
            "content": "Warshati est destiné aux enfants et jeunes adultes, principalement de 6 à 18 ans, mais il propose également des formations pour les enseignants et les professionnels désireux de se perfectionner dans les domaines du STEMA et de l’IA."
        },
        {
            "title": "Quels prérequis & niveau",
            "content": "Le programme Warshati est destiné à tous les étudiants intéressés par les domaines du STEMA et de l’IA, qu’ils soient débutantes ou avancés. Il est également conçu pour les éducateurs cherchant à intégrer ces disciplines dans leurs pratiques pédagogiques."
        },
        {
            "title": "Où se déroulent les Smart Workshops ?",
            "content": " Les Smart Workshops de Warshati sont organisés dans divers centres de formation, ecoles,etc, ainsi qu'en ligne pour permettre un accès flexible. Chaque atelier est conçu pour offrir une expérience pratique et interactive, adaptée aux besoins des participants."
        }
    ]
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <h1 className="font-bold lg:text-[82px] md:text-4xl text-2xl text-center">Questions fréquemment posées</h1>
            <div className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Sont les questions les plus fréquentes mais n’hésitez pas à nous contactez pour en savoir plus.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 items-start">
                {data.map((faq, index) => (
                    <FAQCard key={index} faq={faq} index={index}/>
                ))}
            </div>
        </div>
    )
}

export default FAQ