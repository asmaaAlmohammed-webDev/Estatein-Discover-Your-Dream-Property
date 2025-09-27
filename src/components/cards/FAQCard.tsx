import { useState } from "react";
import type { FaqItem } from "../../types/Home/HomeTypes";
import Button from "../sharedComponents/Button";
import ReadMore from "../kit/ReadMore";

type Props = {
  faq: FaqItem;
  showButton?: boolean;
  withShadow?: boolean;
};

function FAQCard({ faq, showButton = true, withShadow = false ,...aos }: Props) {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const handleReadMore = () => {
    setIsReadMoreOpen(true);
  };

  return (
    <>
      <div
        {...aos}
        className={`bg-Grey-08 border border-Grey-15 rounded-[10px] xl:rounded-xl flex flex-col justify-between gap-5 md:gap-6 xl:gap-7.5 w-full 
          ${withShadow ? " w-full lg:w-[31.663%] shadow-[0_0_0_4px_var(--color-Grey-10)] md:shadow-[0_0_0_6px_var(--color-Grey-10)] xl:shadow-[0_0_0_8px_var(--color-Grey-10)]" : ""}
          p-7.5 md:p-10 xl:p-12.5`}
      >
        <h3
          className={`text-White font-semibold ${
            withShadow ? "text-xl md:text-2xl xl:text-3xl" : "text-lg md:text-xl xl:text-2xl"
          }`}
        >
          {faq?.question}
        </h3>
        <p className="text-Grey-60 text-sm md:text-base xl:text-lg font-medium">{faq?.answer}</p>
        {showButton && (
          <div onClick={handleReadMore}>
            <Button link="#" content={faq.btnText} className=" md:w-fit bg-Grey-10" withBorder/>
          </div>
        )}
      </div>

      {/* ReadMore Modal */}
      <ReadMore
        isOpen={isReadMoreOpen}
        onClose={() => setIsReadMoreOpen(false)}
      >
        <div className="text-left">
          <h2 className="text-2xl font-bold text-White mb-4 font-urbanist">
            {faq.question}
          </h2>
          <div className="text-Grey-60 text-base leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </ReadMore>
    </>
  );
}

export default FAQCard;





