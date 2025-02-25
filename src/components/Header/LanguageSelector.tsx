"use client"
import { cn } from "@/lib/utils";
import { LanguageType } from "@/lib/types";
import "flag-icons/css/flag-icons.min.css"
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languages } from "@/lib/data";
const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(languages.find(language => language.code.toLowerCase() == navigator.language.split("-")[0]) || languages[0])
    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const clickOutSide = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setShowMenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", clickOutSide)
        return () => {
            window.removeEventListener("mousedown", clickOutSide)
        }
    })

    return (
        <div className="" ref={ref}>
            <div onClick={() => setShowMenu(prev => !prev)} className="flex items-center gap-x-2 rounded-md cursor-pointer">
                <span className={cn(`fi fi-${selectedLanguage.flag} rounded-md `)}></span>
                <div className="flex gap-x-1">
                    <p className="text-stone-500 text-xs font-semibold ">{selectedLanguage.code}</p>
                    <ChevronDown className={cn("size-3 transition-transform duration-300", !showMenu ? "rotate-0" : "rotate-180")} />
                </div>
            </div>
            <div className="relative">
                <div  className={cn("absolute z-20 right-0 mt-2 bg-white border p-4 rounded-md duration-300 transition-[visibility_filter_opacity_transform]",
                showMenu ? "visible blur-none opacity-100 scale-100" : " invisible blur-sm opacity-0 scale-90"
            )}>
                    {languages.map((language, i) => (
                        <div onClick={() => setSelectedLanguage(language)} key={i} className={cn("flex gap-x-2 p-2 my-1 rounded-md cursor-pointer group",
                            selectedLanguage.code == language.code ? "bg-violet-300" : "hover:bg-violet-200"
                        )}>
                            <span className={cn(`fi fi-${language.flag} rounded-md`)}></span>
                            <p className="text-stone-600 font-medium group-hover:text-violet-900">{language.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LanguageSelector