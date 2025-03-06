import Image from "next/image"
import save from "/public/images/Blog/save.png"

import { Heart, MessageCircleMore, Share2 } from "lucide-react"
const PopularTags = () => {
    return (
        <div className="flex gap-6 flex-wrap items-center justify-between  border-t-2 border-b-2 py-7">
            <div className="flex gap-x-7 gap-y-4 flex-wrap items-center">
                <p className="px-4 py-1.5 text-xs bg-red-500 text-white rounded-lg border">Smart Workshops</p>
                <p className="px-4 py-1.5 text-xs bg-green-500 text-white rounded-lg border">STEAM</p>
                <p className="px-4 py-1.5 text-xs bg-gray-600 text-white rounded-lg border">Coding</p>
                <p className="px-4 py-1 text-xs bg-slate-400 text-white rounded-lg border">AI</p>
            </div>
            <div className="flex items-center gap-x-5 text-slate-400 capitalize">
                <button className="flex gap-x-3 items-center">
                    <MessageCircleMore className="size-4" />
                    <span className="text-[10px]">80</span>
                </button>
                <button className="flex gap-x-3 items-center">
                    <Image src={save} alt="" />
                    <span className="text-[10px]">123</span>
                </button>
                <button className="flex gap-x-3 items-center">
                    <Heart className="size-4" />
                    <span className="text-[10px]">58</span>
                </button>
                <button className="flex gap-x-3 items-center">
                    <Share2 className="size-4" />
                    <span className="text-[10px]">partager</span>
                </button>
            </div>
        </div>
    )
}

export default PopularTags