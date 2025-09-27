
// our value card type

import type { ReactNode } from "react";

export interface valueCard {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}
export interface OurValueSectionType {
  headline: string;
  description: string;
  values: valueCard[];
}

// Our Achievements card type

export interface OurAchievementsCard {
  id: string;
  title: string;
  description: string;
}

export interface OurAchievementsSectionType {
  headline: string;
  description: string;
  properties: OurAchievementsCard[];
}

// Navigating the Estatein Experience card type

export interface NavigatingEstateinExperienceCard {
  id: number;
  title: string;
  description: string;
}
export interface NavigatingEstateinExperienceSectionType {
  headline: string;
  description: string;
  steps: NavigatingEstateinExperienceCard[];
}

// Meet the Estatein Team card type

export interface MeetEstateinTeamCard {
  id: string;
  image: string;
  name: string;
  job: string;
}
export interface MeetEstateinTeamCardSectionType {
  headline: string;
  description: string;
  properties: MeetEstateinTeamCard[];
}

// Our Valued Clients card type

export interface SubCard {
  icon: string;
  subTitle: string;
  title: string;
}

export interface Button {
  text: string;
  link: string;
}
export interface navigation {
  prevLink: string;
  nextLink: string;
}
export interface OurValuedClientsCard {
  id: string;
  date: string;
  button: Button;
  title: string;
  subCards: SubCard[];
  whatSay: string;
  say: string;
}
export interface OurValuedClientsSectionType {
  headline: string;
  description: string;
  properties: OurValuedClientsCard[];
}
