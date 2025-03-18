"use client"
import IntScolaireCard from "./IntScolaireCard"
import { IntScolaireData } from "@/lib/data"
import { Plus } from "lucide-react"
import Link from "next/link"
import DigitalLabExp from "../DigitalLab/DigitalLabExp"
const IntScolaire = () => {

    return (
        <div>
            <DigitalLabExp/>
            <div className="lg:px-20 py-20 px-5 font-Poppins bg-light-gray lg:space-y-20 space-y-10 relative max-sm:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center mx-10">
                    {IntScolaireData.map((item, index) => (
                        <IntScolaireCard key={index} item={item} />
                    ))}
                    <Link 
                        href={"/Integration-Scolaire"} 
                        className="place-self-end col-span-full sm:col-span-2 lg:col-span-3 btn btn-violet-outline !gap-x-3"
                    >
                        savoir <Plus />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default IntScolaire