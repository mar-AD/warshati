import Image from 'next/image';
import space_man from '/public/images/Home/parcours/space_man.png';
import ParcoursCard from './ParcoursCard';
import { ParcoursData } from '@/lib/data';
import { FadeUp } from '@/lib/animations';
import { motion } from 'framer-motion';
const Parcours = () => {

    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <Image src={space_man} alt='' className='absolute top-44 right-10 max-xl:hidden' />
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Parcours
            </motion.h1>
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Chaque parcours est soigneusement conçu pour orienter les apprenants à travers l&apos;univers fascinant de STEAM & AI.</p>
            </motion.div>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4 place-content-center lg:!mt-44'>

                {
                    ParcoursData.map((item, index) => (
                        <ParcoursCard index={index} item={item} key={index} />
                    ))
                }
            </div>
        </div >
    )
}

export default Parcours