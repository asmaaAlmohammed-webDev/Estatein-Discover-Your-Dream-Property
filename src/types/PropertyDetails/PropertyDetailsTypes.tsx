import type { JSX } from "react";

export interface PropertyImagesType {
    image: string;
}
export interface DetailsType {
    icon: JSX.Element;
    label: string ;
    value : string;
}
export interface FeaturesType {
    icon: JSX.Element;
    label: string ;
}
export interface DescriptionType {
    description: string;
    details : DetailsType[];
    features: FeaturesType[];
}
export interface PropertyDetailsType {
    title : string,
    location:string,
    price:string,
    PropertyImages?:PropertyImagesType[],
    description?: DescriptionType
}