
"use client";
import Image from "next/image";
import flight from "/public/images/Home/hero/flight.png";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import { nosProgrammesObjective } from "@/lib/data";
import ProgramSection, { styleVioletText } from "./ProgramSections";


const Program = () => {
  return (
    <>
      <div className="relative bg-light-gray  px-5 sm:px-14 md:px-14 lg:px-14 pt-[4.5rem] pb-9 max-md:pb-7">
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
          Nos <span className="text-violet-800">Programmes </span>
        </motion.h1>
      </div>

      <ProgramSection
        index={0}
        title={styleVioletText("AI Kids", ["AI"])} 
        subtitle={styleVioletText("Découverte de l’Intelligence Artificielle ( Exemple d’atelier)", ["l’Intelligence", "Artificielle"])} 
        key_1="Objectif :"
        key_2="Activités :"
        objectiveText={nosProgrammesObjective[0].objective}
        activities={nosProgrammesObjective[0].Activités}
        
      />

      <ProgramSection
        index={1}
        title={styleVioletText("STEAM Competency", ["STEAM"])}
        subtitle={styleVioletText("Développer les compétences du futur", ["compétences","du", "futur"])}
        key_1="Objectif :"
        key_2="Activités :"
        objectiveText={nosProgrammesObjective[1].objective}
        activities={nosProgrammesObjective[1].Activités}
        reverse
        bgColor="bg-white"
      />

      <ProgramSection
        index={2}
        title={styleVioletText("Digital Literacy", ["Literacy"])}
        subtitle={styleVioletText("Maîtriser les bases du numérique ( Exemple d’atelier)", ["Exemple", "d’atelier"])}
        key_1="Objectif :"
        key_2="Activités :"
        objectiveText={nosProgrammesObjective[2].objective}
        activities={nosProgrammesObjective[2].Activités}
        bgColor="bg-light-gray"
      />
    </>
  );
};

export default Program;

