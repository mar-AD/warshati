"use client";

import React, { useEffect, useContext } from 'react';
import { useTranslations } from 'next-intl';
import Gather from './Gather';
import Train from './Train';
import { ImageClassifierPreview } from '.';
import Stepper from '../Stepper';
import { StepContext } from '../providers';
import useSession from '../utils/session';

const StepProgress = () => {
  const { currentStep } = useContext(StepContext);
  const t = useTranslations('appliedAI.process-steps');
  const t2 = useTranslations('appliedAI.classification');
  const { manageSession } = useSession();


  useEffect(() => {
    manageSession();
  }, []);

  return (
    <div className=' py-6 px-[30px]'>
      <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white mb-6">
        {t2("title")} <span className="text-blue-600 dark:text-blue-500">#</span>.
      </h1>
      <Stepper
        step={currentStep}
        labels={[
          t("gather"),
          t("training"),
          t("preview"),
        ]}
      />
      {currentStep === 0 && <Gather />}
      {currentStep === 1 && <Train />}
      {currentStep === 2 && <ImageClassifierPreview />}
    </div>
  );
};

export default StepProgress;
