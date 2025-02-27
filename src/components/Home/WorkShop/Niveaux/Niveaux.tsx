
import { niveauxData } from '@/lib/data';
import NiveauxCard from './NiveauxCard';
import { motion } from 'framer-motion';
import { FadeUp } from '@/lib/animations';
const Niveaux = () => {

    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative bg-light-gray">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="lg:text-6xl md:text-5xl text-4xl font-bold text-violet-700 text-center">Niveaux</motion.h1>
            <motion.div
                variants={FadeUp(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem] text-center">Chaque concept est répartis en cinq niveaux pour guider les apprenants dans l&apos;acquisition progressive des connaissances et compétences nécessaires.</p>
            </motion.div>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-12 place-content-center xl:!mt-40'>

                {
                    niveauxData.map((item, index) => (
                        <NiveauxCard item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Niveaux