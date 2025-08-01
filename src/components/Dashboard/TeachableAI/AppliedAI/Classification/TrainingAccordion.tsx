
import { Accordion, AccordionItem } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { AccordionTrainingItem, TrainingAccordionProps } from '../types';

const TrainingAccordion = ({ ...props }: TrainingAccordionProps) => {
  const t = useTranslations("appliedAI.classification.train");


  const accordionItems = t.raw("accordion");

  return (
    <Accordion defaultExpandedKeys={["0"]} {...props} variant="light">
      {
        accordionItems.map((item: AccordionTrainingItem, index: number) => (
          <AccordionItem key={index} aria-label={item.title} title={item.title}>
            {item.description}
          </AccordionItem>
        ))
      }
    </Accordion>
  );
};

export default TrainingAccordion;
