import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

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
  Icon: LucideIcon;
  link: string;
};
export type ContactType = {
  Icon: LucideIcon;
  value: string;
};
export type CurriculaType = {
  title: string;
  Icon: LucideIcon;
  description: string;
};
export type ParcoursType = {
  title: string;
  image: StaticImageData;
  description: string;
};

export interface ThematiqueType extends ParcoursType {
  imageBgColor: string;
}
export interface niveauxType extends ParcoursType {
  num: StaticImageData;
}
export interface IntScolaireType extends CurriculaType {
  bgColor: string;
  textColor: string;
}
export type FAQType = {
  title: string;
  content: string;
};
export type ageType = {
  ageRange: string;
  description: string;
  image: string;
};
