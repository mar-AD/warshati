import Image from "next/image"
import arrow from '/public/images/arrow.png';
import { cn } from "@/lib/utils";
import { ParcoursType } from "@/lib/types";

const ParcoursCard = ({ index, item }: { index: number, item: ParcoursType }) => {
    return (
        <div className={cn("flex flex-col items-center gap-y-5 relative border rounded-3xl place-self-center w-96 p-5 shadow-2xl shadow-black/5",
            index === 0 && "lg:border-violet-800 lg:border-2 lg:-translate-y-16 translate-y-0"
        )}>
            {
                index === 1 &&
                <Image src={arrow} alt='' className='absolute top-0 -left-5 w-12 h-12 max-lg:hidden' />
            }
            <div className="rounded-2xl overflow-hidden">
                <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
            </div>
            <h3 className={cn("text-xl font-bold",
                index === 0 && "text-violet-700"
            )}>{item.title}</h3>
            <p className={cn('text-sm text-stone-500',
                index === 0 && "text-violet-700"

            )}>{item.description}</p>
        </div>
    )
}

export default ParcoursCard