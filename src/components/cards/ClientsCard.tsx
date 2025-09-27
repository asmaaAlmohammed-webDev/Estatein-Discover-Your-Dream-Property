// ClientsCard.tsx
import React from "react";
import type { Testimonial } from "../../types/Home/HomeTypes";

type Props = {
  testimonial: Testimonial;
};

const Clients: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="bg-Grey-08 border border-Grey-15 rounded-xl p-7.5 md:p-10 xl:p-12.5 flex flex-col justify-between gap-6 md:gap-7.5 xl:gap-10">
      <div className="flex gap-2 xl:gap-2.5">
        {Array.from({ length: testimonial?.rating }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-full dark:bg-Grey-10 border border-Grey-15 p-1.5 md:p-2 xl:p-2.5"
          >
            <img
              src={testimonial?.icon}
              alt="star"
              className="object-contain w-[18px] md:w-[20px] xl:w-[24px]"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.4 md:gap-2.5 xl:gap-3.5">
        <h3 className="text-White font-semibold text-lg md:text-xl xl:text-2xl ">
          {testimonial?.title}
        </h3>
        <p className="text-White text-sm md:text-base xl:text-lg font-medium">
          {testimonial?.text}
        </p>
      </div>

      <div className="flex items-center gap-2.5 xl:gap-3">
        <img
          src={testimonial?.author?.avatar}
          alt={testimonial?.author?.name}
          className="w-12.5 h-12.5 xl:w-15 xl:h-15 rounded-full object-cover"
        />
        <div>
          <p className="text-White text-base md:text-lg xl:text-xl">
            {testimonial?.author?.name}
          </p>
          <p className="text-Grey-60 text-sm md:text-base xl:text-lg">
            {testimonial?.author?.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
