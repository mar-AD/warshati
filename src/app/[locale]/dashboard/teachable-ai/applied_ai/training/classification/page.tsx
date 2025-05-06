
import { StepProgress } from "@/components/Dashboard/TeachableAI/AppliedAI/Classification";
import StepProvider from "@/components/Dashboard/TeachableAI/AppliedAI/providers/StepperProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand recognition",
};

export default function Classification() {
  return (
    <section className="flex-col flex-grow self-start">
      <StepProvider>
        <StepProgress />
      </StepProvider>
    </section>
  );
}


