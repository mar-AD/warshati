// import Image from "next/image"
// import arrow from '/public/images/Home/digitalLab/arrow.png';
// import { cn } from "@/lib/utils";
// import { ParcoursType } from "@/lib/types";
// import { FadeRight } from "@/lib/animations";
// import { motion } from "framer-motion";
// import image_5 from "/public/images/Home/digitalLab/image_5.png";
// import image_0 from "/public/images/Home/parcours/victore_2.png"
// import image_1 from "/public/images/Home/parcours/victore_3.png"
// import image_2 from "/public/images/Home/parcours/victore_4.png"
// import image_3 from "/public/images/Home/parcours/victore_5.png"
// import image_4 from "/public/images/Home/parcours/victore_6.png"
// import rectangle from "/public/images/Home/parcours/yellow-rectangel.png"

// const ParcoursCard = ({ index, item }: { index: number, item: ParcoursType }) => {
//     return (
//         <motion.div
//         variants={FadeRight(item.delay!)}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true }} className={cn("flex flex-col items-center gap-y-5 relative border rounded-3xl place-self-center w-96 p-5 shadow-2xl shadow-black/5 hover:border-violet-800 hover:border-2 hover:lg:!-translate-y-16 duration-300 group  bg-white "
//         )}>
//             {index === 0 &&
//             [0, 125, 250].map((pos, i) => (
//                 <Image 
//                 key={i} 
//                 src={image_5} 
//                 alt='' 
//                 className="absolute top-0 h-14"
//                 style={{ left: `${pos}px` }} 
//                 />
//             ))
//             }
//             {index === 1 && (
//                 <>
//                     <Image src={arrow} alt='' className='absolute top-0 -left-0 w-12 h-12 max-lg:hidden' />
//                     <Image src={image_1} alt='' className='absolute top-[8rem] -left-[-3rem] w-[8px] h-[8px]' />
//                     <Image src={image_2} alt='' className='absolute top-[7rem] -right-[-1rem] w-[7px] h-[7px]' />
//                     <Image src={image_3} alt='' className='absolute top-[5rem] -right-[-3rem] w-[7px] h-[7px]' />
//                     <Image src={image_4} alt='' className='absolute top-[.5rem] -right-[-4rem] w-[10px] h-[10px]' />
//                     <Image src={image_4} alt='' className='absolute top-[4rem] -left-[-4rem] w-[10px] h-[10px]' />
//                     <Image src={rectangle} alt='' className='absolute bottom-[-9rem] -left-[-6rem] w-[50px] h-[250px] z-[-1]' />
//                 </>
//             )}
//             {index === 2 && (
//                 <>
//                     <Image src={image_0} alt='' className='absolute top-2 -left-[-3rem] w-16 h-16' />
//                     <Image src={image_0} alt='' className='absolute top-[7rem] -right-[-2rem] w-8 h-8' />
//                     <Image src={image_4} alt='' className='absolute top-[2rem] -right-[-3rem] w-[7px] h-[7px]' />
//                     <Image src={image_4} alt='' className='absolute top-[3rem] -right-[-1rem] w-[10px] h-[10px]' />
//                     <Image src={image_4} alt='' className='absolute top-[6rem] -left-0 w-[18px] h-[18px]' />
//                 </>
//             )}
//             {index === 3 && (
//                 <>
//                     <Image src={image_0} alt='' className='absolute top-2 -left-[-3rem] w-16 h-16' />
//                     <Image src={image_0} alt='' className='absolute top-[7rem] -right-[-2rem] w-8 h-8' />
//                     <Image src={image_4} alt='' className='absolute top-[2rem] -right-[-3rem] w-[7px] h-[7px]' />
//                     <Image src={image_4} alt='' className='absolute top-[3rem] -right-[-1rem] w-[10px] h-[10px]' />
//                     <Image src={image_4} alt='' className='absolute top-[6rem] -left-0 w-[18px] h-[18px]' />
//                 </>
//             )}

//             <div className="rounded-2xl overflow-hidden">
//                 <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
//             </div>
//             <h3 className={cn("text-xl font-bold group-hover:text-violet-700"
//             )}>{item.title}</h3>
//             <p className={cn('text-sm text-stone-500 group-hover:text-violet-700'

//             )}>{item.description}</p>
//         </motion.div>
//     )
// }

// export default ParcoursCard

import Image from "next/image";
import arrow from '/public/images/Home/digitalLab/arrow.png';
import { cn } from "@/lib/utils";
import { ParcoursType } from "@/lib/types";
import { FadeRight } from "@/lib/animations";
import { motion } from "framer-motion";
import image_5 from "/public/images/Home/digitalLab/image_5.png";
import image_0 from "/public/images/Home/parcours/victore_2.png";
import image_1 from "/public/images/Home/parcours/victore_3.png";
import image_2 from "/public/images/Home/parcours/victore_4.png";
import image_3 from "/public/images/Home/parcours/victore_5.png";
import image_4 from "/public/images/Home/parcours/victore_6.png";
import rectangle from "/public/images/Home/parcours/yellow-rectangel.png";

const ParcoursCard = ({ index, item }: { index: number; item: ParcoursType }) => {
    return (
        <div className="relative flex flex-col items-center">
            {/* Card */}
            <motion.div
                variants={FadeRight(item.delay!)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={cn(
                    "flex flex-col items-center gap-y-5 relative border rounded-3xl place-self-center w-96 p-5 shadow-2xl shadow-black/5 hover:border-violet-800 hover:border-2 hover:lg:!-translate-y-16 duration-300 group bg-white z-10"
                )}
            >
                {index === 0 &&
                    [0, 125, 250].map((pos, i) => (
                        <Image key={i} src={image_5} alt="" className="absolute top-0 h-14" style={{ left: `${pos}px` }} />
                    ))}

                {index === 1 && (
                    <>
                        <Image src={arrow} alt="" className="absolute top-0 -left-0 w-12 h-12 max-lg:hidden" />
                        <Image src={image_1} alt="" className="absolute top-[8rem] -left-[-3rem] w-[8px] h-[8px]" />
                        <Image src={image_2} alt="" className="absolute top-[7rem] -right-[-1rem] w-[7px] h-[7px]" />
                        <Image src={image_3} alt="" className="absolute top-[5rem] -right-[-3rem] w-[7px] h-[7px]" />
                        <Image src={image_4} alt="" className="absolute top-[.5rem] -right-[-4rem] w-[10px] h-[10px]" />
                        <Image src={image_4} alt="" className="absolute top-[4rem] -left-[-4rem] w-[10px] h-[10px]" />
                    </>
                )}

                {index === 2 && (
                    <>
                        <Image src={image_0} alt="" className="absolute top-2 -left-[-3rem] w-16 h-16" />
                        <Image src={image_0} alt="" className="absolute top-[7rem] -right-[-2rem] w-8 h-8" />
                        <Image src={image_4} alt="" className="absolute top-[2rem] -right-[-3rem] w-[7px] h-[7px]" />
                        <Image src={image_4} alt="" className="absolute top-[3rem] -right-[-1rem] w-[10px] h-[10px]" />
                        <Image src={image_4} alt="" className="absolute top-[6rem] -left-0 w-[18px] h-[18px]" />
                    </>
                )}

                {index === 3 && (
                    <>
                        <Image src={image_0} alt="" className="absolute top-2 -left-[-3rem] w-16 h-16" />
                        <Image src={image_0} alt="" className="absolute top-[7rem] -right-[-2rem] w-8 h-8" />
                        <Image src={image_4} alt="" className="absolute top-[2rem] -right-[-3rem] w-[7px] h-[7px]" />
                        <Image src={image_4} alt="" className="absolute top-[3rem] -right-[-1rem] w-[10px] h-[10px]" />
                        <Image src={image_4} alt="" className="absolute top-[6rem] -left-0 w-[18px] h-[18px]" />
                    </>
                )}

                <div className="rounded-2xl overflow-hidden">
                    <Image src={item.image} alt={item.title} className="object-cover w-full h-full" />
                </div>
                <h3 className={cn("text-xl font-bold group-hover:text-violet-700")}>{item.title}</h3>
                <p className={cn("text-sm text-stone-500 group-hover:text-violet-700")}>{item.description}</p>
            </motion.div>

            <motion.div
                variants={FadeRight(item.delay!)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >   
            {index === 1 && (
                <Image
                    src={rectangle}
                    alt=""
                    className="absolute hidden lg:block -bottom-24 left-[9rem] transform -translate-x-1/2 w-[50px] h-[250px] 
                    xl:-bottom-[30rem] xl:h-[600px] 
                    2xl:-bottom-[30rem] 2xl:h-[600px]"
                />
            )}
            </motion.div>
        </div>
    );
};

export default ParcoursCard;
