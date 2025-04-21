"use client"
import Image from "next/image"
import flight from "/public/images/Home/hero/flight.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "@/lib/animations";
import VerticalCarousel from "./TémoignageCarousel";
import CustomVideoPlayer from "../../VideoPlayer";
import useMediaQuery from "@/lib/UseMediaQuery";
import { useTranslations } from "next-intl";


const Temoignages = () => {
    const isScreen = useMediaQuery("(min-width: 1000px)");
    const t = useTranslations("smartWorkshopsProject.temoignage")
    const videoQualities = [
        { label: '1080p', url: '/videos/home/video_2.mp4' },
        { label: '720p', url: '/videos/home/video_2.mp4' },
        { label: '360p', url: '/videos/home/video_2(1).mp4' },
    ];
    return (
        <div className="bg-light-gray relative px-5 sm:px-14 md:px-14 lg:px-14 pt-[4.5rem] pb-20 max-md:pb-7">
            <Image src={flight} alt="" className="  absolute top-10 left-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/> 
            <motion.h1
            variants={FadeUp(.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} 
            className=" font-extrabold text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-center font-Poppins"
            > 
                {t.rich('title', {
                    highlight: (chunks) => <span className="text-violet-800">{chunks}</span>
                })}
            </ motion.h1>

            <div className={`flex items-stretch justify-center lg:space-x-16 w-full flex-wrap sm:pt-5 md:pt-10 lg:pt-20 ${isScreen ? '' : 'flex-col-reverse'}`}>

            <div className={`flex-1 flex ${isScreen ? '' : 'order-last'}`}>
                <VerticalCarousel />
            </div>

            <motion.div
                variants={FadeLeft(0.5)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={` flex flex-col ${isScreen ? 'sm:flex-row sm:w-1/2' : 'flex-col'}`}
            >
                <div className="bg-white shadow-lg overflow-hidden text-center p-2 lg:p-4 flex flex-col w-full">

                <div className="relative w-full mx-auto flex-1 flex sm:h-[80%] h-auto">
                    <CustomVideoPlayer 
                    url="/videos/home/vid3.mp4" 
                    placeholder="\images\Blog\articles/article_6.jpg" 
                    videoQualities={videoQualities}
                    />
                </div>

                <div className="p-4 flex items-center justify-center sm:h-[20%] h-auto">
                    <div>
                    <h3 className="text-xl font-semibold text-gray-900">{t("vid_tit")}</h3>
                    <p className="text-sm text-slate-600">{t("vid_sub")}</p>
                    </div>
                </div>
                </div>
            </motion.div>
            </div>

        </div>
    )
}
export default Temoignages