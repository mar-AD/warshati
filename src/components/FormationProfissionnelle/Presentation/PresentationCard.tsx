import Image from "next/image";
import { presontationData1 } from "@/lib/data";

const PresentationCards = () => {
  return (
    <div className="bg-violet-800 py-16 px-28 md:px-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {presontationData1.map((item, index) => (
          <div key={index} className="flex items-center gap-6 bg-transparent p-6 rounded-lg shadow-md">

            <div className="w-5 h-5 md:w-16 md:h-16 flex-shrink-0 rounded-md bg-white-200">
              <Image src={item.image} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>

            <div>
              <h2 className="text-xl md:text-[.5rem] lg:text-2xl font-bold text-white">{item.text}</h2>
              <p className="text-gray-700 text-sm md:text-base mt-2">{item.discreption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentationCards;
