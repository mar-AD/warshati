"use client";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/animations";
import HeroImage from "./HeroImage";
import { useTranslations } from "next-intl";
const Hero = () => {
  const t = useTranslations("r&i.hero")
  return (
    <div className="bg-light-gray lg:px-3 lg:flex-col-reverse md:px-16 px-10 2xl:pb-56 pb-10 h-max flex justify-center">
      {/* Hero Section */}
      <div className="md:pt-56 pt-36 flex flex-wrap max-2xl:flex-col-reverse xl:justify-between w-full gap-x-80 lg:gap-y-56 gap-y-20 lg:items-start">
        {/* Hero Image */}
        <HeroImage />
        {/* Hero Text*/}
        <div className="font-Poppins space-y-7">
          <motion.h1
            variants={FadeUp(0.3)}
            initial="initial"
            animate="animate"
            className="font-extrabold lg:text-7xl md:text-5xl text-3xl !leading-tight lg:max-w-[900px] md:max-w-[600px]"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="!leading-8 max-w-[828px] text-slate-600"
          >
            {t("description")}
          </motion.p>
          <motion.div
            variants={FadeUp(0.5)}
            initial="initial"
            animate="animate"
            className="flex gap-8 flex-wrap"
          >
            <button className="btn btn-violet gap-3 md:w-fit w-full">
              {t("collabButton")} <ArrowRight />
            </button>
            <button className="btn btn-violet-outline gap-3  md:w-fit w-full">
              {t("projectsButton")}
              <Eye />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
