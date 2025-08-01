
import ProjectStepsWrapper from "@/components/Dashboard/TeachableAI/AppliedAI/handDetection/ProjectStepsWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand Recognition",
};

const HandRecognition = () => {
  return (
    <section className="flex flex-col flex-grow">
      <ProjectStepsWrapper />
    </section>
  );
};

export default HandRecognition;
