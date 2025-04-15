import Collaboration from "@/components/R&I/Collaboration/Collaboration"
import Contributions from "@/components/R&I/Contributions/Contributions"
import FAQ from "@/components/R&I/FAQ/FAQ"
import Hero from "@/components/R&I/Hero/Hero"
import Prioritaires from "@/components/R&I/Prioritaires/Prioritaires"
import Project from "@/components/R&I/Projects/Project"

const page = () => {
  return (
    <>
    <Hero />
    <Prioritaires />
    <Project />
    <Collaboration />
    <Contributions />
    <FAQ />
    </>
  )
}

export default page