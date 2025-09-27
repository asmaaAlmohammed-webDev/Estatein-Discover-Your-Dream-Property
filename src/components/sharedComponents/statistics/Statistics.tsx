import StatsCard from "./StatsCard";
import { Stats } from "../../../data/Home/HomeData";

const Statistics = () => {
  // you can define unique styles per card
  const cardClassNames = [
    "bg-Grey-10 md:w-[31.4%] xl:w-[32.4%] w-[48.324%]", // Card 1
    "bg-Grey-10 md:w-[31.4%] xl:w-[32.4%] w-[48.324%]", // Card 2
    "bg-Grey-10 md:w-[31.4%] xl:w-[32.4%] w-full", // Card 3
  ];

  return (
    <div className="w-full flex flex-wrap justify-between gap-y-3">
      {Stats.map((stat, index) => (
        <StatsCard
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          key={index}
          value={stat.value}
          label={stat.label}
          className={cardClassNames[index]} // unique class per card
        />
      ))}
    </div>
  );
};

export default Statistics;
