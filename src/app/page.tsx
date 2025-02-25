import ContactUs from "@/components/ContactUs/ContactUs"
import DigitalLab from "@/components/DigitalLab/DigitalLab"
import FAQ from "@/components/FAQ/FAQ"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import IntScolaire from "@/components/IntScolaire/IntScolaire"
import Partenariat from "@/components/Partenariat/Partenariat"
import WorkShop from "@/components/WorkShop/WorkShop"

const page = () => {
  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <Header />
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
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default page