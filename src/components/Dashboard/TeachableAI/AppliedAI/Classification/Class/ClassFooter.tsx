import React from 'react';
import { CardFooter, Button } from '@nextui-org/react';
import { TbPlayerTrackNext } from "react-icons/tb";
import { useTranslations } from 'next-intl';
import { IMAGE_PER_PAGE } from '../../config/constants';
import { ClassFooterProps } from '../../types';

const ClassFooter: React.FC<ClassFooterProps> = ({
  images,
  imagesToDisplay,
  handleLoadMore,
}) => {
  const t = useTranslations("appliedAI.classification.class_item");
  return (
    <CardFooter className="gap-3 flex justify-between">
      <div className="flex gap-1">
        <p className="font-semibold text-default-400 text-small">{images.length}</p>
        <p className="text-default-400 text-small"> {t("images_uploaded")} </p>
      </div>
      {(images.length > imagesToDisplay.length && imagesToDisplay.length % IMAGE_PER_PAGE === 0) && (
        <Button radius='sm' endContent={<TbPlayerTrackNext />} variant='ghost' size='sm' onClick={handleLoadMore}>
          {t("load_more")}
        </Button>
      )}
    </CardFooter>
  );
};

export default ClassFooter;
