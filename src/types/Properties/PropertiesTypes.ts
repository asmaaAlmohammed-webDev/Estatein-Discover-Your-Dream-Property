import type { ComponentType, ReactElement, ReactNode } from "react";

export interface PropertiesData {
    heroSection: HeroSection;
    searchSection: SearchSection;
    searchFilterSection: SearchFilterSection;
    propertySliderSection: PropertySliderSection;

}


export interface CTAButton {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    icon?: string | ReactElement | ComponentType<{ className?: string }>;
}
export interface CustomSelectOption {
    value: string;
    label: string;
} 

export type InputType =
    | 'text'
    | 'email'
    | 'tel'
    | 'select'
    | 'checkbox'
    | 'textarea';

export interface FormField {
    id: string;
    label?: string;
    placeholder: string;
    type: InputType;
    icon?:ReactNode;
    required?: boolean;
    options?: string[];
    name: string; 
}
export interface FieldSection {
    img?: string;
    sectionTitle: string;
    sectionDescription: string;
    formFields: FormField[];
    submitButton: CTAButton;

}

export interface HeroSection {
    mainTitle: string;
    description: string;
}


export interface SearchSection {
    searchField: Omit<FormField, 'label' | 'name' | 'required'> & {
        type: 'text';
    };
    searchButton: CTAButton;
}


export interface PropertySliderSection {
    img?: string;
    sectionTitle: string;
    sectionDescription: string;
    cards: PropertyCard[];
}


export interface PropertyCard {
    id: number;
    image: string;
    smallTitle: string;
    mainTitle: string;
    description: string;
    price: string;
    button: CTAButton;
}
export interface SearchFilterSection {
    sectionTitle?: string;
    formFields: FormField[];
    submitButton?: CTAButton; 
}










