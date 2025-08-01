"use client"

import { GrRadialSelected } from "react-icons/gr";
import { FaCircleCheck } from "react-icons/fa6";
import { FC } from "react";
import { StepperItemProps, StepperProps } from "./types";



const Stepper: FC<StepperProps> = ({ step, labels, className }) => {
  return (
    <ol className={`${className} flex justify-between items-center w-full text-lg my-8  font-medium text-center text-gray-500 dark:text-gray-400`}>
      {
        labels.map((lbl, index) => {
          return (
            <StepperItem step={step} index={index} label={lbl} key={index} last_idx={labels.length - 1} />
          );
        })
      }
    </ol>
  )
}



const StepperItem: FC<StepperItemProps> = ({ step, index, label, last_idx }) => {
  return (
    <li className={`flex items-center after:rounded-lg ${(index === 0 || step >= index) ? 'text-blue-600 dark:text-blue-500' : ''} ${index !== last_idx ? "md:w-full sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 " : ''} ${(step > index) ? 'after:bg-blue-500 after:border-blue-700' : 'dark:after:border-gray-700'}`}>

      <span>
        {
          (step > index || step === last_idx) ? <FaCircleCheck className="mr-3" /> : <GrRadialSelected className="mr-3" />
        }
      </span>

      <span className={`${index === 0 ? "!min-w-max flex items-center after:content-[' / '] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500" : 'me-2'}`}>
        {label}
      </span>
    </li>
  );
}



export default Stepper