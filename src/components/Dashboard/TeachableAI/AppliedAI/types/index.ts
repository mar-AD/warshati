import { SVGProps } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  image_alt: string;
  url: string;
  implemented?: boolean;
}

export interface IconSvgProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

// export interface TrainingAccordionProps extends React.HTMLAttributes<HTMLDivElement> {}
export type TrainingAccordionProps = React.HTMLAttributes<HTMLDivElement>;


export interface AccordionTrainingItem {
  title: string;
  description: string;
}

export interface StepProviderProps {
  children: React.ReactNode;
}

export interface StepContextProps {
  currentStep: number;
  goToStep: (step: number) => void;
}

export interface CanvasProcessedFrameProps {
  processedImage: string;
}

export interface PreviewSectionProps {
  processFrameAction: (dataURL: string, additionalData?: any) => Promise<any>;
}

export interface StepperProps {
  step: number;
  labels: Array<String>;
  className?: String;
}

export interface StepperItemProps {
  step: number;
  index: number;
  label: String;
  last_idx: number;
}

export interface UploadImageProps {
  setProcessedImage: (image: string) => void;
  setIsImgLoaded: (isImgLoaded: boolean) => void;
  processFrameAction: (dataURL: string, additionalData?: any) => Promise<any>;
}

export interface VideoStreamProps {
  isLoaded: boolean;
  setProcessedImage: (image: string) => void;
  additionalData?: any;
}

export interface AddClassButtonProps {
  onClick?: () => void;
  label: string;
}

export interface ClassifyImagesProps {
  action: (dataURL: string, additionalData?: any) => Promise<any>;
}

export interface TrainFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  onTrainingSuccess: () => void;
}

export interface ClassBodyProps {
  imagesToDisplay: { id: string; url: string }[];
  isLoading: boolean;
  uploadProgress: number;
  handleDeleteImage: (imageId: string) => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isCapturing: boolean;
  countdown: number | null;
}

export interface ClassFooterProps {
  images: { id: string; url: string }[];
  imagesToDisplay: { id: string; url: string }[];
  handleLoadMore: () => void;
}

export interface ClassHeaderProps {
  className: string;
  setClassName: (value: string) => void;
  handleFileChange: (files: File[]) => void;
  removeClass: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  isLoading: boolean;
  onImageRemoveAll: () => void;
  images: { id: string; url: string }[];
  startWebcam: () => void;
  stopWebcam: () => void;
  isCapturing: boolean;
}

export interface ClassItemProps {
  removeClass: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  index: number;
  updateClassData: (
    index: number,
    data: { class_name: string; images: string[] }
  ) => void;
}

export interface ImageCardProps {
  image: { id: string; url: string };
  handleDeleteImage: (imageId: string) => void;
}
