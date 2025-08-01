"use client";

import React, { useEffect, useActionState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { StepContext } from '../providers/StepperProvider';
import { useTranslations } from 'next-intl';
import { IoReturnDownForwardOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import SubmitButton from '../SubmitButton';
import { sendFingersLabels } from '../actions/finger_labeling';
import 'react-toastify/dist/ReactToastify.css';


const FingerLabelForm: React.FC = () => {
  const t = useTranslations('appliedAI.finger-section');
  const { goToStep } = React.useContext(StepContext);
  const [isTrained, setIsTrained] = React.useState(false);

  const initialState = {
    success: false,
    data: {
      uuid: "",
      dict_name: "",
      fingers: []
    }
  };

  const [state, formAction] = useActionState(sendFingersLabels, initialState);

  useEffect(() => {
    if (state.success) {
      const { uuid, dict_name, fingers } = state.data;
      toast.success(`Success: ${uuid}`);

      localStorage.setItem('dicts', JSON.stringify({
        ...JSON.parse(localStorage.getItem('dicts') || '{}'),
        [uuid]: { dict_name, fingers }
      }));

      goToStep(1);
    }

    const isTrained = localStorage.getItem('dicts');
    if (isTrained) {
      setIsTrained(true);
    }
  }, [state.success, goToStep, state]);

  return (
    <div>
      <h1 className="my-6 text-lg font-medium leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
        {t('create_dict')}
      </h1>
      <form action={formAction}>
        <Input label={t("dict_placeholder")} className="pb-3 sm:mb-1" isRequired required name='dict_name' />
        <p className="py-2 dark:text-white/50">{t('dict_desc')}</p>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <Input
              label={`${t('finger_placeholder')} ${index + 1}`}
              maxLength={20}
              isRequired
              required
              key={index}
              name={`finger`}
              type="text"
              variant="bordered"
              color="primary"
            />
          ))}
        </div>
        <div className='flex w-full gap-4 mt-5'>
          <SubmitButton message={t('send')} pending_message={t('sending')} className='p-1' />
          {isTrained && (
            <Button color="success" className='px-8' onClick={() => goToStep(1)}>
              {t('g_train')} <IoReturnDownForwardOutline />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FingerLabelForm;
