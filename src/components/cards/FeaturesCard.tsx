import { Link } from "react-router-dom";
import type { FeaturesType } from "../../types/Contact/ContactType";
import SpinigCircleIcon from "../sharedComponents/SpinigCircleIcon";

const FeaturesCard = ({ item,...aos }: { item: FeaturesType }) => {
  return (
    <Link
      {...aos}
      to={item.link}
      className="rotate-conic relative group flex items-center justify-center border border-Grey-15 rounded-[12px] bg-Grey-10 z-1 transition-all linear"
    >
    <div className="relative h-[98%] w-[99%] flex flex-col items-center xs:justify-center gap-3.5 lg:gap-4 xl:gap-5 py-[5.1282vw] px-[3.5897vw] lg:py-[2.0834vw] lg:px-[1.1112vw] xl:py-[2.08334vw] xl:px-[1.04167vw] rounded-[10px] bg-Grey-10 z-1 cursor-pointer overflow-hidden">
        {/* top right arrow icon component */}
        <div className="absolute top-[5%] right-[5%] w-6.5 h-6.5 xl:w-8.5 xl:h-8.5 text-Grey-30 group-hover:top-[4%] group-hover:right-[4%] transition-all duration-300 ease-in-out">
          {item.arrow}
        </div>

        {/* spining features icon */}
        <SpinigCircleIcon iconURL={item.icon} />

        {/* the text below the icon */}
        <div className="text-sm/[150%] lg:text-base/[150%] xl:text-xl/[150%] font-semibold flex flex-wrap gap-2.5 lg:gap-5 xl:gap-7.5 items-center text-center justify-center group-hover:text-shadow-xs group-hover:text-shadow-Purple-70 transition-all duration-300 ease-in-out">
          {typeof item.title === "string" ? (
            <p>{item.title}</p>
          ) : (
            item.title.map((title: string, index: number) => (
              <p key={index} className="text-center">
                {title}
              </p>
            ))
          )}
        </div>
      </div>
    </Link>
  );
};

export default FeaturesCard;
