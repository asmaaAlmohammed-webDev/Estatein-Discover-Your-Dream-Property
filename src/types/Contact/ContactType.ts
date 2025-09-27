import type {  ReactNode } from "react";

// ContactHero Type

export interface ContactHeroDataType {
  title: string;
  description: string;
}

export interface FeaturesType {
  arrow: ReactNode;
  icon: string;
  title: string | string[];
  link: string;
}

// let's connect section

export interface ConactFormType {
  id: string;
  name: string;
  label?: string;
  type: string;
  placeholder: string;
  icon?: ReactNode;
  options?: string[];
  // location?: ReactNode;
  required?: boolean;
}

export interface ContactLetsConnectFormDataType {
  conactForm: ConactFormType[];
  boxCheck?: ConactFormType[];
  areaText: ConactFormType;
}


// office location section

export interface ContactDetailesType {
  icon: ReactNode;
  title: string[];
}

export interface CategoriesCardType {
  id: string;
  title: string;
  address: string;
  description: string;
  contactDetailes: ContactDetailesType[];
  button: {
    text: string;
    link: string;
  };
}

export interface ContactDiscoverLocationsFilterDataType {
  FilterOptions: string[];
  categoriesCard: CategoriesCardType[];
}

export interface ContactDiscoverLocationsFilterDataType {
  FilterOptions: string[];
  categoriesCard: CategoriesCardType[];
}

// Explore Estatein's World

export interface ContactExplorePhotosType {
  id: string;
  image: string;
}

export interface ContactExplorePhotosDataType {
  photos: ContactExplorePhotosType[];
  contactExploreEstateinData: ContactHeroDataType;
  titlePhoto: string;
}
