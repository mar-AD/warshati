"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { StepContextProps, StepProviderProps } from "../types";
import { getPathWithoutLang } from "../utils";




export const StepContext = React.createContext<StepContextProps>({
  currentStep: 0,
  goToStep: () => { },
});

const StepProvider: React.FC<StepProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const storageKey = `currentStep_${getPathWithoutLang(pathname)}`;

  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const savedStep = localStorage.getItem(storageKey);
    const initialStep = savedStep ? Number(savedStep) : 0;
    setCurrentStep(initialStep);
  }, [storageKey]);

  const goToStep = (step: number) => {
    setCurrentStep(step);
    localStorage.setItem(storageKey, step.toString());
  };

  return (
    <StepContext.Provider value={{ currentStep, goToStep }}>
      <ToastContainer
        theme={theme}
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;
