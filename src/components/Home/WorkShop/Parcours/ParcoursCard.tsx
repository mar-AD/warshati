import Image from "next/image"
import arrow from '/public/images/Home/digitalLab/arrow.png';
import { cn } from "@/lib/utils";
import { ParcoursType } from "@/lib/types";
import { FadeRight } from "@/lib/animations";
import { motion } from "framer-motion";
const ParcoursCard = ({ index, item }: { index: number, item: ParcoursType }) => {
    return (
        <motion.div
        variants={FadeRight(item.delay!)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }} className={cn("flex flex-col items-center gap-y-5 relative border rounded-3xl place-self-center w-96 p-5 shadow-2xl shadow-black/5 hover:border-violet-800 hover:border-2 hover:lg:!-translate-y-16 duration-300 group  bg-white"
        )}>
            {
                index === 1 &&
                <Image src={arrow} alt='' className='absolute top-0 -left-5 w-12 h-12 max-lg:hidden' />
            }
            <div className="rounded-2xl overflow-hidden">
                <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
            </div>
            <h3 className={cn("text-xl font-bold group-hover:text-violet-700"
            )}>{item.title}</h3>
            <p className={cn('text-sm text-stone-500 group-hover:text-violet-700'

            )}>{item.description}</p>
        </motion.div>
    )
}

export default ParcoursCard