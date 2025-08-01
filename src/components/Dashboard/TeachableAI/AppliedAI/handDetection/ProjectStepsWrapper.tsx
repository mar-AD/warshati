import React from 'react';
import StepProvider from '../providers/StepperProvider';
import { ProcessCard } from '..';

const ProjectStepsWrapper = () => (
  <StepProvider>
    <ProcessCard />
  </StepProvider>
);

export default ProjectStepsWrapper;
