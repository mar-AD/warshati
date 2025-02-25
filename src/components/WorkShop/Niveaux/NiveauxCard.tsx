import { niveauxType } from "@/lib/types"
import { cn } from "@/lib/utils"
import Image from "next/image"

const NiveauxCard = ({ item, index }: { item: niveauxType, index: number }) => {
    return (
        <div className={cn("shadow-2xl border rounded-2xl flex flex-col items-center justify-between gap-3 h-[27rem] p-6 font-Inter relative",
            index === 3 && "bg-violet-800/30 border-violet-800 border-2 xl:-translate-y-20"
        )}>
            <Image src={item.num} className="absolute top-7 left-7" alt="" />
            <div className=" flex justify-center items-center flex-col h-full">
                <Image src={item.image} className="w- p-2" alt="" />
            </div>
            <h1 className="text-3xl font-bold">
                {item.title}
            </h1>
            <p className="text-sm text-center">
                {item.description}
            </p>
        </div>
    )
}

export default NiveauxCard