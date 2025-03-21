"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
}

const ProgressBar = ({ currentStep, totalSteps, onPrev }: ProgressBarProps) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed top-14 left-1/2 transform -translate-x-1/2 w-[60%] bg-gray-200 h-4 rounded-full flex items-center shadow-md">
      <div
        className="h-4 bg-violet-600 transition-all duration-300 rounded-full"
        style={{ width: `${progress}%` }}
      />
      
      {currentStep > 0 && (
        <button
          onClick={onPrev}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-violet-600 text-white p-2 rounded-full shadow-lg hover:bg-violet-700 transition"
        >
          ◄
        </button>
      )}
    </div>
  );
};

export default ProgressBar;
