export type HowItWorksCardProps = {
  step: number;
  title: string;
  description: string;
};

const HowItWorksCard = ({ step, title, description,...aos }: HowItWorksCardProps) => {
  return (
    <div className="w-full h-full flex flex-col relative group" {...aos}>
      <h4 className=" text-base xl:text-[20px] text-White leading-[150%] font-medium px-4 py-3.5 xl:px-5 xl:py-4 border-l border-Purple-60">
        Step {String(step).padStart(2, "0")}
      </h4>

      <div className="h-full bg-[linear-gradient(136deg,#703BF7_0%,rgba(112,59,247,0)_28%)] bg-Grey-15 p-px 
                   rounded-tl-0 rounded-tr-[10px] xl:rounded-tr-xl rounded-b-[10px] xl:rounded-b-xl overflow-hidden">
        <div className=" h-full relative flex flex-col bg-Grey-08 bg-[linear-gradient(136deg,#703BF7_-49.01%,rgba(112,59,247,0)_14%))]
                      p-[8.4%] xs:p-[7%] md:p-[9%]
                      rounded-tl-0 rounded-tr-[10px] xl:rounded-tr-xl rounded-b-[10px] xl:rounded-b-xl 
                      gap-3.5 md:gap-4 xl:gap-5">
          <h3 className="text-lg lg:text-xl xl:text-[26px] text-White font-semibold leading-[150%]">
            {title}
          </h3>
          <p className="text-sm md:text-base xl:text-lg text-Grey-60 leading-[150%] font-medium">
            {description}
          </p>
          <span
            className="absolute top-0 h-full w-[25%] -left-[50%] 
                       bg-[linear-gradient(90deg,rgba(255,255,255,0),#703bf780,rgba(255,255,255,0))]
                       opacity-0 group-hover:opacity-50 skew-x-[-45deg] shine-effect"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
