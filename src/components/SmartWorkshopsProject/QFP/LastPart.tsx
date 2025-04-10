import { FadeLeft, FadeRight } from "@/lib/animations"
import { motion } from "framer-motion"
import Image from "next/image"
import bubble from "/public/images/SmartWorkshopsProject/bubble.png";
import robot from "/public/images/Home/curricula/robot_2.png"
import article_1 from "/public/images/Blog/articles/article_2.jpg"
import circles from "/public/images/Home/digitalLab/circles.png"
import arrow from "/public/images/Formation/formation-arrow.png"
import useMediaQuery from "@/lib/UseMediaQuery";

const LastPart = () => {
    const isExtraSmallScreen = useMediaQuery("(max-width: 750px)");
    const isSmallScreen = useMediaQuery("(min-width: 751px) and (max-width: 1200px)");
    const isMediumScreen = useMediaQuery("(min-width: 1200px) and (max-width: 1400px)");
    const isLargeScreen = useMediaQuery("(min-width: 1400px) and (max-width: 1550px)");
    const isExtraLargeScreen = useMediaQuery("(min-width: 1550px) and (max-width: 1800px)");
    const isExtraExtraLargeScreen = useMediaQuery("(min-width: 1800px)");

return (
    <div
        className={`  lg:px-[7.25rem] py-20 px-5 font-Poppins gap-10 relative flex items-center justify-between overflow-hidden
        ${isSmallScreen ? "flex-col-reverse" : "lg:flex-row flex-col"}`}
    >
        <Image className="absolute -top-14 -left-60" src={circles} alt="" />
        <Image className="absolute z-[-1] -bottom-0 -right-28" src={circles} alt="" />

        <motion.div
            variants={FadeLeft(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`w-full  flex items-center justify-center 
                ${isExtraSmallScreen ? "order-2 w-full h-auto" : "h-[568px]"}
                ${isSmallScreen && !isExtraSmallScreen ? "order-2 w-full" : "order-2 lg:w-2/5"}`}
        >
            <Image 
                className="w-full h-full rounded-none rounded-tr-[4rem] rounded-bl-[4rem] 
                    max-md:rounded-none max-md:rounded-tr-[6rem] max-md:rounded-bl-[6rem] lg:rounded-none lg:rounded-tr-[6rem] lg:rounded-bl-[6rem]"
                src={article_1} 
                alt="" 
            />
        </motion.div>

        <motion.div
            variants={FadeRight(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`relative flex-shrink-0 h-[520px] sm:h-[568px] md:h-[568px] lg:h-[568px] flex justify-end
                ${isExtraSmallScreen ? "order-2 w-full" : ""}
                ${isSmallScreen && !isExtraSmallScreen ? "order-1 w-full" : "order-1 lg:w-3/5"}`}
        >
            <div className={`relative w-full h-full flex ${isExtraSmallScreen || isSmallScreen ? "justify-start place-items-end" : "justify-left items-end"}`}>
                <Image 
                    className={`max-w-none ${isExtraExtraLargeScreen ? "!w-[400px]" : "!w-[400px]"}`}  
                    src={robot}  
                    alt="" 
                />

                <Image 
                className={`
                    absolute top-0 left-[60%] transform -translate-x-1/2 
                    ${isExtraExtraLargeScreen ? "top-[-10px] left-[60%] w-[480px]" : ""}
                    ${isExtraLargeScreen && !isExtraExtraLargeScreen ? "left-[60%] w-[450px]" : ""}
                    ${isLargeScreen && !isExtraLargeScreen && !isExtraExtraLargeScreen ? "left-[60%] w-[400px]" : ""}
                    ${isMediumScreen && !isLargeScreen && !isSmallScreen ? "left-[60%] w-[375px]" : ""}
                    ${isSmallScreen && !isLargeScreen && !isMediumScreen ? "w-[400px] left-[66%]" : ""}
                    ${isExtraSmallScreen ? "w-[280px] left-[60%]" : ""}
                `}
                src={bubble} 
                alt="" 
                />


                <div className={`absolute border border-violet-600 rounded-full 
                    ${isExtraSmallScreen ? "top-[15%] right-[19%]" : ""}
                    ${isSmallScreen && !isExtraSmallScreen ? "top-[21%] right-[20%]" : ""}
                    ${isMediumScreen && !isSmallScreen ? "top-[21%] right-[14%]" : ""}
                    ${isLargeScreen && !isMediumScreen && !isSmallScreen ? "top-[21%] right-[22%]" : ""}
                    ${isExtraLargeScreen && !isLargeScreen ? "top-[25%] right-[24%]" : ""}
                    ${isExtraExtraLargeScreen ? "top-[25%] right-[26%]" : ""}
                `}>


                    <p className={`p-4 text-violet-600  
                    ${isExtraSmallScreen ? "text-[10px]" : ""}
                    ${isSmallScreen && !isExtraSmallScreen ? "text-[15px]" : ""}
                    ${isMediumScreen && !isSmallScreen ? "text-[16px]" : ""}
                    ${isLargeScreen && !isMediumScreen ? "text-[16px]" : ""}
                    ${isExtraExtraLargeScreen ? "text-[18px]" : ""}
                    `}>
                        Lance-toi dans un projet maintenant !
                    </p>
                </div>
                <Image 
                    className={`absolute scale-x-[-1]
                        ${isExtraSmallScreen ? "hidden" : ""}
                        ${isSmallScreen && !isExtraSmallScreen ? "hidden" : ""}
                        ${isMediumScreen && !isSmallScreen ? "top-[calc(8%+6rem)] right-[-8%] w-[14rem]" : ""}
                        ${isLargeScreen && !isMediumScreen && !isExtraSmallScreen && !isExtraExtraLargeScreen ? "top-[calc(7%+6rem)] right-[-4%] w-[17rem]" : ""}
                        ${isExtraLargeScreen ? "top-[calc(10%+6rem)] right-[-4%] w-80" : ""}
                        ${isExtraExtraLargeScreen ? "top-[calc(10%+6rem)] right-[-4%] w-80" : ""}
                    `}
                    src={arrow} 
                    alt="" 
                />

            </div>
        </motion.div>
    </div>
);
};


export default LastPart