import Image from "next/image"
import arrow from '/public/images/Home/digitalLab/arrow.png';
import { cn } from "@/lib/utils";
import { ParcoursType } from "@/lib/types";
import { FadeRight } from "@/lib/animations";
import { motion } from "framer-motion";
import image_5 from "/public/images/Home/digitalLab/image_5.png";
import image_0 from "/public/images/Home/parcours/victore_2.png"
import image_1 from "/public/images/Home/parcours/victore_3.png"
import image_2 from "/public/images/Home/parcours/victore_4.png"
import image_3 from "/public/images/Home/parcours/victore_5.png"
import image_4 from "/public/images/Home/parcours/victore_6.png"

const ExempleDeProjets1stCard = ({ index, item }: { index: number, item: ParcoursType }) => {
    return (
        <motion.div
        variants={FadeRight(item.delay!)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={cn(
            "flex flex-col text-center items-center justify-center gap-y-5 relative border rounded-3xl p-6 shadow-2xl shadow-black/5 hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)] transition-all duration-300 group bg-white w-96 lg:min-h-[493px] hover:border-violet-800 hover:border-1 cursor-pointer",
            "flex-basis-100 sm:flex-basis-48 md:flex-basis-48 lg:flex-basis-32 overflow-hidden"
        )}
        >

            {index === 0 &&
            [0, 125, 250].map((pos, i) => (
                <Image 
                key={i} 
                src={image_5} 
                alt='' 
                className="absolute top-0 h-14"
                style={{ left: `${pos}px` }} 
                />
            ))
            }
            {index === 1 && (
                <>
                    <Image src={arrow} alt='' className='absolute top-0 -left-0 w-12 h-12 max-lg:hidden' />
                    <Image src={image_1} alt='' className='absolute top-[8rem] -left-[-3rem] w-[8px] h-[8px]' />
                    <Image src={image_2} alt='' className='absolute top-[7rem] -right-[-1rem] w-[7px] h-[7px]' />
                    <Image src={image_3} alt='' className='absolute top-[5rem] -right-[-3rem] w-[7px] h-[7px]' />
                    <Image src={image_4} alt='' className='absolute top-[.5rem] -right-[-4rem] w-[10px] h-[10px]' />
                    <Image src={image_4} alt='' className='absolute top-[4rem] -left-[-4rem] w-[10px] h-[10px]' />
                </>
            )}
            {index === 2 && (
                <>
                    <Image src={image_0} alt='' className='absolute top-2 -left-[-3rem] w-16 h-16' />
                    <Image src={image_0} alt='' className='absolute top-[7rem] -right-[-2rem] w-8 h-8' />
                    <Image src={image_4} alt='' className='absolute top-[2rem] -right-[-3rem] w-[7px] h-[7px]' />
                    <Image src={image_4} alt='' className='absolute top-[3rem] -right-[-1rem] w-[10px] h-[10px]' />
                    <Image src={image_4} alt='' className='absolute top-[6rem] -left-0 w-[18px] h-[18px]' />
                </>
            )}

            <div className="rounded-2xl overflow-hidden">
            <Image
                src={item.image}
                alt={item.title}
                className="w-[100px] sm:w-[120px] md:w-[135px] lg:w-[150px] object-cover"
            />
            </div>

            <h3 className={cn("text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold group-hover:text-violet-700")}>
            {item.title}
            </h3>

            <p className={cn("text-sm sm:text-base md:text-lg lg:text-[20px] text-stone-500 group-hover:text-violet-700")}>
            {item.description}
            </p>

        </motion.div>
    )
}

export default ExempleDeProjets1stCard