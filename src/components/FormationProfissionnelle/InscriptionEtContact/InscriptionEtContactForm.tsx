// import Image from "next/image"
// import contact from "/public/images/contact.png"
// const InscriptionEtContactForm = () => {
//   return (
//     <form className="grid grid-cols-2 gap-16 p-10 xl:w-[70%] lg:w-1/2 w-full">
//                     <div className="space-y-10 flex flex-col-reverse capitalize">
//                         <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
//                         <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Nom</label>
//                     </div>
//                     <div className="space-y-10 flex flex-col-reverse capitalize">
//                         <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
//                         <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Prénom</label>
//                     </div>

//                     <div className="space-y-10 flex flex-col-reverse capitalize">
//                         <input type="email" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
//                         <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">email</label>
//                     </div>
//                     <div className="space-y-10 flex flex-col-reverse capitalize">
//                         <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
//                         <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Établissement</label>
//                     </div>

//                     <div className="col-span-2 gap-y-7 flex flex-col-reverse">
//                         <select id="" className="outline-none border-b-2 focus:border-black bg-white border-black placeholder-shown:border-gray-400 peer w-full">
//                             <option value="" disabled selected hidden></option>
//                             <option value="formation1">Formation 1</option>
//                             <option value="formation2">Formation 2</option>
//                             <option value="formation3">Formation 3</option>
//                         </select>
//                         <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Choix de la formation</label>

//                     </div>
//                     <div className=" place-self-end col-span-2  flex flex-col">
//                         <button className="rounded-sm bg-violet-700 text-violet-100 py-5 px-10 place-self-end">Je m’inscris maintenant</button>
//                         <Image src={contact} alt="" />
//                     </div>
//                 </form>
//   )
// }

// export default InscriptionEtContactForm

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { dropdown } from "@/lib/animations";

const InscriptionEtContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const [isFocused, setIsFocused] = useState(false);

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
            <label className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">email</label>
        </div>
        <div className="space-y-10 flex flex-col-reverse capitalize">
            <input type="text" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
            <label className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Établissement</label>
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
                {selected || "Choix de la formation"}
                <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </div>

            <AnimatePresence>
            {isOpen && (
                <motion.ul
                variants={dropdown(.1)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-full left-0 w-full bg-white border border-black shadow-lg rounded-b-lg mt-1 overflow-hidden"
                >
                {["Formation 1", "Formation 2", "Formation 3"].map((item) => (
                    <li
                    key={item}
                    className="p-2 hover:bg-violet-300 cursor-pointer"
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

            <label className={`peer-placeholder-shown:text-gray-500 text-black ${isFocused ? "text-black" : "text-gray-500"}`}>
            Choix de la formation
            </label>
        </div>

        <div className="place-self-end col-span-2 flex flex-col">
            <button className="rounded-sm bg-violet-700 text-violet-100 py-5 px-10 place-self-end">Je m’inscris maintenant</button>
        </div>
        </form>
    );
};

export default InscriptionEtContactForm;
