import Image from 'next/image';
import { niveauxData } from '@/lib/data';
import NiveauxCard from './NiveauxCard';
import { motion } from 'framer-motion';
import { FadeUp } from '@/lib/animations';
import pen_line from "/public/images/Home/hero/pen_line.png";
import space_man_2 from '/public/images/Home/niveaux/space_man_2.png';
import victore_2 from "/public/images/Home/pedagogy/victore_2.png";
import { useTranslations } from 'next-intl';
const Niveaux = () => {
const t = useTranslations("home.niveaux")
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative bg-light-gray">
            <Image src={space_man_2} alt='' className='absolute top-10 left-10 w-60 max-xl:hidden' />
            <Image 
                className="absolute top-0 right-[38rem] lg:right-[38rem] md:right-[30rem] sm:right-[20rem] max-sm:right-[15rem] lg:w-[280px] md:w-[180px] sm:w-[140px] lg:h-[200px] max-sm:w-[140px] !mt-0"
                draggable={false} 
                src={victore_2} 
                alt="Line Image" 
            />
            <motion.div
                variants={FadeUp(.2)}
                initial="initial"
                animate="animate"
                className="flex flex-col items-end gap-3 mt-20"
                >
                <div className="flex flex-col items-end pr-32 md:pr-20 sm:pr-10 max-sm:pr-5 max-w-[61rem]">
                    <h1 className="text-[32px] lg:text-[32px] md:text-[28px] sm:text-[24px] max-sm:text-[20px] font-bold text-end text-muted-foreground">
                    {t("title")}
                    </h1>
                    <Image 
                    className="lg:w-[420px] md:w-[320px] sm:w-[290px] max-sm:w-[260px] " 
                    draggable={false} 
                    src={pen_line} 
                    alt="Pen Line Image" 
                    />
                </div>
            </motion.div>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-12 place-content-center xl:!mt-40'>

                {
                    niveauxData.map((item, index) => (
                        // <NiveauxCard item={item} key={index} />
                        <NiveauxCard
                        key={index}
                        item={{
                        ...item,
                        title: t(`list.${index}.title`),
                        description: t(`list.${index}.description`)
                        }}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Niveaux