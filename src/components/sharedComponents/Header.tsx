import Button from "./Button";
import ThreeStars from "./ThreeStars";

const Header = ({
  title,
  description,
  withIcon,
  withBtn,
  btnContent = "",
  link = "",
  gap = "gap-2",
  className = "",
  type = "",
  textVW,
  hash ="",
}: {
  title?: string;
  description?: string;
  withIcon?: boolean;
  withBtn?: boolean;
  btnContent?: string;
  link?: string;
  gap?: string;
  className?: string;
  type?: string;
  textVW ?: boolean
  hash?: string;
}) => {
  return (
    <div
      className={`relative flex flex-col ${gap} md:gap-2.5 xl:gap-3.5 ${className}`} id={hash}
    >
      {/* stars icon*/}
      {withIcon && (
        <div className="absolute top-[-20px] md:top-[-30px] left-[-8px] md:left-[-16px]" data-aos="fade-up">
          <ThreeStars />
        </div>
      )}

      {/* title */}
      <h2
        data-aos="fade-up"
        className={`${type == "footer" ? "text-white" : "text-White"}
         ${textVW ? "text-[28px] md:text-[38px] lg:text-[2.5vw]" : "text-[28px] md:text-[38px] xl:text-5xl" }
         font-semibold leading-[150%]`}
      >
        {title}
      </h2>

      {/* description */}
      <div className="flex items-center justify-between gap-37.5 xl:gap-50">
        <p
          data-aos="fade-up"
          className={`text-Grey-60 font-medium text-sm md:text-base xl:text-lg leading-[150%]`}
        >
          {description}
        </p>
        {withBtn && (
          <div className="hidden md:block">
            <Button
              content={btnContent}
              className="bg-Grey-10 hidden md:block"
              withBorder
              link={link}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
