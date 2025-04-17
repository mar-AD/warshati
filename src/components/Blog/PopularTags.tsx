import Image from "next/image"
import save from "/public/images/Blog/save.png"

import { Heart, MessageCircleMore, Share2 } from "lucide-react"
import { useTranslations } from "next-intl"
const PopularTags = () => {
    const t = useTranslations("blog")
    const populaires = t.raw("layout.populaires") as string[]
    return (
        <div className="flex gap-6 flex-wrap items-center justify-between  border-t-2 border-b-2 py-7">
            <div className="flex gap-x-7 gap-y-4 flex-wrap items-center">
            {populaires.slice(1, 5).map((item, index) => (
                <p key={index} className="px-4 py-1.5 text-xs text-white rounded-lg border"
                style={{ backgroundColor: ["#ef4444", "#22c55e", "#4b5563", "#94a3b8"][index] }}>
                {item}
                </p>
            ))}
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
                    <span className="text-[10px]">{t("rest.partager")}</span>
                </button>
            </div>
        </div>
    )
}

export default PopularTags