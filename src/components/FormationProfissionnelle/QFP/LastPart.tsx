import { FadeLeft, FadeRight } from "@/lib/animations"
import { motion } from "framer-motion"
import Image from "next/image"
import bubble from "/public/images/Formation/formation-19.png";
import robot from "/public/images/Home/digitalLab/robot1.png"
import contribution_1 from "/public/images/R&I/contributions/contribution_1.png"
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
        className={`lg:px-[7.25rem] py-20 px-5 font-Poppins gap-10 relative flex items-center justify-between overflow-hidden
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
                ${isSmallScreen && !isExtraSmallScreen ? "order-2 w-full" : "order-2 lg:w-1/2"}`}
        >
            <Image 
                className="w-full h-full rounded-none rounded-tr-[10rem] rounded-bl-[10rem] 
                    object-cover max-md:rounded-none max-md:rounded-tr-[6rem] max-md:rounded-bl-[6rem]"
                src={contribution_1} 
                alt="" 
            />
        </motion.div>

        <motion.div
            variants={FadeRight(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={`relative flex-shrink-0 h-[568px] flex justify-end
                ${isExtraSmallScreen ? "order-2 w-full" : ""}
                ${isSmallScreen && !isExtraSmallScreen ? "order-1 w-full" : "order-1 lg:w-1/2"}`}
        >
            <div className={`relative w-full h-[568px] flex ${isExtraSmallScreen || isSmallScreen ? "justify-start place-items-end" : "justify-left items-end"}`}>
                <Image 
                    className={`max-w-none ${isExtraExtraLargeScreen ? "!w-[350px]" : "!w-[321px]"}`}  
                    src={robot}  
                    alt="" 
                />

                <Image 
                className={`
                    absolute top-0 left-[65%] transform -translate-x-1/2 
                    ${isExtraExtraLargeScreen ? "top-[-10px] left-[65%] w-[480px]" : ""}
                    ${isExtraLargeScreen && !isExtraExtraLargeScreen ? "left-[65%] w-[450px]" : ""}
                    ${isLargeScreen && !isExtraLargeScreen && !isExtraExtraLargeScreen ? "left-[65%] w-[400px]" : ""}
                    ${isMediumScreen && !isLargeScreen && !isSmallScreen ? "left-[65%] w-[375px]" : ""}
                    ${isSmallScreen && !isLargeScreen && !isMediumScreen ? "w-[350px] left-[66%]" : ""}
                    ${isExtraSmallScreen ? "w-[280px] left-[66%]" : ""}
                `}
                src={bubble} 
                alt="" 
                />


                <div className={`absolute border border-violet-600 rounded-full 
                    ${isExtraSmallScreen ? "top-[12%] right-[10%]" : ""}
                    ${isSmallScreen && !isExtraSmallScreen ? "top-[17%] right-[20%]" : ""}
                    ${isMediumScreen && !isSmallScreen ? "top-[17%] right-[10%]" : ""}
                    ${isLargeScreen && !isMediumScreen && !isSmallScreen ? "top-[17%] right-[15%]" : ""}
                    ${isExtraLargeScreen && !isLargeScreen ? "top-[18%] right-[17%]" : ""}
                    ${isExtraExtraLargeScreen ? "top-[19%] right-[19%]" : ""}
                `}>


                    <p className={`p-4 text-violet-600  
                    ${isExtraSmallScreen ? "text-[10px]" : ""}
                    ${isSmallScreen && !isExtraSmallScreen ? "text-[15px]" : ""}
                    ${isMediumScreen && !isSmallScreen ? "text-[16px]" : ""}
                    ${isLargeScreen && !isMediumScreen ? "text-[16px]" : ""}
                    ${isExtraExtraLargeScreen ? "text-[18px]" : ""}
                    `}>
                        Accédez aux formations maintenant !
                    </p>
                </div>
                <Image 
                    className={`absolute scale-x-[-1]
                        ${isExtraSmallScreen ? "hidden" : ""}
                        ${isSmallScreen && !isExtraSmallScreen ? "hidden" : ""}
                        ${isMediumScreen && !isSmallScreen ? "top-[calc(4%+6rem)] right-[-8%] w-[14rem]" : ""}
                        ${isLargeScreen && !isMediumScreen && !isExtraSmallScreen && !isExtraExtraLargeScreen ? "top-[calc(3%+6rem)] right-[-4%] w-[17rem]" : ""}
                        ${isExtraLargeScreen ? "top-[calc(3%+6rem)] right-[-4%] w-80" : ""}
                        ${isExtraExtraLargeScreen ? "top-[calc(4%+6rem)] right-[-4%] w-80" : ""}
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