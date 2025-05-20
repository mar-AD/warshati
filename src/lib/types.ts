import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type NavType = {
  label: string;
  link: string;
  selected?: boolean;
};

export type LanguageType = {
  code: string;
  name: string;
  flag: string;
};
export type DashLanguageType = {
  code: string;
  flag: StaticImageData;
};
export type SocialType = {
  Icon: LucideIcon|IconType;
  link: string;
  followers?:number
};
export type ContactType = {
  Icon: LucideIcon;
  value: string;
};
export type CurriculaType = {
  title: string;
  Icon: LucideIcon;
  description: string;
  delay: number;
};
export type ParcoursType = {
  title: string;
  image: StaticImageData;
  description: string;
  delay?: number;
};
export type FormationType = {
  title: string;
  image: StaticImageData;
  description: string;
  delay?: number;
};

export interface ThematiqueType extends ParcoursType {
  imageBgColor: string;
}
export interface niveauxType extends ParcoursType {
  num: StaticImageData;
  bgColor: string;
  borderColor: string;
}
export interface IntScolaireType {
  bgColor: string;
  textColor: string;
  title: string;
  Icon: StaticImageData;
  description: string;
  delay: number;
}
export type FAQType = {
  title: string;
  content: string;
  delay:number
};
export type ageType = {
  ageRange: string;
  description: string;
  image: string;
  delay: number;
};

export type PrioritairesType = {
  title: string;
  description: string;
  delay:number
};

export type QuestionType={
  question: string;
  answer: string;
}
export type TestimonialsType={
  name: string;
  description?:string
  image:StaticImageData
  delay:number
}
export type articleType={
  title:string,
  name:string
  date:string
  image:string
}

export type CommencerDataSetType = {
  question: string;
  answers: CommencerDataType[];
};

export type CommencerDataType = {
  text: string,
  reply: string,
  delay: number,
  image: StaticImageData
}

export type CommencerCardType = {
  leftText:string,
  cardText: string,
  icon: StaticImageData
}

//this is all for the thirdPhaseDatatType ----
export type FinalCardType = {
  text: string;
  icon: StaticImageData;
};

export type NextCardType = {
  leftText: string;
  cardText: string;
  icon: StaticImageData;
  image: StaticImageData;
  timeout: number;
  finalCards: FinalCardType[];
};

export type ChoiceType = {
  text?: string;
  leftText?: string;
  nextCard?: NextCardType;
};

export type ChoiceType_2 = {
  text?: string;
  leftText: string;
  nextCard: NextCardType;
};

export type FirstCardType = {
  leftText: string;
  cardText: string;
  icon: StaticImageData;
  image: StaticImageData;
  timeout: number;
};

// final ---
export type ThirdPhaseDataType = {
  firstCard: FirstCardType;
  choices: Array<ChoiceType>;
};

export type Presentation1Type = {
  image: StaticImageData;
  text: string;
  discreption: string
}

export type Presentation2Type = {
  image: StaticImageData;
  text: string;
}

export interface ObjectifDuProgrammeDataType extends Presentation1Type {
  color: string;
  delay: number;
}

export type SmartWorkshopsProgramDataType = {
  title: string;
  content: string;
  image: StaticImageData;
};

//for nos programes objective section

type SubObjective = {
  number: number;
  text: string;
};

export type ProgramObjective = {
  objective: string;
  Activités: SubObjective[];
};

export type ProgrrmFeaturesData = {
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
  color: string
};

export interface LmsDataType extends Presentation2Type {
  color: string
}

export interface ComposantesDuProgrammeDataType extends FormationType {
  color: string
}


export type Article = {
  slug: string;
  article: string;
  title: string;
  date: string;
  content: {
    intro: string;
    theoryAndPractice?: string;
    head?: string;
    head_content?: string[];
    head_1?: string;
    head_1_content?: string[];
    head_2?: string;
    head_2_content?: string | string[];
    head_3?: string;
    head_3_content?: string;
    projects?: {
      name: string;
      description: string;
    }[];
  };
};

export interface WarshatiCardType {
  number: string
  title: string
  subtitle: string
  content?: string
  list?: string[]
  button: string
}


export interface MergedCard {
  text?: string
  leftText: string
  cardText: string
  icon: StaticImageData
  image: StaticImageData
  timeout: number
  finalCards: {
    text: string
    icon: StaticImageData
  }[]
}

export interface CardDataType {
  title: string;
  description: string;
  image: StaticImageData;
}


export interface CardDataType0 extends CardDataType  {
  href: string
}


export type NavItem = {
  name: string;
  href: string;
  icon?: StaticImageData;
};




export interface FileItem {
  id: string;
  name: string;
  type: string;
  tags: string[];
  date: string;
  isFolder: boolean;
  children: FileItem[];
  content?: string;
}

export interface AddTagModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (tag: string) => void;
}

export interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  file: FileItem | null;
}

export interface FileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (name: string, type?: string) => void;
  isFolder: boolean;
  existingNames: string[];
}
