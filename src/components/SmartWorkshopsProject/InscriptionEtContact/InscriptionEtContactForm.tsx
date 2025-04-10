
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { dropdown } from "@/lib/animations";
import { cn } from "@/lib/utils";

const InscriptionEtContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    const data =["Projet 1", "Projet 2", "Projet 3"]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                if (selected === "") {
                    setIsFocused(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selected]);

    return (
        <form className="grid grid-cols-2 gap-16 p-10 xl:w-[70%] lg:w-1/2 w-full">

            <div className="space-y-10 flex flex-col-reverse capitalize">
                <input type="text" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                <label className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Nom</label>
            </div>
            <div className="space-y-10 flex flex-col-reverse capitalize">
                <input type="text" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                <label className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Prénom</label>
            </div>
            <div className="space-y-10 flex flex-col-reverse capitalize">
                <input type="email" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                <label className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Âge</label>
            </div>
            <div className="space-y-10 flex flex-col-reverse capitalize">
                <input type="text" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                <label className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Email</label>
            </div>

            <div className="col-span-2 gap-y-7 flex flex-col-reverse relative">
                <div
                    ref={dropdownRef}
                    className="outline-none border-b-2 focus:border-black bg-white border-black placeholder-shown:border-gray-400 peer w-full p-2 cursor-pointer flex justify-between items-center"
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        if (selected === "") {
                            setIsFocused(false);
                        }
                    }}
                >
                    {selected || "Projet choisi"}
                    <ChevronDown className={cn("duration-500",isOpen?"rotate-180":"rotate-0")} />
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            variants={dropdown(0.1)}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute top-full left-0 w-full bg-white/70 backdrop-blur-lg  shadow-lg rounded-b-lg mt-1 overflow-hidden"
                        >
                            {data.map((item) => (
                                <li
                                    key={item}
                                    className="m-2 p-2 rounded-lg hover:bg-[#E4CFFF] cursor-pointer"
                                    onClick={() => {
                                        setSelected(item);
                                        setIsOpen(false);
                                        setIsFocused(true);
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                <label
                    className={`peer-placeholder-shown:text-gray-500 text-black ${isFocused ? "text-black" : "text-gray-500"}`}
                >
                    Projet choisi 
                </label>
            </div>

            <div className="place-self-end col-span-2 flex flex-col">
                <button className="rounded-sm bg-violet-700 text-violet-100 py-5 px-10 place-self-end">
                    Je m’inscris maintenant 
                </button>
            </div>
        </form>
    );
};

export default InscriptionEtContactForm;
