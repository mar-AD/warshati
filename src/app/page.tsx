import ContactUs from "@/components/Home/ContactUs/ContactUs"
import DigitalLab from "@/components/Home/DigitalLab/DigitalLab"
import FAQ from "@/components/Home/FAQ/FAQ"
import Hero from "@/components/Home/Hero/Hero"
import IntScolaire from "@/components/Home/IntScolaire/IntScolaire"
import Partenariat from "@/components/Home/Partenariat/Partenariat"
import WorkShop from "@/components/Home/WorkShop/WorkShop"

const page = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />
      {/* Warshati Digital Lab */}
      <DigitalLab />
      {/* Smart Workshops Program */}
      <WorkShop />
      {/* Intégration Scolaire */}
      <IntScolaire />
      {/* Partenariat */}
      <Partenariat />
      {/* FAQ */}
      <FAQ />
      {/* ContactUs */}
      <ContactUs />
    </div>
  )
}

export default page