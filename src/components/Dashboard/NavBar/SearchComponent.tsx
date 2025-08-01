"use client"

import { SearchModal } from "./SearchModal"
import { Search } from "lucide-react"
import { useState } from "react"
import { SearchBar } from "./SearchBar"


export const SearchComponent = () => {
    const [showMobileModal, setShowMobileModal] = useState(false)

    return (
        <>
            <div className="sm:hidden">
                <button 
                    onClick={() => setShowMobileModal(true)}
                    className="flex items-center justify-center bg-violet-800 hover:bg-violet-900 duration-500 text-violet-200 p-2 rounded-full w-10 h-10"
                >
                    <Search className="size-5" />
                </button>
            </div>

            <div className="hidden sm:block">
                <SearchBar />
            </div>

            <SearchModal 
                isOpen={showMobileModal}
                onClose={() => setShowMobileModal(false)}
            />
        </>
    )
}