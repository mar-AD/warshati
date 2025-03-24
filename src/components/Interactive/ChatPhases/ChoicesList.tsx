import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { CommencerDataType } from "@/lib/types";

type CommencerListProps = {
    data: CommencerDataType[];
    onSelect: (reply: string) => void;
};

const CommencerList = ({ data, onSelect }: CommencerListProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number, reply: string) => {
        setSelectedIndex(index);
        onSelect(reply);
    };

    return (
        <div className="flex flex-col gap-4 max-md:mt-5">
            {data.map((item, index) => (
                <motion.div
                    key={index}
                    className={`flex items-center justify-between gap-4 p-4 border rounded-3xl transition-all duration-300 hover:cursor-pointer
                        ${selectedIndex === index ? "bg-[#A678E3]/30 border-[#A678E3] border-2" : "border-[#A678E3]"}
                    `}
                    onClick={() => handleClick(index, item.reply)}
                    whileTap={{ scale: 0.95 }}
                >
                    <p className="font-bold text-[18px] max-md:text-xs">{item.text}</p>
                    <Image className=" lg:w-[50px] lg:h-[50px] max-md:w-8 max-md:h-8" src={item.image} alt={item.text} width={50} height={50} />
                </motion.div>
            ))}
        </div>
    );
};

export default CommencerList;
