import CountUp from "react-countup";
import type { HeroStat } from "../../../types/Home/HomeTypes";

type Props = HeroStat & {
  className?: string;
};

const StatsCard = ({ value, label, className,...aos }: Props) => {
  const numericValue = value ? parseFloat(value.replace(/[^\d.]/g, "")) : 0;
  const suffix = value ? value.replace(/[0-9.]/g, "") : "";

  return (
    <div
      {...aos}
      className={`flex flex-col gap-2 rounded-xl bg-Grey-10 p-3 md:px-[14px] md:py-5 lg:px-4 lg:py-6 border border-Grey-15 text-center md:text-start ${
        className ?? ""
      }`}
      aria-label={`${value} ${label}`}
    >
      <div className="text-White font-bold text-2xl md:text-3xl xl:text-[40px]">
        <CountUp end={numericValue} duration={4} suffix={suffix} />
      </div>

      <p className="text-Grey-60 text-[14px] md:text-[13px] lg:text-[18px] leading-tight">
        {label}
      </p>
    </div>
  );
};

export default StatsCard;
