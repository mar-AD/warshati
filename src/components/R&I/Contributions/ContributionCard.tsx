import { ParcoursType } from "@/lib/types"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const ContributionCard = ({contribution}:{contribution:ParcoursType}) => {
  return (
    <div className="relative flex justify-center group">
        <button className="absolute top-6 right-6 bg-violet-700 lg:p-3 p-1 rounded-full text-white invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300">
            <ArrowRight className="lg:size-6 size-5" />
        </button>
        <Image src={contribution.image} alt="" />
        <div className="absolute bottom-5 group-hover:bg-violet-600 text-white lg:p-5 p-3 mx-2 rounded-xl overflow-hidden justify-self-center space-y-4">
            <h1 className="font-bold lg:text-[45px] text-xl">{contribution.title}</h1>
            <p className="h-0 invisible group-hover:h-10 group-hover:visible duration-200 transition-all lg:text-base text-xs">{contribution.description}</p>
        </div>
    </div>
  )
}

export default ContributionCard