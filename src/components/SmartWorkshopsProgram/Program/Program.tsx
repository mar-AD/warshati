
"use client";
import Image from "next/image";
import flight from "/public/images/Home/hero/flight.png";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
// import { nosProgrammesObjective } from "@/lib/data";
import ProgramSection from "./ProgramSections";
import { useTranslations } from "next-intl";

const Program = () => {
  const t = useTranslations('smartWorkshopsProgram.program');
  return (
    <>
      <div className="relative bg-light-gray px-5 sm:px-14 md:px-14 lg:px-14 pt-[4.5rem] pb-9 max-md:pb-7">
        <Image
          src={flight}
          alt=""
          className="absolute top-5 right-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 translate scale-x-[-1]"
        />

        <motion.h1
          variants={FadeUp(0.3)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-Poppins"
        >
          {t.rich('section_title', {
            highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
          })}
        </motion.h1>
      </div>

      <ProgramSection
        index={0}
        groupKey="1"
        reverse={false}
        objectiveText={t('groups.1.content.objectif_text')}
        activities={t.raw('groups.1.content.activites_list')}
      />

      <ProgramSection
        index={1}
        groupKey="2"
        objectiveText={t('groups.2.content.objectif_text')}
        activities={t.raw('groups.2.content.activites_list')}
        reverse
        bgColor="bg-white"
      />

      <ProgramSection
        index={2}
        groupKey="3"
        objectiveText={t('groups.3.content.objectif_text')}
        activities={t.raw('groups.3.content.activites_list')}
        bgColor="bg-light-gray"
      />
    </>
  );
};

export default Program;

