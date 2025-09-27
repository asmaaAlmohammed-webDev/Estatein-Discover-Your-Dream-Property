import { VALUE_PATH } from "../../svg/Paths";
import WavyBackdrop from "../../svg/WavyBackdrop";
import Button from "../sharedComponents/Button";
import SpinigCircleIcon from "../sharedComponents/SpinigCircleIcon";

interface ValuesCardProps {
  iconURL?: string;
  title: string;
  description: string;
  withButton?: boolean;
  smartSection?: boolean;
  withIcon?: boolean;
  link?: string;
  className?: string;
}

const ValuesCard = ({
  iconURL,
  withIcon,
  title,
  description,
  withButton,
  smartSection,
  link,
  className,
  ...aos
}: ValuesCardProps) => {
  return (
    <div id={title.replaceAll(" ", "_").replaceAll(",","").toLowerCase()} {...aos}
      className={`relative overflow-hidden z-20 rounded-[10px] xl:rounded-xl bg-Grey-08 border border-Grey-15 
    ${
      smartSection
        ? "p-6 lg:p-[7%] xl:py-[7%] xl:px-[8%]"
        : "p-6 lg:p-[2.7778vw] xl:p-[2.604167vw] xl:gap- 7.5"
    }
    flex flex-col  ${
      withButton
        ? " bg-center bg-Grey-10 gap-5 xl:gap-7.5"
        : "gap-4 lg:gap-5 xl:gap-7.5"
    } ${className}`}
    >
      {withButton && (
        smartSection ? (<div className="absolute inset-0 -left-[60%] w-[350%] -top-[100%] md:-top-[90%] md:-left-[110%] md:w-[500%] h-[300%] object-co object-center z-0 pointer-events-none">
          <WavyBackdrop paths={VALUE_PATH} />
        </div>)
        : (<div className="absolute inset-0 -left-[60%] w-[350%] -top-[100%] md:-top-[120%] md:-left-[10%] md:w-[170%] h-[400%] object-co object-center z-0 pointer-events-none">
          <WavyBackdrop paths={VALUE_PATH} />
        </div>)
      )}
      <div
        className={`flex justify-center items-center z-10 ${
          withButton
            ? "flex-col gap-5 lg:flex-row lg:gap-3.5 xl:gap-5"
            : "flex-row gap-2.5 lg:gap-4 xl:gap-5"
        }`}
      >
        {withIcon && iconURL && <SpinigCircleIcon iconURL={iconURL} isValuesCard />}
        <h3
          className={`flex-1 mr-auto ${
            withButton && !smartSection
              ? "text-xl/[150%] lg:text-2xl/[150%] xl:text-3xl/[150%] font-bold"
              : "text-lg/[150%] lg:text-xl/[150%] xl:text-2xl/[150%] font-semibold"
          }`}
        >
          {title}
        </h3>
        {withButton && !smartSection && (
          <Button
            content="Learn More"
            withBorder
            className="w-full lg:w-fit bg-Grey-08"
            link={link}
          />
        )}
      </div>
      <p className="text-sm/[150%] lg:text-base/[150%] xl:text-lg/[150%] font-medium z-10 text-Grey-60">
        {description}
      </p>
      {withButton && smartSection && (
        <Button
          content="Learn More"
          withBorder
          className="w-full bg-Grey-08 z-20"
          link={link}
        />
      )}
    </div>
  );
};

export default ValuesCard;
