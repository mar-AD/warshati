import QFP from "@/components/SmartWorkshopsProject/QFP/QFP"
import Hero from "@/components/SmartWorkshopsProject/Hero/Hero"
import InscriptionEtContact from "@/components/SmartWorkshopsProject/InscriptionEtContact/InscriptionEtContact"
import ConceptDuProgramme from "@/components/SmartWorkshopsProject/ConceptDuProgramme/ConceptDuProgramme"
import ExempleDeProjet from "@/components/SmartWorkshopsProject/ExempleDeProjets/ExempleDeProjets"
import ApprochePedagogique from "@/components/SmartWorkshopsProject/ApprochePedagogique/ApprochePedagogique"
import Temoignages from "@/components/SmartWorkshopsProject/Témoignages/Témoignages"



const page = () => {
    return (
        <>
            <Hero />
            <ConceptDuProgramme />
            <ExempleDeProjet/>
            <ApprochePedagogique/>
            <Temoignages/>
            <InscriptionEtContact/>
            <QFP/>
        </>
    )
}

export default page