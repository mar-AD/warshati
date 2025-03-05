"use client"
import { cn } from "@/lib/utils";
import { NavType } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "@/lib/data";
import { usePathname } from "next/navigation";

const Navbar = ({showMenu}:{showMenu:boolean}) => {
    const [data,setData] =useState<NavType[]>(links);
    const pathname=usePathname()
    const selectLink=(label:string)=>{
        data.forEach((item) => {
            if(item.label===label){
                item.selected=true;
            }else{
                item.selected=false;
            }
        });
        setData([...data]);
    }
    useEffect(()=>{
        selectLink("/")
    },[pathname])
    return (
        <div className={"flex justify-center items-center"}>
            <ul className={cn("flex font-Poppins text-stone-500 gap-x-4 justify-center items-center",
            showMenu&&"max-lg:flex-col gap-y-8"
            )}>
                {data.map((item, index) => (
                    <li onClick={()=>selectLink(item.label)} key={index}>
                        <Link href={item.link} className={cn("px-3 py-1.5 text-xl rounded-md transition-colors duration-300",
                            item.selected||pathname.toLowerCase()==="/"+item.label.toLowerCase() ? "text-violet-600 font-bold":"hover:text-stone-800"
                        )}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar