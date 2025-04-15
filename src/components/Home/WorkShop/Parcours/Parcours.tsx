import Image from 'next/image';
import space_man from '/public/images/Home/parcours/space_man.png';
import ParcoursCard from './ParcoursCard';
import { ParcoursData } from '@/lib/data';
import { FadeUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import pen_line from "/public/images/Home/hero/pen_line.png";
import victore_1 from "/public/images/Home/parcours/victore_1.png";
import { useTranslations } from 'next-intl';
const Parcours = () => {
    const  t  = useTranslations("home.parcours");
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <Image src={space_man} alt='' className='absolute top-10 right-10 max-xl:hidden' />
            <Image 
                className="absolute top-0 right-[35rem] !m-0 lg:left-[30rem] md:right-[10rem] sm:right-[5rem] max-sm:right-[5rem] lg:w-[280px] md:w-[180px] sm:w-[140px] max-sm:w-[140px]"
                draggable={false} 
                src={victore_1} 
                alt="Line Image" 
            />
            <motion.div
                    variants={FadeUp(.3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-start gap-3 !mt-8"
                >
                    <div className="flex flex-col items-start pl-32 md:pl-20 sm:pl-10 max-sm:pl-5 max-w-[61rem] ">
                        <h1 className="text-[32px] lg:text-[32px] md:text-[28px] sm:text-[24px] max-sm:text-[20px] font-bold text-start text-muted-foreground">
                            {t("title")}
                        </h1>
                        <Image 
                            className="lg:w-[280px] md:w-[250px] sm:w-[190px] max-sm:w-[160px]" 
                            draggable={false} 
                            src={pen_line} 
                            alt="Pen Line Image" 
                        />
                    </div>

            </motion.div>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4 place-content-center lg:!mt-52'>
                {
                    ParcoursData.map((item, index) => (
                        // <ParcoursCard index={index} item={item} key={index} />
                        <ParcoursCard
                        key={index}
                        index={index}
                        item={{
                            ...item,
                            title: t(`parcours.${index}.title`),
                            description: t(`parcours.${index}.description`),
                        }}
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default Parcours