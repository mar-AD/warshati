import DigitalLab from "@/components/DigitalLab/DigitalLab"
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"

const page = () => {
  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Warshati Digital Lab */}
      <DigitalLab />
    </div>
  )
}

export default page