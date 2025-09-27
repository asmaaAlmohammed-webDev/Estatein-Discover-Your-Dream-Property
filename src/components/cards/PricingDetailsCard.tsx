import Additional from "../sharedComponents/Additional"
import Button from "../sharedComponents/Button"

interface PricingItem {
    label:string,
    value:string,
    description?:string,
}
interface PricingDetailsCardPopps{
    PricingItem : PricingItem[],
    title:string
}
function PricingDetailsCard({PricingItem,title}:PricingDetailsCardPopps) {
    const itemWidthClass = PricingItem.length > 2 ? "lg:w-[48.3686%]" : "md:w-full";
    return (
        <div className="p-5 md:p-10 xl:p-12.5 border border-Grey-15 rounded-xl ">
            <div className="flex justify-between items-center border-b border-Grey-15 pb-5">
                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold urbanist">{title}</h3>
                <Button content={"Learn More"} withBorder/>
            </div>
            <div className="flex flex-wrap ">
                {PricingItem.map((data, index) => {
                // number of cards in each row (1 or 2)
                const cardPerRow = PricingItem.length > 2 ? 2 : 1;
                // total number of rows
                const totalRows = Math.ceil(PricingItem.length / cardPerRow);
                // current row 
                const currentRow = Math.floor(index / cardPerRow);
                //true if this card in the last row
                const isLastRow = currentRow === totalRows - 1;
                return (
                    <div
                        key={index}
                        className={`w-full ${itemWidthClass}
                            ${!isLastRow ? "border-b border-Grey-15 py-5 md:py-7.5 xl:py-10" : "pt-5 md:pt-7.5 xl:pt-10 "}
                        `}
                    >
                        <Additional title={data.label} price={data.value} desc={data.description} 
                        className={`${PricingItem.length > 2 && index % 2 === 1 ? "lg:border-l border-Grey-15 lg:pl-5 " : ""}`}
                        data-aos="fade-right"
                        data-aos-delay={index * 100}
                        />
                    </div>
                );
            })}
            </div>
            
        </div>
    )
}

export default PricingDetailsCard