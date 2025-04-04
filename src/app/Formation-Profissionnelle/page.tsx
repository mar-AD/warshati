import Hero from "@/components/FormationProfissionnelle/Hero/Hero"
import InscriptionEtContact from "@/components/FormationProfissionnelle/InscriptionEtContact/InscriptionEtContact"
import Presentation from "@/components/FormationProfissionnelle/Presentation/Presentation"
import Program from "@/components/FormationProfissionnelle/Program/Program"
import QFP from "@/components/FormationProfissionnelle/QFP/QFP"
import Temoignages from "@/components/FormationProfissionnelle/Témoignages/Témoignages"

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