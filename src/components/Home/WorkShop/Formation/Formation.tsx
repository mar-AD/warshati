import { FormationData } from '@/lib/data';
import { FadeUp } from '@/lib/animations';
import { motion } from 'framer-motion';
import FormationCard from './FormationCard';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
const Formation = () => {
const t = useTranslations("home.formation")
    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">{t("title")}</motion.h1>
            <div className="flex flex-wrap gap-4 justify-center items-center !mt-[9.25rem]">
                {FormationData.map((item, index) => (
                    <FormationCard
                        key={""}
                        index={index}
                        item={{
                        ...item,
                        title: t(`items.${index}.title`),
                        description: t(`items.${index}.description`),
                        }}
                    />
                ))}
            </div>

            <Link
            href={"/Formation-Profissionnelle"}
            className="!w-fit btn btn-violet-outline mt-6 md:mt-0 mx-auto md:mx-0"
            >
                {t("see_btn")} <Plus className="ml-2"/>
            </Link>
        </div >
    )
}

export default Formation