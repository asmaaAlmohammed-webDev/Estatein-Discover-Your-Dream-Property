import FeaturesSection from "./FeaturesSection";
import DescriptionSection from "./DescriptionSection";
import type { PropertyDetailsType } from "../../types/PropertyDetails/PropertyDetailsTypes";

export default function PropertyInfoSection({data}:{data:PropertyDetailsType}) {
  return (
      <div className="flex flex-col lg:flex-row justify-between gap-y-5">
          <DescriptionSection
            title="Description"
            description={data.description?.description || ""}
            details={data.description?.details || []}
          />
          <FeaturesSection
            title="Key Features and Amenities"
            features={data.description?.features || []}
          />
      </div>
    
  );
}