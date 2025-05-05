"use client";

import { FiveFingers } from '../Icons';
import FingerLabelForm from './FingersLabelForm';

const LabelingFingers: React.FC = () => {
  return (
    <div className="flex items-center justify-around flex-wrap-reverse md:flex-nowrap">
      <div className="w-full xl:max-w-xl">
        <FingerLabelForm />
      </div>
      <div className="w-full md:max-w-md max-w-full">
        <FiveFingers />
      </div>
    </div>
  );
};

export default LabelingFingers;
