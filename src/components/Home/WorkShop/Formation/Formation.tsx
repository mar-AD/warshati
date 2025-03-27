import { FormationData } from '@/lib/data';
import { FadeUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import FormationCard from './FormationCard';
import { Plus } from 'lucide-react';
import Link from 'next/link';
const Formation = () => {

    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">Formation Professionnelle Enseignants</motion.h1>
            <div className='grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-4 place-content-center !mt-[9.25rem]
'>

                {
                    FormationData.map((item, index) => (
                        <FormationCard index={index} item={item} key={index} />
                    ))
                }
            </div>
            <Link
            href={"/Formation-Profissionnelle"}
            className="!w-fit btn btn-violet-outline mt-6 md:mt-0 mx-auto md:mx-0"
            >
                <Plus /> Savoir
            </Link>
        </div >
    )
}

export default Formation