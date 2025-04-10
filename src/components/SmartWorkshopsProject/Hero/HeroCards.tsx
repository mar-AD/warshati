
import { FadeRight } from '@/lib/animations';
import { progrrmFeatures } from '@/lib/data';
import useMediaQuery from '@/lib/UseMediaQuery';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function HeroCard() {
  const isScreen = useMediaQuery("(min-width: 1765px)")
    return (
      <motion.div
      variants={FadeRight(0.2)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid grid-cols-1 gap-8 relative">
        {progrrmFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 relative">

            {index !== 1 && index !== 3 && (
              <div className="text-[#e1d7f2] text-6xl sm:text-8xl md:text-8xl lg:text-8xl font-Inter font-normal w-[10%]">
                {feature.number}
              </div>
            )}

            <div
              className={`${isScreen ? "lg:w-[90%] lg:max-w-[488px]" : " lg:w-[80%]"} flex items-center gap-4 bg-white rounded-xl p-3 z-10 lg:min-h-[104px]  w-[75%] sm:w-[70%] md:w-[80%] ${
                index === 0 || index === 2 ? 'ml-auto' : ''
              } shadow-[0px_60px_60px_#ccd3e0]`}
            >
              <div className="p-2 rounded-full" style={{ backgroundColor: feature.color }}>
                <Image src={feature.image} alt='' className="w-11 h-9"/>
              </div>
              <div>
                <h3 className="font-semibold text-[14px] sm:text-[16px] md:text-[16px] lg:text-[16px]">
                  <span className="text-black">{feature.title}</span>{' '}
                  <span className="text-gray-600">{feature.description}</span>
                </h3>
              </div>
            </div>

            {(index === 1 || index === 3) && (
              <div className="absolute right-0 text-[#e1d7f2] text-6xl sm:text-8xl md:text-8xl lg:text-8xl font-Inter font-normal z-20">
                {feature.number}
              </div>
            )}
          </div>
        ))}
      </motion.div>
    );
  }
  
  
export default HeroCard