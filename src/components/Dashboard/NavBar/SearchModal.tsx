"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { SearchBar } from "./SearchBar"
import { useTranslations } from "next-intl"

interface SearchModalProps {
    isOpen: boolean
    onClose: () => void
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {

    const t = useTranslations("dashboard.sideBar");
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-28 p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white dark:bg-zinc-900 rounded-xl p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-medium text-lg text-black dark:text-white">{t("search")}</h3>
                            <button 
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X className="size-5" />
                            </button>
                        </div>
                        
                        <SearchBar className="w-full" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
