import { PedagogyData } from "@/lib/data"
import PedagogyCard from "./PedagogyCard"
import { motion } from "framer-motion"
import { FadeUp } from "@/lib/animations"
import Image from "next/image"
import pen_line from "/public/images/Home/hero/pen_line.png"
import victore_2 from "/public/images/Home/pedagogy/victore_2.png";

const Pedagogy = () => {

    return (
        <div className="relative bg-light-gray lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10">
            <Image 
                className="absolute top-0 right-[35rem] lg:right-[25rem] md:right-[10rem] sm:right-[5rem] max-sm:right-[15rem] lg:w-[280px] md:w-[180px] sm:w-[140px] max-sm:w-[140px]"
                draggable={false} 
                src={victore_2} 
                alt="Line Image" 
            />
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                animate="animate"
                className="flex flex-col items-end gap-3 mt-16 !sm:mt-0 !max-sm:mt-0"
                >
                <div className="flex flex-col items-end pr-32 md:pr-20 sm:pr-10 max-sm:pr-5 max-w-[61rem]">
                    <h1 className="text-[32px] lg:text-[32px] md:text-[28px] sm:text-[24px] max-sm:text-[20px] font-bold text-end text-muted-foreground">
                    21st century skills
                    </h1>
                    <Image 
                    className="w-[200px] md:w-[200px] sm:w-[170px] max-sm:w-[150px] lg:w-[250px]" 
                    draggable={false} 
                    src={pen_line} 
                    alt="Pen Line Image" 
                    />
                </div>
            </motion.div>

            <div className="grid-cols-[repeat(auto-fill,_minmax(380px,_1fr))] grid gap-6 items-start">
                {PedagogyData.map((card, index) => (
                    <PedagogyCard key={index} item={card} />
                ))}
            </div>
        </div>
    )
}

export default Pedagogy