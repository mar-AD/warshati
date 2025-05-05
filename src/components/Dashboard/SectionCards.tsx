import { CardDataType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Eye } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  data: CardDataType;
}

const Card: React.FC<Props> = ({ data }) => {
  const t = useTranslations("dashboard.digital_literacy")
  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden p-5 transition-colors">
      <Image src={data.image} alt={data.title} className="w-full h-40 object-cover rounded-2xl" />
      <div className="mt-4 relative min-h-[120px]">
        <h3 className="text-[15px] font-semibold text-purple-700 dark:text-purple-300 mb-2">{data.title}</h3>
        <p className="text-[11px] text-gray-600 dark:text-gray-300 mb-2">{data.description}</p>
        <button className="absolute bottom-0 right-0 bg-purple-600 dark:bg-purple-500 flex gap-1 items-center text-white text-[10px] px-4 py-2 rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition-all">
          {t("see_more")} <Eye size={16} />
        </button>
      </div>
    </div>
  );
};

export default Card;
