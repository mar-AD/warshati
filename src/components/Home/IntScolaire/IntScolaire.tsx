"use client"
import IntScolaireCard from "./IntScolaireCard"
import { IntScolaireData } from "@/lib/data"
import { Plus } from "lucide-react"
import DigitalLabExp from "../DigitalLab/DigitalLabExp"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
const IntScolaire = () => {
const t = useTranslations("home.intScolaire")
    return (
        <div>
            <DigitalLabExp/>
            <div className="lg:px-20 py-20 px-5 font-Poppins bg-light-gray lg:space-y-20 space-y-10 relative max-sm:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center">
                    {IntScolaireData.map((item, index) => (
                        <IntScolaireCard key={index} item={{
                            ...item,
                            title:t(`items.${index}.title`),
                            description:t(`items.${index}.description`)
                        }} />
                    ))}
                    <Link 
                        href={"/Integration-Scolaire"} 
                        className="place-self-end col-span-full sm:col-span-2 lg:col-span-3 btn btn-violet-outline"
                    >
                        {t("see_btn")} <Plus className="ml-2"/>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default IntScolaire