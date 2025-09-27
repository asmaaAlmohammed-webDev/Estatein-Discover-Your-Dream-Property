import type { FeaturesType } from "../../types/Contact/ContactType";
import FeaturesCard from "../../components/cards/FeaturesCard";

const Features = ({ data }: { data: FeaturesType[] }) => {
  return (
    <section id={'features'} className="grid grid-cols-2 md:grid-cols-4 gap-2.5 2xl:gap-5 p-2.5 2xl:p-5 shadow-[0_0_0_4px_#dbcefd] dark:shadow-[0_0_0_4px_#191919] border border-Grey-15 overflow-hidden lg:mt-1">
      {data.map((item, index) => {
        // making a card component and passing the data through props
        return <FeaturesCard key={index} item={item} 
              data-aos="fade-up"
              data-aos-delay={index * 100}/>;
      })}
    </section>
  );
};

export default Features;
