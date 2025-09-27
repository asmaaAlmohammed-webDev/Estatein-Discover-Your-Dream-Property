import type { FeaturesType } from "../../types/PropertyDetails/PropertyDetailsTypes";

export default function FeatureColumn({ icon, label,...aos }: FeaturesType) {
  return (
    <div
      {...aos}
      className="
        group
        flex items-center gap-2.5 py-2.5 px-3 md:py-3.5 md:px-4 xl:py-4.5 xl:px-6 border-l border-Purple-60 
        transition-all duration-300 ease-out 
        hover:scale-[1.03] hover:shadow-[0_0_12px_rgba(186,104,255,0.4)]
        hover:border-Purple-60 
      "
      style={{
        background:
          "linear-gradient(90deg, var(--color-Grey-10) 0%, rgba(26, 26, 26, 0) 100%)",
      }}
    >
      <span
        className="
          flex-shrink-0 
          transition-all duration-300 
          group-hover:text-Purple-60
        "
      >
        {icon}
      </span>
      <p className="text-Grey-60 text-sm md:text-base xl:text-lg">{label}</p>
    </div>
  );
}