import PricingDetailsCard from "../../components/cards/PricingDetailsCard"
interface PricingItem {
    label:string,
    value:string,
    description?:string,
}
interface Pricing{
    title:string,
    pricingCard: PricingItem[];
}
interface props {
    note:string,
    listingPrice:string,
    Pricing:Pricing[],
}
function PricingDetails({note,listingPrice,Pricing}:props) {
    return (
        <div className="flex flex-col gap-10 md:gap-14.5 xl:gap-20">
            <div className="flex flex-col gap-y-7.5 md:gap-y-10 xl:gap-y-12.5">
                <div className="flex md:flex-row flex-col md:items-center py-6 px-5 md:py-5 md:px-10 xl:py-7.5 xl:px-12.5 bg-Grey-10 border border-Grey-15 rounded-lg">
                    <span className="pb-2 mb-2 md:pb-0 md:mb-0 md:pr-4 md:mr-4 xl:pr-5 xl:mr-5 border-b md:border-b-0 md:border-r border-Grey-15 text-lg md:text-xl xl:text-2xl font-semibold" data-aos="fade-up">Note</span>
                    <p className="font-medium text-sm xl:text-lg text-Grey-60" data-aos="fade-right">{note}</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 justify-between">
                    <div>
                        <p className="text-sm md:text-base xl:text-xl font-medium text-Grey-60">Listing Price</p>
                        <span className="font-semibold text-2xl md:text-3xl xl:text-[40px] text-White">{listingPrice}</span>
                    </div>
                    <div className="lg:w-[83.082%] w-full flex flex-col gap-y-5 md:gap-y-10 xl:gap-y-12.5">
                            {Pricing.map((card,index) => {
                            return(
                                <PricingDetailsCard key={index} PricingItem={card.pricingCard} title={card.title} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingDetails
