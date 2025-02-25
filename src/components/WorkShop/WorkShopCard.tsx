import { ageType } from "@/lib/types";
import Image from "next/image";
import React from "react";


const WorkShopCard: React.FC<ageType> = ({ ageRange, description,image }) => {
  return (
    <div className="border rounded-xl px-2 py-8 hover:bg-violet-800 group font-Poppins transition-colors flex flex-col items-center gap-4 duration-300 relative">
        <Image src={image} className="absolute -top-28 rounded-full border border-violet-800 w-32 h-32 object-cover" width={100} height={100} alt="" />
      <h3 className="mb-2 bg-violet-800 py-2.5 tracking-wider px-6 text-sm rounded-full w-fit text-white group-hover:bg-white group-hover:text-violet-800 font-medium duration-300 transition-colors">{ageRange}</h3>
      <p className="text-gray-700 group-hover:text-white">{description}</p>
    </div>
  );
};

export default WorkShopCard;