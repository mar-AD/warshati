import Hero from "@/components/SmartWorkshopsProgram/Hero/Hero"
import InscriptionEtContact from "@/components/SmartWorkshopsProgram/InscriptionEtContact/InscriptionEtContact"
import Presentation from "@/components/SmartWorkshopsProgram/Presentation/Presentation"
import Program from "@/components/SmartWorkshopsProgram/Program/Program"
import QFP from "@/components/SmartWorkshopsProgram/QFP/QFP"
import Temoignages from "@/components/SmartWorkshopsProgram/Témoignages/Témoignages"


const page = () => {
    return (
        <>
            <Hero />
            <Presentation />
            <Program/>
            <Temoignages/>
            <InscriptionEtContact/>
            <QFP/>
        </>
    )
}

export default page