import { ParcoursType } from "@/lib/types"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const ContributionCard = ({contribution}:{contribution:ParcoursType}) => {
  return (
    <div className="relative flex justify-center group">
        <button className="absolute top-6 right-6 bg-violet-700 p-3 rounded-full text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
            <ArrowRight />
        </button>
        <Image src={contribution.image} alt="" />
        <div className="absolute bottom-5 group-hover:bg-violet-600 text-white p-5 mx-2 rounded-xl overflow-hidden justify-self-center">
            <h1 className="font-bold text-[45px]">{contribution.title}</h1>
            <p className="h-0 invisible group-hover:h-10 group-hover:visible duration-200 transition-all">{contribution.description}</p>
        </div>
    </div>
  )
}

export default ContributionCard