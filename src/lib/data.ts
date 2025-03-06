import testimonials_1 from "/public/images/IntegrationScolaire/testimonials/testimonials-1.png";
import testimonials_2 from "/public/images/IntegrationScolaire/testimonials/testimonials-2.png";
import testimonials_3 from "/public/images/IntegrationScolaire/testimonials/testimonials-3.png";
import testimonials_4 from "/public/images/IntegrationScolaire/testimonials/testimonials-4.png";
import contribution_1 from "/public/images/R&I/contributions/contribution_1.png";
import contribution_2 from "/public/images/R&I/contributions/contribution_2.png";
import contribution_3 from "/public/images/R&I/contributions/contribution_3.png";
import collaboration_1 from "/public/images/R&I/collaboration/collaboration_1.png";
import collaboration_2 from "/public/images/R&I/collaboration/collaboration_2.png";
import projects_1 from "/public/images/R&I/projects/projects_1.png";
import projects_2 from "/public/images/R&I/projects/projects_2.png";
import projects_3 from "/public/images/R&I/projects/projects_3.png";
import projects_4 from "/public/images/R&I/projects/projects_4.png";
import pedagogy_1 from "/public/images/Home/pedagogy/pedagogy_1.png";
import pedagogy_2 from "/public/images/Home/pedagogy/pedagogy_2.png";
import pedagogy_3 from "/public/images/Home/pedagogy/pedagogy_3.png";
import pedagogy_4 from "/public/images/Home/pedagogy/pedagogy_4.png";
import image_1 from "/public/images/Home/niveaux/award_1.png";
import num_1 from "/public/images/Home/niveaux/1.png";
import image_2 from "/public/images/Home/niveaux/award_2.png";
import num_2 from "/public/images/Home/niveaux/2.png";
import image_3 from "/public/images/Home/niveaux/award_3.png";
import num_3 from "/public/images/Home/niveaux/3.png";
import image_4 from "/public/images/Home/niveaux/award_4.png";
import num_4 from "/public/images/Home/niveaux/4.png";
import image_5 from "/public/images/Home/niveaux/award_5.png";
import num_5 from "/public/images/Home/niveaux/5.png";
import image_parcours_1 from "/public/images/Home/parcours/parcours_1.png";
import image_parcours_2 from "/public/images/Home/parcours/parcours_2.png";
import image_parcours_3 from "/public/images/Home/parcours/parcours_3.png";
import image_parcours_4 from "/public/images/Home/parcours/parcours_4.png";
import image_thematique_1 from "/public/images/Home/thematique/image_1.png";
import image_thematique_2 from "/public/images/Home/thematique/image_2.png";
import image_thematique_3 from "/public/images/Home/thematique/image_3.png";
import image_thematique_4 from "/public/images/Home/thematique/image_4.png";
import image_thematique_5 from "/public/images/Home/thematique/image_5.png";
import image_thematique_6 from "/public/images/Home/thematique/image_6.png";
import image_thematique_7 from "/public/images/Home/thematique/image_7.png";
import image_thematique_8 from "/public/images/Home/thematique/image_8.png";
import image_thematique_9 from "/public/images/Home/thematique/image_9.png";
import image_thematique_10 from "/public/images/Home/thematique/image_10.png";
import image_thematique_11 from "/public/images/Home/thematique/image_11.png";
import image_thematique_12 from "/public/images/Home/thematique/image_12.png";
import image_thematique_13 from "/public/images/Home/thematique/image_13.png";
import image_thematique_14 from "/public/images/Home/thematique/image_14.png";
import image_thematique_15 from "/public/images/Home/thematique/image_15.png";
import image_thematique_16 from "/public/images/Home/thematique/image_16.png";
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
  Youtube,
} from "lucide-react";
import {
  ageType,
  articleType,
  ContactType,
  CurriculaType,
  FAQType,
  IntScolaireType,
  LanguageType,
  NavType,
  niveauxType,
  ParcoursType,
  PrioritairesType,
  QuestionType,
  SocialType,
  TestimonialsType,
  ThematiqueType,
} from "./types";
import { FaXTwitter } from "react-icons/fa6";
export const socials: SocialType[] = [
  {
    Icon: Facebook,
    link: "/",
    followers: 600,
  },
  {
    Icon: Instagram,
    link: "/",
    followers: 469,
  },
  {
    Icon: Linkedin,
    link: "/",
    followers: 300,
  },
  {
    Icon: FaXTwitter,
    link: "/",
    followers: 567,
  },
  {
    Icon: Youtube,
    link: "/",
    followers: 600,
  },
];

export const contacts: ContactType[] = [
  {
    Icon: PhoneCallIcon,
    value: "+212675654343",
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
    delay: 0.2,
  },
  {
    title: "Pourquoi choisir Warshati ?",
    content:
      "Warshati se distingue par son approche innovante et sa capacité à personneliser l’apprentissage. Grâce à une méthodologie basée sur l’apprentissage par projet et la réflexion active, elle favorise le développement des compétences cognitives et socio-émotionnelles des étudiants. En outre, Warshati propose une plateforme interactive et accessible, adaptée aux besoins du système éducatif marocain et international.",
    delay: 0.3,
  },
  {
    title: "Comment se déroule Warshati ?",
    content:
      "Warshati se déroule sous forme de programmes structurés et de parcours d’apprentissage qui combinent l’intérêt et pratique. Les étudiants travaillent au sein d’autres projets corrects dans des laboratoires thématiques (STEMA, M, IoT, etc.) et utilisent des outils numériques pour développer des compétences techniques et humaines. L’enseignement est structuré selon la méthode « 100, we do, you do », favorisant l’apprentissage collaboratif et l’autonomie.",
    delay: 0.4,
  },
  {
    title: "Qui délivre Warshati ?",
    content:
      "Warshati est délivré par une équipe de formations spécialisées en pédagogie et en systèmes éducatifs, accompagnée de personnes accadémières et industrielles pour assurer la qualité et la pertinence des programmes proposés.",
    delay: 0.5,
  },
  {
    title: "Pour qui est destiné Warshati ?",
    content:
      "Warshati s’adresse à tous les étudiants, du primaire au secondaire, ainsi qu’aux enseignants désireux de se perfectionner dans les domaines des sciences, de la technologie, de l’ingénierie, des arts et des mathématiques. Il est aussi conçu pour les établissements éducatifs qui souhaitent intégrer les compétences du 3e siècle dans leurs programmes.",
    delay: 0.6,
  },
  {
    title: "Où se déroule Warshati ?",
    content:
      "Warshati se déploie à la fois en ligne et dans des ateliers physiques appelés « Smart Workshops ». Ces ateliers se trouvent dans différentes régions du Maroc et sont également accessibles à distance via la plateforme numérique.",
    delay: 0.7,
  },
  {
    title: "Quand puis-je commander Warshati ?",
    content:
      "Vous pouvez commander Warshati à tout moment sur notre plateforme en ligne. Les programmes sont disponibles tout au long de l’année, et vous pouvez commencer dès que vous êtes prêt à vous inscrire.",
    delay: 0.8,
  },
  {
    title: "Quel est l’âge ciblé pour Warshati ?",
    content:
      "Warshati est destiné aux enfants et jeunes adultes, principalement de 6 à 18 ans, mais il propose également des formations pour les enseignants et les professionnels désireux de se perfectionner dans les domaines du STEMA et de l’IA.",
    delay: 0.9,
  },
  {
    title: "Quels prérequis & niveau",
    content:
      "Le programme Warshati est destiné à tous les étudiants intéressés par les domaines du STEMA et de l’IA, qu’ils soient débutantes ou avancés. Il est également conçu pour les éducateurs cherchant à intégrer ces disciplines dans leurs pratiques pédagogiques.",
    delay: 1,
  },
  {
    title: "Où se déroulent les Smart Workshops ?",
    content:
      " Les Smart Workshops de Warshati sont organisés dans divers centres de formation, ecoles,etc, ainsi qu'en ligne pour permettre un accès flexible. Chaque atelier est conçu pour offrir une expérience pratique et interactive, adaptée aux besoins des participants.",
    delay: 1.2,
  },
];

export const links: NavType[] = [
  { label: "R&I", link: "/R&I" },
  { label: "Blog", link: "/Blog" },
  { label: "Contact", link: "/Contact" },
];

export const languages: LanguageType[] = [
  { code: "FR", name: "Français", flag: "fr" },
  { code: "AR", name: "العربية", flag: "ma" },
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
    delay: 0.2,
  },
  {
    title: "Complémentaire",
    Icon: PersonStanding,
    description:
      "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
    bgColor: "bg-pink-600/40",
    textColor: "text-pink-900",
    delay: 0.3,
  },
  {
    title: "Outils",
    Icon: PenTool,
    description:
      "Formation de vos Formateurs et Accompagnement Tout  au Long de L’implèmentation",
    bgColor: "bg-slate-600/40",
    textColor: "text-slate-900",
    delay: 0.4,
  },
];

export const CurriculaData: CurriculaType[] = [
  {
    title: "STEAM",
    description:
      "Projets pratiques axés sur les défis contemporains, mettant en avant la collaboration, la gestion de projet et l’innovation.Exploration des opportunités dans les domaines STEAM .",
    Icon: Atom,
    delay: 0.2,
  },
  {
    title: "AI & ML",
    description:
      "Développement des compétences avancées , avec une introduction aux technologies émergentes.Participation à des projets complexes encourageant l’analyse et la pensée critique.",
    Icon: BrainCircuit,
    delay: 0.3,
  },
  {
    title: "Computational Thing",
    description:
      "Renforcement des compétences en littératie et numératie grâce à des approches interactives. Exploration des notions scientifiques et technologiques à travers des projets collaboratifs favorisant.",
    Icon: Cpu,
    delay: 0.4,
  },
  {
    title: "Coding  Text & Block",
    description:
      "Projets pratiques axés sur les défis contemporains, mettant en avant la collaboration, la gestion de projet et l’innovation. Exploration des opportunités dans les domaines STEAM et de l’intelligence artificielle.",
    Icon: SquareCode,
    delay: 0.5,
  },
];

export const niveauxData: niveauxType[] = [
  {
    title: "Découverte",
    description: "Exploration du matériel et concepts technologiques",
    image: image_1,
    num: num_1,
    bgColor: "hover:bg-[#EA9765]/30",
    borderColor: "hover:border-[#EA9765]",
    delay: 0.2,
  },
  {
    title: "Initiation",
    description:
      "Introduction aux Principes de Base et Pratiques Fondamentales",
    image: image_2,
    num: num_2,
    bgColor: "hover:bg-[#DDDEE2]/30",
    borderColor: "hover:border-[#DDDEE2]",
    delay: 0.3,
  },
  {
    title: "Développement",
    description: "Approfondissement des Compétences et Techniques Avancées",
    image: image_3,
    num: num_3,
    bgColor: "hover:bg-[#FFE09E]/30",
    borderColor: "hover:border-[#FFE09E]",
    delay: 0.4,
  },
  {
    title: "Application",
    description:
      "Mise en Pratique des Connaissances à travers des Projets Réels",
    image: image_4,
    num: num_4,
    bgColor: "hover:bg-[#A678E3]/30",
    borderColor: "hover:border-[#A678E3]",
    delay: 0.5,
  },
  {
    title: "Maîtrise",
    description: "Perfectionnement et Innovation dans des Contextes Complexes",
    image: image_5,
    num: num_5,
    bgColor: "hover:bg-[#3DB53F]/30",
    borderColor: "hover:border-[#3DB53F]",
    delay: 0.5,
  },
];

export const ParcoursData: ParcoursType[] = [
  {
    title: "Explorateur",
    description: "Découvrir et S'épanouir",
    image: image_parcours_1,
    delay: 0.2,
  },
  {
    title: "Créateur",
    description: "Imaginer et Innover",
    image: image_parcours_2,
    delay: 0.3,
  },
  {
    title: "Novateur",
    description: "Inventer et Transformer",
    image: image_parcours_3,
    delay: 0.4,
  },
  {
    title: "Junior",
    description: "Maîtriser et Exceller",
    image: image_parcours_4,
    delay: 0.5,
  },
];

export const PedagogyData: ParcoursType[] = [
  {
    title: "Découverte Ludique",
    description:
      "Entre dans un monde d’amusement et de découverte ! Avec nos jeux et activités, apprendre les sciences devient un plaisir",
    image: pedagogy_1,
    delay: 0.2,
  },
  {
    title: "Apprentissage Progressif",
    description:
      "Pas à pas, découvre les bases des sciences et technologies : coder, construire, comprendre le monde... tout devient facile avec Warshati !",
    image: pedagogy_2,
    delay: 0.3,
  },
  {
    title: "Créativité et Exploration",
    description:
      "Libère ton imagination ! Crée des inventions uniques, explore de nouvelles idées et deviens un innovateur en herbe.",
    image: pedagogy_3,
    delay: 0.4,
  },
  {
    title: "Collaboration et Partage",
    description:
      "Apprends avec tes amis et partage tes idées ! Chez Warshati, le travail en équipe est la clé pour réaliser de grandes choses.",
    image: pedagogy_4,
    delay: 0.5,
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

export const ageGroups: ageType[] = [
  {
    ageRange: "6-8 ans",
    description: "Premiers apprentissages fondamentaux",
    image: "/images/Home/age/image-",
    delay: 0.2,
  },
  {
    ageRange: "9-11 ans",
    description: "Consolidation et exploration",
    image: "/images/Home/age/image-",
    delay: 0.3,
  },
  {
    ageRange: "12-14 ans",
    description: "Développement de la pensée critique",
    image: "/images/Home/age/image-",
    delay: 0.4,
  },
  {
    ageRange: "15-18 ans",
    description: "Spécialisation et autonomisation",
    image: "/images/Home/age/image-",
    delay: 0.5,
  },
];

export const prioritairesData: PrioritairesType[] = [
  {
    title: "Technologies éducatives intelligentes",
    description:
      "Utilisation de l’IA, des algorithmes adaptatifs, et de la réalité augmentée.",
    delay: 0.2,
  },
  {
    title: "STEAM Labs",
    description: "Développement d’outils et de maquettes interactives.",
    delay: 0.3,
  },
  {
    title: "Plateformes collaboratives",
    description:
      "Renforcement des connexions entre élèves, enseignants, et parents.",
    delay: 0.4,
  },
  {
    title: "Approches pédagogiques innovantes",
    description: "Gamification, apprentissage actif et personnalisé.",
    delay: 0.5,
  },
];

export const projectsDomaineData: ParcoursType[] = [
  {
    image: projects_1,
    title: "Technologies éducatives intelligentes",
    description:
      "Un outil qui personnalise les parcours d’apprentissage à l’aide de l’intelligence artificielle.",
    delay: 0.2,
  },
  {
    image: projects_2,
    title: "STEAM Labs",
    description:
      "Modules portables pour enseigner les disciplines STEAM dans les zones rurales.",
    delay: 0.3,
  },
  {
    image: projects_3,
    title: "Plateformes collaboratives",
    description:
      "Analyse des comportements des apprenants pour optimiser les contenus éducatifs.",
    delay: 0.4,
  },
  {
    image: projects_4,
    title: "Approches pédagogiques innovantes",
    description:
      "Conception de kits interactifs pour expérimenter les concepts technologiques.",
    delay: 0.5,
  },
];

export const projectsRecentData: PrioritairesType[] = [
  {
    title: "AI Classroom",
    description:
      "Un outil qui personnalise les parcours d'apprentissage à l'aide de l'intelligence artificielle.",
    delay: 0.2,
  },
  {
    title: "STEAM Everywhere",
    description:
      "Modules portables pour enseigner les disciplines STEAM dans les zones rurales.",
    delay: 0.3,
  },
  {
    title: "Data for Learning",
    description:
      "Analyse des comportements des apprenants pour optimiser les contenus éducatifs.",
    delay: 0.4,
  },
  {
    title: "Approches pédagogiques innovantes",
    description:
      "Conception de kits interactifs pour expérimenter les concepts technologiques.",
    delay: 0.5,
  },
];

export const collaborationData: ParcoursType[] = [
  {
    title: "Collaboration avec des chercheurs",
    description: "Pour explorer les méthodologies éducatives basées sur l’IA.",
    delay: 0.2,
    image: collaboration_1,
  },
  {
    title: "Partenariat local",
    description:
      "Intégration de solutions adaptées au système éducatifmarocain.",
    delay: 0.3,
    image: collaboration_2,
  },
];
export const contributionsData: ParcoursType[] = [
  {
    title: "Article scientifique",
    description:
      "L’impact des Smart Workshops sur la réussite scolaire au Maroc.",
    delay: 0.2,
    image: contribution_1,
  },
  {
    title: "Rapport",
    description:
      " Analyse des besoins technologiques dans les écoles rurales marocaines.",
    delay: 0.3,
    image: contribution_2,
  },
  {
    title: "Projets pilotes",
    description:
      " Résultats des ateliers expérimentaux dans 3 académies pilotes.",
    delay: 0.4,
    image: contribution_3,
  },
];

export const questionsData: QuestionType[] = [
  {
    question: "Pourquoi investir dans l’innovation éducative ?",
    answer:
      "Pour garantir un apprentissage efficace et durable, adapté aux défis de demain.",
  },
  {
    question: "Comment collaborer avec Warshati ?",
    answer: "Contactez notre équipe via le formulaire dédié.",
  },
];

export const testimonialsData: TestimonialsType[] = [
  {
    name: "Mousol L",
    description:
      "Grâce au AI Lab de mon école, j'ai pu créer une application qui déteste les émotions dans des images. Cela m'a inspiré à poursuivre une carrière en science des données.",
    image: testimonials_1,
    delay: 0.2,
  },
  {
    name: "Nadia Radi",
    description:
      "Levem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: testimonials_2,
    delay: 0.3,
  },
  {
    name: "Fatima Zahra M",
    description:
      "Levem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: testimonials_3,
    delay: 0.4,
  },
  {
    name: "Samba Krat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: testimonials_4,
    delay: 0.5,
  },
];

export const articleData:articleType[] = [
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Comment les Smart Workshops transforment l'apprentissage des élèves?",
    date: "August 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Top 5 des projets STEAM à réaliser avec vos étudiants",
    date: "August 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "L'intelligence artificielle dans les classes marocaines : Opportunités et défis",
    date: "August 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Coding pour enfants : Où commencer et pourquoi c'est crucial ?",
    date: "August 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "L'impact des maquettes interactives sur la compréhension scientifique des jeunes apprenants",
    date: "August 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Les compétences du 21e siècle développées grâce aux programmes STEAM",
    date: "Aucher 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Pourquoi intégrer l’IoT dans l’éducation ?",
    date: "Aujourd’hui, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Gamification dans l’éducation : Un levier puissant pour l’engagement",
    date: "Aujourd’hui, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "STEAM pour l’inclusion : Rendre la technologie accessible à tous",
    date: "Aujourd’hui, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Le rôle des maquettes dans l’enseignement des concepts d’ingénierie",
    date: "August 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Intelligence artificielle et créativité : Une alliance inattendue",
    date: "August 20, 2025",
  },
  {
    image: "/images/Blog/articles/article_",
    title: "article",
    name: "Construire une culture STEAM dans les écoles marocaines",
    date: "August 20, 2025",
  },
];
