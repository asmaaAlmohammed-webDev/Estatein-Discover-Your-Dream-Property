import React from "react";
import OurValuesCard from "../../components/cards/OurValuesCard";
import Header from "../../components/sharedComponents/Header";
import Container from "../../layouts/Container";
import type { OurValueSectionType } from "../../types/About/AboutType";

function OurValueSection({ data }: { data: OurValueSectionType }) {
  return (
    <Container className="lg:flex-row lg:items-center ">
      
      <Header hash="story" title={data.headline} description={data.description} withIcon 
      className="lg:w-[32%] xl:w-[32.39%]"/>
      
      <div className="flex flex-col gap-5 p-6 md:grid md:grid-cols-2 
      lg:p-[4%]  lg:gap-x-[2.97%] lg:gap-y-6 2xl:p-15 2xl:gap-x-[3%] 2xl:gap-y-7.5
      lg:w-[63%] xl:w-[62.59%]
      border border-Grey-15 bg-Grey-08 shadow-[0_0_0_6px_var(--color-Grey-10)]/90 rounded-xl">
        {data.values.map((item, index) => (
          <React.Fragment key={item.id}>
            <OurValuesCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              rightBorder={index % 2 === 0}
                data-aos="zoom-out"
                data-aos-delay={index * 100}
            />

            {/* h-line in mobile */}
            {index !== data.values.length - 1 && (
              <div className="md:hidden h-px w-full bg-Grey-15"></div>
            )}
            {/* h-line in md and xl */}
            {index == 1 && (
              <div className="hidden md:block col-span-2 h-px w-full bg-Grey-15"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
}

export default OurValueSection;
