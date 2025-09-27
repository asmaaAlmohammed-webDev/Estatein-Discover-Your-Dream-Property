import type { PropertyDetailsType } from "../types/PropertyDetails/PropertyDetailsTypes";
import PropertyInfoSection from "./FeatureAndDesc/PropertyInfoSection";
import PropertyDetailsSlider from "./propertiesDetails/PropertyDetailsSlider";

function Images({data}:{data:PropertyDetailsType}) {
    return (
        <section className="pt-[128px] lg:pt-[157px] xl:pt-[220px] px-[4.1025%] md:px-[5.5555%] xl:px-[8.4375%] flex flex-col justify-between  gap-5 xl:gap-7.5 ">
            <PropertyDetailsSlider data={data}/>
            <PropertyInfoSection data={data}/>
        </section>
    )
}

export default Images