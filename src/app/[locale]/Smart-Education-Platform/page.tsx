import ComposantesDuProgramme from "@/components/SmartEducationPlatform/ComposantesDuProgramme/ComposantesDuProgram"
import Hero from "@/components/SmartEducationPlatform/Hero/Hero"
import Labs from "@/components/SmartEducationPlatform/Labs/Labs"
import Lms from "@/components/SmartEducationPlatform/Lms/Lms"
import SmartPedFramework from "@/components/SmartEducationPlatform/SmartPedFramework/SmartPedFramework"
import WarshaMakerKits from "@/components/SmartEducationPlatform/WarshaMakerKits/WarshaMakerKits"

const page = () => {
    return (
        <>
            <Hero />
            <Lms />
            <Labs />
            <WarshaMakerKits />
            <SmartPedFramework />
            <ComposantesDuProgramme />
        </>
    )
}

export default page