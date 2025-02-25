import { ThematiqueType } from "@/lib/types"
import Image from "next/image"

const ThematiqueCard = ({ item }:{item:ThematiqueType}) => {
    return (
        <div className="font-Poppins space-y-5 border lg:p-9 p-5 rounded-3xl md:min-h-96 min-h-80">
            <Image style={{backgroundColor:item.imageBgColor}} className="p-2 rounded-xl w-16" src={item.image} alt="" />
            <h1 className="lg:text-2xl text-lg font-bold">{item.title}</h1>
            <p className="lg:text-xl text-sm text-stone-600">{item.description}</p>
        </div>
    )
}

export default ThematiqueCard