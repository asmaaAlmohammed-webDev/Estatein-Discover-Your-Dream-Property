export interface PricingCardItem {
    label: string;
    value: string;
    description?: string; 
}
export interface PricingDetailsSection {
    title: string;
    pricingCard: PricingCardItem[];
}
export interface PricingDetailsDataType {
    headline:string,
    description:string
    note: string;
    listingPrice: string;
    pricingDetailsCards: PricingDetailsSection[];
}

