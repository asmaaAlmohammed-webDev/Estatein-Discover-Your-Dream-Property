import FeatureColumn from "../../components/sharedComponents/FeaturesColumn";
import type { FeaturesType } from "../../types/PropertyDetails/PropertyDetailsTypes";

type FeaturesSectionProps = { title: string; features: FeaturesType[] };

export default function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <div className="rounded-xl  lg:w-[49.0601%] w-full border border-Grey-15 p-5 lg:p-10 xl:p-12.5  flex flex-col gap-5 md:gap-10 xl:gap-12.5 bg-Grey-08">
      <h2 className="text-White text-lg md:text-xl xl:text-2xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-4.5 md:gap-5 xl:gap-7.5">
        {features.map((feature, index) => (
          <FeatureColumn key={index} icon={feature?.icon} label={feature?.label} 
          data-aos="fade-right"
          data-aos-delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
}