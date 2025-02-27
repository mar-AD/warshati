"use client"
import Image from "next/image"
import Link from "next/link"
import warshati_logo from "/public/images/logos/warshati_logo.png"
import Navbar from "./Navbar"
import AuthButton from "./AuthButton"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import { FadeDown } from "@/lib/animations"
const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const ref=useRef<HTMLDivElement>(null)
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
        <motion.div
        variants={FadeDown(.1)}
        initial="initial"
        animate="animate"
        className="flex items-center justify-between md:px-14 px-4 py-10 font-Poppins absolute top-0 w-full z-50 bg-light-gray">
            {/* Logo Section */}
            <Link href={"/"} className="min-w-44 w-44">
                <Image priority src={warshati_logo} alt="warshati_logo" />
            </Link>
            <div ref={ref} className={cn("relative w-[60%] max-lg:hidden",
                showMenu && "max-lg:block"
            )}>
                <div className={cn("lg:gap-20 gap-10 flex items-center justify-between",showMenu && "max-lg:flex-col max-lg:absolute right-0 max-lg:bg-violet-300/50 backdrop-blur-md top-6 max-lg:p-6 rounded")}>

                    {/* Navigation Bar */}
                    <Navbar showMenu={showMenu} />
                    {/* Authentication Button */}
                    <AuthButton showMenu={showMenu}  />
                </div>
            </div>
            {/* Menu */}
            <button
                onClick={() => setShowMenu(prev => !prev)}
                className="bg-violet-200 text-violet-700 cursor-pointer active:scale-75 p-2 rounded-2xl transition-all duration-300 lg:hidden outline-none">
                {
                    showMenu ?
                        <X />
                        :
                        <Menu />
                }
            </button>
        </motion.div>
    )
}

export default Header