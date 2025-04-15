"use client"
import { cn } from "@/lib/utils";
import { NavType } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Navbar = ({showMenu}:{showMenu:boolean}) => {
    const [data,setData] =useState<NavType[]>(links);
    const pathname=usePathname()
    const locale = useLocale();
    const t = useTranslations("nav");
    useEffect(()=>{
        const normalizedPath = pathname.replace(`/${locale}`, ""); 
        const updated = links.map((item) => ({
            ...item,
            selected: normalizedPath.toLowerCase() === item.link.toLowerCase(),
        }));
        setData(updated);
    },[pathname, locale])
    return (
        <div className={"flex justify-center items-center"}>
            <ul className={cn("flex font-Poppins text-stone-500 gap-x-4 justify-center items-center",
            showMenu&&"max-lg:flex-col gap-y-8"
            )}>
                {data.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link} className={cn("px-3 py-1.5 text-xl rounded-md transition-colors duration-300",
                            item.selected||pathname.toLowerCase()==="/"+item.label.toLowerCase() ? "text-violet-600 font-bold":"hover:text-stone-800"
                        )}>
                            {t(item.label)}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar