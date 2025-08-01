import React from 'react';
import Image from 'next/image';
import { MdDelete } from 'react-icons/md';
import { ImageCardProps } from './types';

const ImageCard: React.FC<ImageCardProps> = ({ image, handleDeleteImage }) => {
  return (
    <div className="flex-shrink-0 relative group">
      <Image
        width={500}
        height={500}
        alt="Uploaded Image"
        src={image.url}
        className="w-[140px] h-[140px] rounded-md"
      />
      <div className="absolute top-1 right-1 invisible group-hover:visible">
        <button onClick={() => handleDeleteImage(image.id)}>
          <MdDelete className='shadow-lg' color="white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
