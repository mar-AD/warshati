
import StepProvider from "@/components/Dashboard/TeachableAI/AppliedAI/providers/StepperProvider";
import { StepProgress } from "@/components/Dashboard/TeachableAI/AppliedAI/ShapeClassification";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand recognition",
};

export default function ShapeClassification() {
  return (
    <section className="flex-col flex-grow self-start">
      <StepProvider>
        <StepProgress />
      </StepProvider>
    </section>
  );
}


