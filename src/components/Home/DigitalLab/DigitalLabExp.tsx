import Image from "next/image"
import Checkbox from "/public/images/Home/digitalLab/Checkbox.png"
import VideoSlider from "../../VideoSlider";
import { experienceData, frameworkData } from "@/lib/data";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "@/lib/animations";
const DigitalLabExp = () => {
    return (
        <div className="lg:p-32 p-16 lg:gap-16 gap-10 bg-light-gray space-y-20">
            <div className="flex items-start place-self-center justify-between xl:gap-x-56 gap-x-0 max-xl:flex-col">
                <motion.div
                variants={FadeRight(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="lg:space-y-10 place-self-center">
                    <h1 className="lg:text-3xl text-xl font-bold font-Poppins">Expérience <span className="text-violet-800">immersive unique, conçue pour éveiller</span></h1>
                    <ul>
                        {experienceData.map((item: string, i) => (
                            <li className="flex gap-3 my-6 md:text-base text-sm  items-center font-semibold font-Poppins" key={i}><Image className="lg:size-8 size-5" src={Checkbox} alt="" />{item}</li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div
                variants={FadeLeft(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="relative flex items-center justify-center lg:max-w-[500px]  place-self-center">
                    <VideoSlider />
                </motion.div>
            </div>
            <div className="flex  items-start place-self-center justify-between xl:gap-x-56 gap-x-0 max-xl:flex-col-reverse">
                <motion.div
                variants={FadeRight(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="relative flex items-center justify-center lg:max-w-[800px]  place-self-center">
                    <VideoSlider />
                </motion.div>
                <motion.div
                variants={FadeLeft(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className=" place-self-center">
                    <h1 className="lg:text-5xl text-3xl text-nowrap font-extrabold font-Inter">Framework <span className="text-violet-800">Warshati</span></h1>
                    <ul>
                        {frameworkData.map((item: string, i) => (
                            <li className="flex gap-3 my-6 md:text-base text-sm  items-center font-semibold font-Poppins" key={i}><Image className="lg:size-8 size-5" src={Checkbox} alt="" />{item}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

export default DigitalLabExp