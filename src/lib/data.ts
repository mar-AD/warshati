import pedagogy_1 from "/public/images/pedagogy_1.png";
import pedagogy_2 from "/public/images/pedagogy_2.png";
import pedagogy_3 from "/public/images/pedagogy_3.png";
import pedagogy_4 from "/public/images/pedagogy_4.png";
import image_1 from "/public/images/niveaux/award_1.png";
import num_1 from "/public/images/niveaux/1.png";
import image_2 from "/public/images/niveaux/award_2.png";
import num_2 from "/public/images/niveaux/2.png";
import image_3 from "/public/images/niveaux/award_3.png";
import num_3 from "/public/images/niveaux/3.png";
import image_4 from "/public/images/niveaux/award_4.png";
import num_4 from "/public/images/niveaux/4.png";
import image_5 from "/public/images/niveaux/award_5.png";
import num_5 from "/public/images/niveaux/5.png";
import image_parcours_1 from "/public/images/parcours/parcours_1.png";
import image_parcours_2 from "/public/images/parcours/parcours_2.png";
import image_parcours_3 from "/public/images/parcours/parcours_3.png";
import image_parcours_4 from "/public/images/parcours/parcours_4.png";
import image_thematique_1 from "/public/images/thematique/image_1.png";
import image_thematique_2 from "/public/images/thematique/image_2.png";
import image_thematique_3 from "/public/images/thematique/image_3.png";
import image_thematique_4 from "/public/images/thematique/image_4.png";
import image_thematique_5 from "/public/images/thematique/image_5.png";
import image_thematique_6 from "/public/images/thematique/image_6.png";
import image_thematique_7 from "/public/images/thematique/image_7.png";
import image_thematique_8 from "/public/images/thematique/image_8.png";
import image_thematique_9 from "/public/images/thematique/image_9.png";
import image_thematique_10 from "/public/images/thematique/image_10.png";
import image_thematique_11 from "/public/images/thematique/image_11.png";
import image_thematique_12 from "/public/images/thematique/image_12.png";
import image_thematique_13 from "/public/images/thematique/image_13.png";
import image_thematique_14 from "/public/images/thematique/image_14.png";
import image_thematique_15 from "/public/images/thematique/image_15.png";
import image_thematique_16 from "/public/images/thematique/image_16.png";
import {
  Atom,
  BrainCircuit,
  Cpu,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PenTool,
  PersonStanding,
  PhoneCallIcon,
  SquareCode,
  Twitter,
  Youtube,
} from "lucide-react";
import {
  ageType,
  ContactType,
  CurriculaType,
  FAQType,
  IntScolaireType,
  LanguageType,
  NavType,
  niveauxType,
  ParcoursType,
  SocialType,
  ThematiqueType,
} from "./types";
export const socials: SocialType[] = [
  {
    Icon: Facebook,
    link: "/",
  },
  {
    Icon: Instagram,
    link: "/",
  },
  {
    Icon: Linkedin,
    link: "/",
  },
  {
    Icon: Twitter,
    link: "/",
  },
  {
    Icon: Youtube,
    link: "/",
  },
];

export const contacts: ContactType[] = [
  {
    Icon: PhoneCallIcon,
    value: "+212 5 55 55 55 55",
  },
  {
    Icon: Mail,
    value: "warshaticg@gmail.com",
  },
  {
    Icon: MapPin,
    value: "56 BOULEVARD MOULAY YOUSSEF 3 ETG APPT 14 – CASABLANCA.",
  },
];
export const DigitalLabData: string[] = [
  "Des laboratoires digitaux",
  "Des maquettes d’apprentissage interactives",
  "De coding",
  "Des prototypes de projets innovants",
];

export const experienceData: string[] = [
  "La curiosité des enfants",
  "Développer leurs compétences pratiques",
  "Les préparer à exceller dans le monde de demain",
  "Tout en rassurant les parents sur leur avenir",
];

export const frameworkData: string[] = [
  "Apprentissage centré sur l’enfant",
  "Apprentissage personnalisé, progressif et adapté",
  "Apprentissage orienté Problème/Solution",
  "Apprentissage axé sur projet et cas réel",
  "Réinventer l’apprentissage",
  "Stimuler la créativité",
  "Préparer à exceller dans le monde de demain",
];

export const FAQData: FAQType[] = [
  {
    title: "C’est quoi Warshati ?",
    content:
      "Warshati est une plateforme éducative intelligente marocaine décidée à l’apprentissage des programmes STEMA (Science, Technologies, Ingénierie, Arts et Mathématiques) et de l’Intelligence Intellectuelle. Elle offre une approche immersive et interactive, visant à préparer les étudiants aux défis du 2e siècle en intégrant des compétences essentielles telles que la pensée critique, la collaboration, la créativité et la résolution de problèmes.",
  },
  {
    title: "Pourquoi choisir Warshati ?",
    content:
      "Warshati se distingue par son approche innovante et sa capacité à personneliser l’apprentissage. Grâce à une méthodologie basée sur l’apprentissage par projet et la réflexion active, elle favorise le développement des compétences cognitives et socio-émotionnelles des étudiants. En outre, Warshati propose une plateforme interactive et accessible, adaptée aux besoins du système éducatif marocain et international.",
  },
  {
    title: "Comment se déroule Warshati ?",
    content:
      "Warshati se déroule sous forme de programmes structurés et de parcours d’apprentissage qui combinent l’intérêt et pratique. Les étudiants travaillent au sein d’autres projets corrects dans des laboratoires thématiques (STEMA, M, IoT, etc.) et utilisent des outils numériques pour développer des compétences techniques et humaines. L’enseignement est structuré selon la méthode « 100, we do, you do », favorisant l’apprentissage collaboratif et l’autonomie.",
  },
  {
    title: "Qui délivre Warshati ?",
    content:
      "Warshati est délivré par une équipe de formations spécialisées en pédagogie et en systèmes éducatifs, accompagnée de personnes accadémières et industrielles pour assurer la qualité et la pertinence des programmes proposés.",
  },
  {
    title: "Pour qui est destiné Warshati ?",
    content:
      "Warshati s’adresse à tous les étudiants, du primaire au secondaire, ainsi qu’aux enseignants désireux de se perfectionner dans les domaines des sciences, de la technologie, de l’ingénierie, des arts et des mathématiques. Il est aussi conçu pour les établissements éducatifs qui souhaitent intégrer les compétences du 3e siècle dans leurs programmes.",
  },
  {
    title: "Où se déroule Warshati ?",
    content:
      "Warshati se déploie à la fois en ligne et dans des ateliers physiques appelés « Smart Workshops ». Ces ateliers se trouvent dans différentes régions du Maroc et sont également accessibles à distance via la plateforme numérique.",
  },
  {
    title: "Quand puis-je commander Warshati ?",
    content:
      "Vous pouvez commander Warshati à tout moment sur notre plateforme en ligne. Les programmes sont disponibles tout au long de l’année, et vous pouvez commencer dès que vous êtes prêt à vous inscrire.",
  },
  {
    title: "Quel est l’âge ciblé pour Warshati ?",
    content:
      "Warshati est destiné aux enfants et jeunes adultes, principalement de 6 à 18 ans, mais il propose également des formations pour les enseignants et les professionnels désireux de se perfectionner dans les domaines du STEMA et de l’IA.",
  },
  {
    title: "Quels prérequis & niveau",
    content:
      "Le programme Warshati est destiné à tous les étudiants intéressés par les domaines du STEMA et de l’IA, qu’ils soient débutantes ou avancés. Il est également conçu pour les éducateurs cherchant à intégrer ces disciplines dans leurs pratiques pédagogiques.",
  },
  {
    title: "Où se déroulent les Smart Workshops ?",
    content:
      " Les Smart Workshops de Warshati sont organisés dans divers centres de formation, ecoles,etc, ainsi qu'en ligne pour permettre un accès flexible. Chaque atelier est conçu pour offrir une expérience pratique et interactive, adaptée aux besoins des participants.",
  },
];

export const links: NavType[] = [
  { label: "R&I", link: "#", selected: true },
  { label: "Blog", link: "#" },
  { label: "Contact", link: "#" },
];

export const languages: LanguageType[] = [
  { code: "FR", name: "Français", flag: "fr" },
  { code: "AR", name: "العربية", flag: "sa" },
  { code: "EN", name: "English", flag: "gb" },
  { code: "ESP", name: "Español", flag: "es" },
];

export const IntScolaireData: IntScolaireType[] = [
  {
    title: "Accompagnement",
    Icon: GraduationCap,
    description:
      "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
    bgColor: "bg-violet-600/40",
    textColor: "text-violet-900",
  },
  {
    title: "Complémentaire",
    Icon: PersonStanding,
    description:
      "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
    bgColor: "bg-pink-600/40",
    textColor: "text-pink-900",
  },
  {
    title: "Outils",
    Icon: PenTool,
    description:
      "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
    bgColor: "bg-slate-600/40",
    textColor: "text-slate-900",
  },
];

export const CurriculaData: CurriculaType[] = [
  {
    title: "STEAM",
    description:
      "Projets pratiques axés sur les défis contemporains, mettant en avant la collaboration, la gestion de projet et l’innovation.Exploration des opportunités dans les domaines STEAM .",
    Icon: Atom,
  },
  {
    title: "AI & ML",
    description:
      "Développement des compétences avancées , avec une introduction aux technologies émergentes.Participation à des projets complexes encourageant l’analyse et la pensée critique.",
    Icon: BrainCircuit,
  },
  {
    title: "Computational Thing",
    description:
      "Renforcement des compétences en littératie et numératie grâce à des approches interactives. Exploration des notions scientifiques et technologiques à travers des projets collaboratifs favorisant.",
    Icon: Cpu,
  },
  {
    title: "Coding  Text & Block",
    description:
      "Projets pratiques axés sur les défis contemporains, mettant en avant la collaboration, la gestion de projet et l’innovation. Exploration des opportunités dans les domaines STEAM et de l’intelligence artificielle.",
    Icon: SquareCode,
  },
];

export const niveauxData: niveauxType[] = [
  {
    title: "Découverte",
    description: "Exploration du matériel et concepts technologiques",
    image: image_1,
    num: num_1,
  },
  {
    title: "Initiation",
    description:
      "Introduction aux Principes de Base et Pratiques Fondamentales",
    image: image_2,
    num: num_2,
  },
  {
    title: "Développement",
    description: "Approfondissement des Compétences et Techniques Avancées",
    image: image_3,
    num: num_3,
  },
  {
    title: "Application",
    description:
      "Mise en Pratique des Connaissances à travers des Projets Réels",
    image: image_4,
    num: num_4,
  },
  {
    title: "Maîtrise",
    description: "Perfectionnement et Innovation dans des Contextes Complexes",
    image: image_5,
    num: num_5,
  },
];

export const ParcoursData: ParcoursType[] = [
  {
    title: "Explorateur",
    description: "Découvrir et S'épanouir",
    image: image_parcours_1,
  },
  {
    title: "Créateur",
    description: "Imaginer et Innover",
    image: image_parcours_2,
  },
  {
    title: "Novateur",
    description: "Inventer et Transformer",
    image: image_parcours_3,
  },
  {
    title: "Junior",
    description: "Maîtriser et Exceller",
    image: image_parcours_4,
  },
];

export const PedagogyData: ParcoursType[] = [
  {
    title: "Découverte Ludique",
    description:
      "Entre dans un monde d’amusement et de découverte ! Avec nos jeux et activités, apprendre les sciences devient un plaisir",
    image: pedagogy_1,
  },
  {
    title: "Apprentissage Progressif",
    description:
      "Pas à pas, découvre les bases des sciences et technologies : coder, construire, comprendre le monde... tout devient facile avec Warshati !",
    image: pedagogy_2,
  },
  {
    title: "Créativité et Exploration",
    description:
      "Libère ton imagination ! Crée des inventions uniques, explore de nouvelles idées et deviens un innovateur en herbe.",
    image: pedagogy_3,
  },
  {
    title: "Collaboration et Partage",
    description:
      "Apprends avec tes amis et partage tes idées ! Chez Warshati, le travail en équipe est la clé pour réaliser de grandes choses.",
    image: pedagogy_4,
  },
];

export const ThematiqueData: ThematiqueType[] = [
  {
    title: "Voiture intelligente",
    description:
      "Une voiture qui se conduit toute seule, te parle et aide à éviter les accidents pour voyager en toute sécurité !",
    image: image_thematique_1, // Replace with actual image URL
    imageBgColor: "#FFD700", // Replace with actual background color
  },
  {
    title: "Ville intelligente",
    description:
      "L’enfant explore les tendances dû la technologie et leurs impacts sur sa ville. Par exemple, il découvre et programme sa première voiture autonome et contrôle les feux de signalisation.",
    image: image_thematique_2, // Replace with actual image URL
    imageBgColor: "#87CEEB", // Replace with actual background color
  },
  {
    title: "Maison intelligente",
    description:
      "L’enfant découvre les technologies de nouvelle génération qui sont installées dans la maison pour la rendre plus smart et plus sécurisées.",
    image: image_thematique_3, // Replace with actual image URL
    imageBgColor: "#90EE90", // Replace with actual background color
  },
  {
    title: "Usine intelligente",
    description:
      "L’enfant découvre les différentes utilisations de la robotique dans l’industrie en l’occurrence la chaîne automatique, le scanner, le bras qui déplace les objets, le chariot élévateurs, etc.",
    image: image_thematique_4, // Replace with actual image URL
    imageBgColor: "#FFA07A", // Replace with actual background color
  },
  {
    title: "Forêts connectées",
    description:
      "Apprendre à utiliser des capteurs pour surveiller les arbres et protéger la forêt.",
    image: image_thematique_5, // Replace with actual image URL
    imageBgColor: "#228B22", // Replace with actual background color
  },
  {
    title: "Santé connectée",
    description:
      "Découvrir comment la technologie peut aider à surveiller la santé.",
    image: image_thematique_6, // Replace with actual image URL
    imageBgColor: "#FF6347", // Replace with actual background color
  },
  {
    title: "Art numérique",
    description:
      "Créer des dessins et des objets à l'aide d'ordinateurs et d'imprimantes 3D.",
    image: image_thematique_7, // Replace with actual image URL
    imageBgColor: "#9370DB", // Replace with actual background color
  },
  {
    title: "Espace et astronomie",
    description:
      "Explorer les planètes et l'espace en construisant des maquettes et des robots.",
    image: image_thematique_8, // Replace with actual image URL
    imageBgColor: "#000080", // Replace with actual background color
  },
  {
    title: "Drones intelligents",
    description:
      "Apprendre comment les drones volent et prennent des photos pour surveiller les cultures et les forêts.",
    image: image_thematique_9, // Replace with actual image URL
    imageBgColor: "#1E90FF", // Replace with actual background color
  },
  {
    title: "Énergies renouvelables",
    description:
      "Construire des modèles qui fonctionnent avec l'énergie solaire et éolienne.",
    image: image_thematique_10, // Replace with actual image URL
    imageBgColor: "#FFD700", // Replace with actual background color
  },
  {
    title: "Climat et météo",
    description:
      "Comprendre le temps qu'il fait et créer des outils pour mesurer la pluie, le vent et le soleil.",
    image: image_thematique_11, // Replace with actual image URL
    imageBgColor: "#00CED1", // Replace with actual background color
  },
  {
    title: "Robots amusants",
    description:
      "Construire des petits robots qui bougent, parlent ou suivent des lignes.",
    image: image_thematique_12, // Replace with actual image URL
    imageBgColor: "#FF69B4", // Replace with actual background color
  },
  {
    title: "Jeux éducatifs",
    description: "Créer des jeux interactifs pour apprendre tout en s'amusant.",
    image: image_thematique_13, // Replace with actual image URL
    imageBgColor: "#FF4500", // Replace with actual background color
  },
  {
    title: "Agriculture intelligente",
    description:
      "Apprendre à utiliser des capteurs pour surveiller les plantes et améliorer les récoltes.",
    image: image_thematique_14, // Replace with actual image URL
    imageBgColor: "#8B4513", // Replace with actual background color
  },
  {
    title: "Oceans et protection",
    description:
      "Découvrir les secrets des océans et comment les protéger avec des outils simples.",
    image: image_thematique_15, // Replace with actual image URL
    imageBgColor: "#0000FF", // Replace with actual background color
  },
  {
    title: "Articulation artificielle",
    description:
      "Découvre comment la technologie aide à créer des bras, jambes ou autres parties du corps qui bougent, un peu comme des robots, pour aider les personnes à se déplacer.",
    image: image_thematique_16, // Replace with actual image URL
    imageBgColor: "#A9A9A9", // Replace with actual background color
  },
];

export const ageGroups:ageType[] = [
  {
    ageRange: "6-8 ans",
    description: "Premiers apprentissages fondamentaux",
    image: "/images/image_",
  },
  {
    ageRange: "9-11 ans",
    description: "Consolidation et exploration",
    image: "/images/image-",
  },
  {
    ageRange: "12-14 ans",
    description: "Développement de la pensée critique",
    image: "/images/image-",
  },
  {
    ageRange: "15-18 ans",
    description: "Spécialisation et autonomisation",
    image: "/images/image-",
  },
];
