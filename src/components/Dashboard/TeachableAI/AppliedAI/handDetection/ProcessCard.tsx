"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { processFrameForFingerLabeling } from '../actions';
import Stepper from '../Stepper';
import { FingerLabelingTrainSection, FingerLabelSection, PreviewSection } from '..';
import { StepContext } from '../providers';


const ProcessCard = () => {
  const { currentStep } = React.useContext(StepContext);
  const t = useTranslations('appliedAI.process-steps');
  const t2 = useTranslations('appliedAI.finger-section');

  return (
    <div className='py-6 px-[30px]'>
      <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white mb-6">
        {t2("title")} <span className="text-blue-600 dark:text-blue-500">#</span>.
      </h1>
      <Stepper
        step={currentStep}
        labels={[
          t("labeling"),
          t("training"),
          t("preview"),
        ]}
      />
      {currentStep === 0 && <FingerLabelSection />}
      {currentStep === 1 && <FingerLabelingTrainSection />}
      {currentStep === 2 && (
        <PreviewSection processFrameAction={processFrameForFingerLabeling} />
      )}
    </div>
  );
};

export default ProcessCard;
