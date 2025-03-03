import { FadeDown } from "@/lib/animations"
import { QuestionType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import { useState } from "react"
const QuestionCard = ({ question }: { question: QuestionType }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>

            <div className={cn("flex justify-between w-full transition-all duration-300 my-4 items-center",
                isOpen ? "border-b lg:h-24 h-20" : "bg-slate-100 rounded-xl lg:p-6 p-4"
            )}>
                <h3 className="max-lg:text-sm">{question.question}</h3>
                <button onClick={() => setIsOpen(prev => !prev)} className={cn("bg-white lg:p-2.5 p-1",
                    isOpen ? "text-yellow-800 bg-orange-200/50 rounded-xl" : " text-slate-500 rounded-full"
                )}>
                    {
                        isOpen ?
                            <X className="size-5 lg:size-6" />
                            :
                            <ArrowRight className="size-5 lg:size-6" />
                    }
                </button>
            </div>
            <AnimatePresence>

                {
                    isOpen &&
                    <motion.p
                        variants={FadeDown(.2)}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        className="lg:p-4 p-2 text-slate-400 lg:text-sm text-xs"
                    >{question.answer}</motion.p>
                }
            </AnimatePresence>
        </div>

    )
}

export default QuestionCard