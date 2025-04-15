import Image from "next/image"
import Checkbox from "/public/images/Home/digitalLab/Checkbox.png"
import VideoSlider from "../../VideoSlider";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "@/lib/animations";
import image_1 from '/public/images/Home/intScolaire/image_1.png'
import image_4 from "/public/images/Home/digitalLab/image_4.png"
import arrow_yellow from "/public/images/Home/digitalLab/arrow_yellow.png"
import { useTranslations } from "next-intl";
const DigitalLabExp = () => {
    const t = useTranslations("home.Intégration_Scolaire");
    return (
        <div className="lg:px-20 py-20 px-5 lg:gap-16 gap-10 bg-light-gray">
            <motion.h1
                variants={FadeUp(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="font-bold lg:text-[82px] md:text-6xl text-4xl text-center">{t("title")}</motion.h1>
            <div className="flex items-start  justify-between xl:gap-x-20 gap-x-10 max-xl:flex-col max-xl:gap-y-10 mt-20">
                <motion.div
                variants={FadeRight(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="lg:space-y-10 ">
                    <h1 className="lg:text-3xl text-xl font-bold font-Poppins">
                        {t.rich('subtitle', {
                            highlight: (chunks) => <span className="text-violet-700">{chunks}</span>
                        })}
                    </h1>
                    <ul>
                        {t.raw("list_1").map((item: string, i: number) => (
                            <li className="flex gap-3 my-6 lg:text-[1.5rem] md:text-base sm:text-sm max-sm:text-sm items-center font-semibold font-Poppins" key={i}>
                                <Image className="lg:size-8 size-5" src={Checkbox} alt="" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div
                variants={FadeLeft(.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} 
                className="relative flex items-center justify-center w-full h-[250px] xs:h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px]">
                    <VideoSlider videoIndex={0}/>
                </motion.div>
            </div>
            <div className="flex items-start  justify-between xl:gap-x-20 gap-x-10 max-xl:flex-col-reverse max-xl:gap-y-10 mt-[3rem]">
                <motion.div
                variants={FadeRight(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} 
                className="relative flex items-center justify-center w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[451px] sm:max-w-[800px] md:max-w-[800px] lg:max-w-[800px]">
                    <VideoSlider videoIndex={1}/>
                </motion.div>
                <motion.div
                variants={FadeLeft(.3)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }} className="">
                    <ul>
                        {t.raw("list_2").map((item: string, i: number) => (
                            <li className="flex gap-3 my-6 lg:text-[1.5rem] md:text-base sm:text-sm max-sm:text-sm  items-center font-semibold font-Poppins" key={i}><Image className="lg:size-8 size-5" src={Checkbox} alt="" />{item}</li>
                        ))}
                    </ul>
                </motion.div>
            </div>


            <div className="flex justify-center items-center relative mt-20">
                <motion.div
                    variants={FadeUp(0.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-[900px] border rounded-3xl flex justify-center items-center bg-white space-x-4 py-5 px-5 relative"
                >
                    <div className="bg-customCard-card1 p-3 border rounded-2xl">
                        <Image
                            className="w-[60px] md:w-[50px] sm:w-[50px] max-sm:w-[50px] lg:w-[70px]"
                            draggable={false}
                            src={image_1}
                            alt="Pen Line Image"
                        />
                    </div>

                    <p className="font-semibold lg:text-[22px] md:text-base text-sm text-black lg:max-w-[68rem] md:max-w-[72rem] max-w-[80rem]">
                        {t("text")}
                    </p>

                    <Image className="absolute -right-3 -top-5 -scale-x-100 -translate-y-1/2 translate-x-1/2 w-[70px]" src={image_4} alt="" />
                    <Image className="absolute -right-14 -top-14 -scale-x-100 -translate-y-1/2 translate-x-1/2 w-[40px] hidden md:hidden lg:block" src={arrow_yellow} alt="" />
                    <Image className="absolute -left-[8rem] -top-5 -scale-x-100 -scale-y-100 -translate-y-1/2 translate-x-1/2 w-[60px] hidden md:hidden lg:block" src={arrow_yellow} alt="" />
                </motion.div>
            </div>


        </div>
    )
}

export default DigitalLabExp