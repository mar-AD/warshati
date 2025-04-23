
import { CardDataType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Eye } from "lucide-react";

interface Props {
  data: CardDataType;
}

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-5 lg:h-[292px]">
      <Image src={data.image} alt={data.title} className="w-full h-32 object-cover rounded-2xl" />
      <div className="mt-4">
        <h3 className="text-[15px] font-semibold text-purple-700 mb-2">{data.title}</h3>
        <p className="text-[11px] text-gray-600 mb-2">{data.description}</p>
        <button className="bg-purple-600 flex gap-1 items-center text-white text-[10px] px-4 py-2 rounded-full mt-4 float-right hover:bg-purple-700 transition-all">
          See More <Eye size={16} />
        </button>
      </div>
    </div>
  );
};

export default Card;
