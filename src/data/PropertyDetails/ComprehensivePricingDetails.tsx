import type { PricingDetailsDataType } from "../../types/PropertyDetails/ComprehensivePricingDetailsTypes";

export const ComprehensivePricingDetails : PricingDetailsDataType = {
    headline: "Comprehensive Pricing Details",
    description:"At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision",
    note : "The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.",
    listingPrice: "$1,250,000",
    pricingDetailsCards : [
            {
                title : "Additional Fees",
                pricingCard : [
                    {
                        label : "Property Transfer Tax" ,
                        value : "$25,000",
                        description :"Based on the sale price and local regulations",
                    },
                    {
                        label : "Legal Fees" ,
                        value : "$3,000",
                        description :"Approximate cost for legal services, including title transfer",
                    },
                    {
                        label : "Home Inspection" ,
                        value : "$500",
                        description :"Recommended for due diligence",
                    },
                    {
                        label : "Property Insurance" ,
                        value : "$1,200",
                        description :"Annual cost for comprehensive property insurance",
                    },
                    {
                        label : "Mortgage Fees" ,
                        value : "Varies",
                        description :"If applicable, consult with your lender for specific details",
                    },
                ],
                
            },
            {
                title : "Monthly Costs",
                pricingCard : [
                    {
                        label : "Property Taxes" ,
                        value : "$1,250",
                        description :"Approximate monthly property tax based on the sale price and local rates",
                    },
                    {
                        label : "Homeowners' Association Fee" ,
                        value : "$300",
                        description :"Approximate cost for legal services, including title transfer",
                    },
                ],
                
            },
            {
                title : "Total Initial Costs",
                pricingCard : [
                    {
                        label : "Listing Price" ,
                        value : "$1,250,000",
                        description :"",
                    },
                    {
                        label : "Additional Fees" ,
                        value : "$29,700",
                        description :"Property transfer tax, legal fees, inspection, insurance",
                    },
                    {
                        label : "Down Payment" ,
                        value : "$250,000",
                        description :"20%",
                    },
                    {
                        label : "Property Insurance" ,
                        value : "$1,200",
                        description :"Annual cost for comprehensive property insurance",
                    },
                    {
                        label : "Mortgage Amount" ,
                        value : "$1,000,000",
                        description :"If applicable",
                    },
                ],
                
            },
            {
                title : "Monthly Expenses",
                pricingCard : [
                    {
                        label : "Property Taxes" ,
                        value : "$1,250",
                        description :"",
                    },
                    {
                        label : "Homeowners' Association Fee" ,
                        value : "$300",
                        description :"Property transfer tax, legal fees, inspection, insurance",
                    },
                    {
                        label : "Mortgage Payment" ,
                        value : "Varies based on terms and interest rate",
                        description :"If applicable",
                    },
                    {
                        label : "Property Insurance" ,
                        value : "$100",
                        description :"Approximate monthly cost",
                    },
                ],
                
            },
        ],
}
