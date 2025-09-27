import type { DetailsType } from "../../types/PropertyDetails/PropertyDetailsTypes";

type DescriptionSectionProps = {
  title: string;
  description: string;
  details: DetailsType[];
};

export default function DescriptionSection({
  title,
  description,
  details,
}: DescriptionSectionProps) {
  return (
    <div className=" lg:w-[49.0601%] w-full h-fit rounded-xl border border-Grey-15 p-5 
      lg:p-10 xl:p-12.5 flex flex-col gap-5 md:gap-10 xl:gap-12.5 bg-Grey-08">
      <div>
        <h2 className="text-White text-lg md:text-xl xl:text-2xl font-semibold mb-1.5 md:mb-2.5 xl:mb-3.5" data-aos="fade-left">
          {title}
        </h2>
        <p className="text-Grey-60 text-sm lg:text-base xl:text-lg leading-relaxed" data-aos="fade-right">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:justify-between gap-y-5" >
        {details.map((Card, index) => {
          const isLast = index === details.length - 1;
          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`
                w-1/2 lg:w-auto flex flex-col gap-1.5 md:gap-2 xl:gap-2.5 
                ${index !== 0 && !isLast ? "border-l border-Grey-15 pl-4" : ""}
                ${isLast 
                  ? "w-full border-t border-Grey-15 pt-5 lg:pt-0 lg:w-auto lg:border-t-0 lg:border-l lg:pl-4" 
                  : ""}
              `}
              >
              <div className="flex items-center gap-1 xl:gap-1.5">
                <span className="text-Grey-60">{Card.icon}</span>
                <span className="text-Grey-60 text-sm xl:text-lg font-medium">{Card.label}</span>
              </div>
              <span className="text-White text-lg lg:text-xl xl:text-2xl font-semibold">
                {Card.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}