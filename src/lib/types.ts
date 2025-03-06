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

export interface ThematiqueType extends ParcoursType {
  imageBgColor: string;
}
export interface niveauxType extends ParcoursType {
  num: StaticImageData;
  bgColor: string;
  borderColor: string;
}
export interface IntScolaireType extends CurriculaType {
  bgColor: string;
  textColor: string;
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
  description:string
  image:StaticImageData
  delay:number
}
export type articleType={
  title:string,
  name:string
  date:string
  image:string
}