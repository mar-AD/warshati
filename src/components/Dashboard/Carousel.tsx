

'use client';
import React, { useState } from "react";
import Card from "./Info&DataCards";
import { cardData } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCardsPerRow = 3;
  const totalCardsPerRow = 10;
  const rowCount = 2;

  const next = () => {
    if (startIndex + visibleCardsPerRow < totalCardsPerRow) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };


  const firstRow = cardData.slice(0, totalCardsPerRow);
  const visibleFirstRow = firstRow.slice(startIndex, startIndex + visibleCardsPerRow);


  const secondRow = cardData.slice(totalCardsPerRow, totalCardsPerRow * rowCount);
  const visibleSecondRow = secondRow.slice(startIndex, startIndex + visibleCardsPerRow);

  return (
    <div className="relative w-full flex flex-col h-full flex-1 min-h-0">
      <div className="flex justify-between items-center mb-6 pr-6">
        <h2 className="text-base font-semibold">Information & Data</h2>
        <div className="flex gap-2">
          <button onClick={prev} className="bg-white border shadow rounded-full p-2 hover:bg-purple-100">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} className="bg-violet-800 text-white border shadow rounded-full p-2 hover:bg-purple-500">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="overflow-x-hidden overflow-y-auto flex-1 scroll-container">
        <div className="flex flex-col gap-6 p-6 bg-gray-100">
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            {visibleFirstRow.map((card, i) => (
              <div key={`top-${i}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                <Card data={card} />
              </div>
            ))}
          </div>
          
          <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-14">
            {visibleSecondRow.map((card, i) => (
              <div key={`bot-${i}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
                <Card data={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;