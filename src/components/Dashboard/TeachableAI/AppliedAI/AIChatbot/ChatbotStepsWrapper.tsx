import React from 'react';
import StepProvider from '../providers/StepperProvider';
import { ChatbotProcessCard } from '..';

const ChatbotStepsWrapper = () => (
  <StepProvider>
    <ChatbotProcessCard />
  </StepProvider>
);

export default ChatbotStepsWrapper;
