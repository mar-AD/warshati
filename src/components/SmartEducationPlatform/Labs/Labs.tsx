"use client"
import Image from "next/image"
import flight from "/public/images/Home/hero/flight.png";
import FirstLibsSection from "./labsSection1";
import SecondLibsSection from "./labsSection2";
import ThirdLibsSection from "./labsSection3";




const Labs = () => {

    return (
        <>
        <div className="bg-light-gray pt-16 pb-16">
            <div className="relative">
                <div className="relative">
                    <Image src={flight} alt="" className=" absolute top-5 -left-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/>
                    <FirstLibsSection/>
                </div>
                <div className="relative pt-36">
                    <Image src={flight} alt="" className=" absolute top-44 -right-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72 scale-x-[-1]"/>
                    <SecondLibsSection/>
                </div>
                <div className="relative pt-36">
                    <Image src={flight} alt="" className=" absolute top-44 -left-0 w-[3.5rem] sm:w-[6rem] md:w-[10rem] lg:w-72"/>
                    <ThirdLibsSection/>
                </div>
            </div>
        </div>

        </>
    )
}

export default Labs