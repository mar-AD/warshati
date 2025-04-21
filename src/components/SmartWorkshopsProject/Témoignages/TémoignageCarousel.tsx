import { useState } from "react";
import Image from "next/image";
import quotes from "/public/images/Formation/formation-quote.png";
import { TemoignagesData } from "@/lib/data";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { FadeRight } from "@/lib/animations";
import { useTranslations } from "next-intl";

const VerticalCarousel = () => {
  const [index, setIndex] = useState(1);

  const handleNext = () => {
    if (index < TemoignagesData.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const t = useTranslations("smartWorkshopsProject.temoignage")

  return (
    <motion.div
    variants={FadeRight(.5)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="flex justify-center lg:justify-start items-center w-full h-auto py-4 px-2"
    >

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">

        <div className="flex sm:flex-col gap-2 sm:gap-4 sm:flex-none sm:order-first sm:mr-4 sm:mt-0 mt-4">
          <button
            className="bg-violet-800 text-white px-2 py-2 transition-all duration-300 hover:bg-violet-700 rounded-full"
            onClick={handlePrev}
          >
            <ChevronUp size={20} />
          </button>
          <button
            className="bg-violet-800 text-white px-2 py-2 transition-all duration-300 hover:bg-violet-700 rounded-full"
            onClick={handleNext}
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Carousel */}
        <div className="relative flex flex-col h-auto gap-8">
          {t.raw('list').map((text: string, i: number) => (
            <div
              key={i}
              className={`relative text-sm sm:text-sm md:text-base lg:text-base p-4 sm:p-6 md:p-8 rounded-md transition-all duration-700 ease-in-out ${
                i === index ? "bg-[#E4CFFF] text-black opacity-100" : "bg-transparent text-gray-500 opacity-40"
              }`}
            >
              <Image
                src={quotes}
                alt="Icon"
                width={30}
                height={30}
                className="absolute -top-5 left-2 w-8 h-8 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              />
              <p className="px-2">{text}</p>
            </div>
          ))}
        </div>
        
      </div>
    </motion.div>

  );
};

export default VerticalCarousel;
